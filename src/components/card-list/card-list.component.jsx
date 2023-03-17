import Card from "../card/card.component";
import useState from "react";
import "./card-list.styles.css";

const CardList = ({ vehicles, changeActiveCardArray }) => {
  const clickHandler = (e) => {
    e.preventDefault();

    const activeCard = vehicles.filter((i) => i.id == e.target.id);

    activeCard[0].isActive = true;

    changeActiveCardArray(activeCard);
  };

  return (
    <>
      <div className="card-list" onClick={clickHandler}>
        {vehicles.map((v) => {
          return <Card vehicle={v} key={v.id} />;
        })}
      </div>
    </>
  );
};

export default CardList;
