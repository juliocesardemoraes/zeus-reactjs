import "./card.css";
import natureImage from "./assets/test2.jpg";

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={natureImage} alt="Paisagem natural" />
      <div className="card-content">
        <h2 className="card-title">Paisagem Natural</h2>
        <p className="card-description">
          Uma vista tranquila da natureza para inspirar o seu dia.
        </p>
      </div>
    </div>
  );
}
