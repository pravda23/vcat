import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ vehicles }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    const activeCard = vehicles.filter((i) => i.id == e.target.id);

    activeCard.map((i) => {
      i.isActive = false;
    });
    activeCard[0].isActive = true;
    console.log(activeCard);
  };

  return (
    <div className="card-list" onClick={clickHandler}>
      {vehicles.map((v) => {
        return <Card vehicle={v} key={v.id} />;
      })}
    </div>
  );
};

export default CardList;
