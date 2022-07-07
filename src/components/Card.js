import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`images/${props.coverImg}`} alt="player" className="card--image"></img>
      <div className="card--stats">
        <img src={star} alt="star" className="card--star"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.review}) - </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}
