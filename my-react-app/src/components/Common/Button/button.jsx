import "./button.css";
export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  return (
    <button className={`common-button ${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}