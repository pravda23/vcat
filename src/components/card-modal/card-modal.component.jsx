import React from "react";
import "./card-modal.styles.css";

const CardModal = (props) => {
  const stripHTML = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");
  const { id, title, excerpt, jetpack_featured_media_url, isActive } =
    props.vehicle;

  // setModal();
  return props.isActive ? (
    <div className="card-modal-container">
      <p>{props.title}</p>
    </div>
  ) : null;
};

export default CardModal;
