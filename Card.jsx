import "./card.css";

export default function Card({ title, children }) {
  return (
    <div className="telled-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
