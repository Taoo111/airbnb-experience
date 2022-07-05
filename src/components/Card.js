import playerPhoto from "../images/card-img-1.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={playerPhoto} alt="player" className="card--image"></img>
      <div className="card--stats">
        <img src={star} alt="star" className="card--star"></img>
        <span>5.0 </span>
        <span className="gray"> (6) - </span>
        <span className="gray"> USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $126</span> / person</p>
    </div>
  );
}
