import React from "react";
import "./card.styles.css";

const Card = (props) => {
  const { id, title, excerpt, jetpack_featured_media_url } = props.vehicle;
  return (
    <div className="card-container">
      <img alt={`vehicle ${title.rendered}`} src={jetpack_featured_media_url} />
      <h2>{title.rendered}</h2>
      <p>{excerpt.rendered}</p>
    </div>
  );
};

export default Card;
