import { createContext, useContext, useMemo, useState } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("campus-favorites");
    return new Set(saved ? JSON.parse(saved) : []);
  });

  function toggleFavorite(eventId) {
    const id = String(eventId);
    setFavorites(previous => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem("campus-favorites", JSON.stringify([...next]));
      return next;
    });
  }

  const value = useMemo(
    () => ({ favorites, toggleFavorite }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider.");
  }
  return context;
}