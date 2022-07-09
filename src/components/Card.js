import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
    {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`images/${props.coverImg}`}
        alt="player"
        className="card--image"
      ></img>
      <div className="card--stats">
        <img src={star} alt="star" className="card--star"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.review}) - </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> /
      </p>
    </div>
  );
}
