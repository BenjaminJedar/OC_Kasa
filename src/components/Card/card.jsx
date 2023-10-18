function Card({ title_value, img_value }) {
  return (
    <div className="card">
      <img src={img_value} alt="couverture" />
      <p className="location_title">{title_value}</p>
    </div>
  );
}

export default Card;
