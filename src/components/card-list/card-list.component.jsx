import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ vehicles }) => {
  const clickHandler = (e) => {
    e.preventDefault();

    console.log(vehicles);
    vehicles.map((i) => {
      i.isActive = false;
    });

    const activeCard = vehicles.filter((i) => i.id == e.target.id);

    activeCard[0].isActive = true;
  };

  console.log(vehicles);

  return (
    <div className="card-list" onClick={clickHandler}>
      {vehicles.map((v) => {
        return <Card vehicle={v} key={v.id} />;
      })}
    </div>
  );
};

export default CardList;
