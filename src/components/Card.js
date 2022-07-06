import star from "../images/star.png";

export default function Card(props) {
  console.log(props);
  const num = [1,2,3,4,5,6];
  const doubleNum = num.map(num => num * 2);
  console.log(doubleNum);
  return (
    <div className="card">
      <img src={`images/${props.image}`} alt="player" className="card--image"></img>
      <div className="card--stats">
        <img src={star} alt="star" className="card--star"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.review}) - </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}
