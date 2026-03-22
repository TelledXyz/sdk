import "./button.css";

export default function Button({ children, onClick }) {
  return (
    <button className="telled-btn" onClick={onClick}>
      {children}
    </button>
  );
}
