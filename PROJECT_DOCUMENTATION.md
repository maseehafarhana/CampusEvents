# CampusConnect Project Documentation

## 1. Project Summary

CampusConnect is a beginner-friendly React campus event application. It displays event cards, allows users to search and filter events, add events, save favorites, view event details, and submit registrations.

The interface follows the supplied Final task UI.pdf:

- white and light gray page background
- indigo primary buttons
- simple CampusConnect header and footer
- centered hero section
- upcoming-events cards
- add-event form
- event details
- student registration form and confirmation

## 2. Technologies Used

| Technology | Why it is used |
|---|---|
| React | Builds the screen with reusable components and state. |
| React Router | Changes pages without reloading the browser. |
| Vite | Starts the project and creates a production build quickly. |
| JavaScript | Contains data, filtering, form, and interaction logic. |
| CSS | Defines layout, colors, spacing, card images, and responsive design. |
| localStorage | Keeps favorite IDs after the browser is refreshed. |
| Event service | Keeps event data operations separate from page components. |

The app currently uses local in-memory data from eventService.js rather than an external API. This is simple, reliable, and beginner-friendly. It behaves like an API, so a real free API can be connected later without rewriting every React page.

## 3. How to Run the Project

```powershell
cd C:\DoodleBlue\my-react-app
npm install
npm run dev
```

Open the URL printed by Vite, normally http://localhost:5173.

For a production check:

```powershell
npm run build
```

For code quality:

```powershell
npm run lint
```

## 4. Project File Map

| File or folder | Responsibility |
|---|---|
| src/main.jsx | Starts React and mounts App.jsx. |
| src/App.jsx | Loads events and defines the application routes. |
| src/App.css | Main visual styling for the whole project. |
| src/index.css | Base browser reset and root typography. |
| src/context/FavoritesContext.jsx | Shares favorite state between cards and the navbar. |
| src/hooks/useDebounce.js | Waits 300 milliseconds before applying search text. |
| src/services/eventService.js | Stores and retrieves the event list with simple service functions. |
| src/components/Navbar/Navbar.jsx | Displays navigation links and favorite count. |
| src/components/Footer/Footer.jsx | Displays contact and campus information. |
| src/components/EventCard/EventCard.jsx | Displays one event card, actions, image, and favorite button. |
| src/components/EventForm/EventForm.jsx | Adds a new event through a controlled form. |
| src/components/RegistrationForm/RegistrationForm.jsx | Handles registration form submission and confirmation. |
| src/pages/Home/HomePage.jsx | Displays the landing-page hero. |
| src/pages/Events/EventsPage.jsx | Displays search, filtering, sorting, add-event, and cards. |
| src/pages/EventDetails/EventDetailsPage.jsx | Shows complete information for one event. |
| src/pages/Register/RegisterPage.jsx | Displays the registration page for a selected event. |
| src/pages/NotFound/NotFoundPage.jsx | Displays a friendly 404 screen. |
| src/assets | Stores local event and hero images. |

## 5. Application Data Flow

1. App.jsx calls getEvents() when the app first loads.
2. getEvents() returns the event array from eventService.js.
3. App.jsx saves the array in the events state.
4. EventsPage.jsx receives the array as a prop.
5. useDebounce.js delays search changes by 300 milliseconds.
6. filter() creates a new array containing only matching events.
7. [ ...filteredEvents ].sort(...) sorts a copy without changing the original array.
8. EventCard components receive each event and render one card.
9. EventForm calls handleCreateEvent() and createEvent().
10. RegistrationForm stores submitted values only in React state and displays confirmation.

## 6. Line-by-Line Interview Explanation

### src/main.jsx

```jsx
import { StrictMode } from 'react'
```

Imports React Strict Mode for extra development checks.

```jsx
import { createRoot } from 'react-dom/client'
```

Imports the modern function used to mount React in a browser.

```jsx
createRoot(document.getElementById('root')).render(<App />)
```

Finds the root div in index.html and places the React application inside it.

### src/App.jsx

```jsx
const [events, setEvents] = useState([]);
```

Creates a state variable for the event array. [] is the initial empty array.

```jsx
useEffect(() => {
  // load events
}, []);
```

Runs the event-loading code after the first render. The empty dependency array means it does not repeatedly run.

```jsx
const data = await getEvents();
setEvents(data);
```

Waits for the event service and stores the returned data in React state.

```jsx
<FavoritesProvider>
```

Makes favorites available to every child component.

```jsx
<BrowserRouter>
```

Enables URL-based navigation.

```jsx
<Routes>
  <Route path="/events" element={<EventsPage />} />
</Routes>
```

The Routes area compares the browser URL with Route paths and displays the matching page.

### useDebounce.js

```jsx
const [debouncedValue, setDebouncedValue] = useState(value);
```

Creates state containing the delayed value.

```jsx
const timer = setTimeout(() => {
  setDebouncedValue(value);
}, delay);
```

Waits for the chosen delay before updating the filtered search value.

```jsx
return () => clearTimeout(timer);
```

Cancels the previous timer. This prevents typing too quickly from creating old timers.

### EventsPage.jsx

```jsx
const debouncedSearch = useDebounce(search.trim(), 300);
```

Converts the search to one delayed value.

```jsx
const filteredEvents = events.filter(event => {
```

Creates a new array. filter() does not change the original events array.

```jsx
const title = String(event.name ?? event.title ?? "").toLowerCase();
```

Supports different event name property names and changes text to lowercase for easy comparison.

```jsx
return matchesText && matchesCategory && matchesFavorite;
```

An event must match the search, category, and favorites mode to remain in the result array.

```jsx
const displayedEvents = [...filteredEvents].sort(...)
```

The spread operator creates a copy before sorting, protecting the original event order.

### EventCard.jsx

```jsx
const { favorites, toggleFavorite } = useFavorites();
```

Reads the shared favorites context.

```jsx
const isFavorite = favorites.has(String(event.id));
```

Checks whether the current event ID exists in the favorites Set.

```jsx
onClick={() => toggleFavorite(event.id)}
```

Calls the shared function when the favorite button is pressed.

```jsx
<Link to={`/events/${event.id}`}>View Details</Link>
```

Uses a template literal to create a route containing the event ID.

```jsx
<img src={eventImage} alt={`${event.name ?? event.title} campus event`} />
```

Displays the category picture and provides readable alternative text.

### FavoritesContext.jsx

```jsx
const [favorites, setFavorites] = useState(() => new Set());
```

Creates a Set of event IDs for fast add/remove checks.

```jsx
const next = new Set(previous);
```

Copies the old Set because React state should not be changed directly.

```jsx
localStorage.setItem("campus-favorites", JSON.stringify([...next]));
```

Saves favorites as JSON so they remain after refreshing.

### EventForm.jsx

```jsx
const [formData, setFormData] = useState(initialForm);
```

Stores all controlled form fields in one object.

```jsx
setFormData(previous => ({
  ...previous,
  [name]: value
}));
```

Copies the old form object and updates only the changed field.

```jsx
await onAdd({ name: formData.name.trim(), ... });
```

Sends cleaned values to App.jsx, then to eventService.js.

### RegistrationForm.jsx

```jsx
const formData = new FormData(event.currentTarget);
```

Collects named input values from the submitted form.

```jsx
formData.get("name")
```

Reads the input whose name attribute is "name".

```jsx
setSubmitted(true)
```

Changes the page from the form view to the confirmation view.

## 7. Search, Filter, Sort, and Reset

- Controlled input: the search value is kept in React state.
- 300 ms debounce: search updates wait for the user to stop typing.
- Name or venue search: title and venue both match the search text.
- Category filter: only matching category values remain.
- Favorites filter: navbar Favorites link applies a favorite-only view.
- Sorting: a copy of the filtered array is sorted by name.
- Reset: search, category, and sort return to their default values.

## 8. Why Reusable Components Were Used

EventCard.jsx avoids repeating card markup for every event. EventForm.jsx keeps add-event form logic separate. RegistrationForm.jsx keeps registration logic separate. Navbar and Footer appear consistently across all routes. FavoritesContext avoids passing favorite state through every file manually.

## 9. Beginner Interview Questions

### What is props?

Props are values passed from a parent component to a child component. EventsPage sends an event object into EventCard as `event={event}`.

### What is state?

State is data React tracks for the current screen. When state changes, React renders the component again.

### Why use spread `...`?

Spread copies properties or array items. It helps update state without mutating the original object or array.

### Why use key on cards?

React uses `key={event.id}` to identify each card and update the correct card when data changes.

### Why split API logic into a service?

Pages should focus on display. eventService.js handles event data, making it easier to replace local data with a real backend later.

### Why is the original array not sorted directly?

Sorting mutates JavaScript arrays. The app sorts a copied array, which preserves the original data order.

### How are favorites shared?

FavoritesProvider wraps the full app. useFavorites reads the provider from any child component.

### What is a debounce?

A debounce waits until an action stops changing. Search waits 300 milliseconds after typing stops, reducing unnecessary filtering work.
