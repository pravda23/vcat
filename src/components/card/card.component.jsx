import React from "react";
import CardModal from "../card-modal/card-modal.component";
import "./card.styles.css";

const Card = (props) => {
  const stripHTML = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");
  const { id, title, excerpt, jetpack_featured_media_url } = props.vehicle;
  return (
    <>
      <div className="card-container" id={props.vehicle.id}>
        <img
          alt={`vehicle ${title.rendered}`}
          src={jetpack_featured_media_url}
        />
        <h2>{title.rendered}</h2>
        <p>{stripHTML(excerpt.rendered)}</p>
      </div>
      <CardModal title={title.rendered} />
    </>
  );
};

export default Card;
