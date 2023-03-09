import Card from "../card/card.component";
import CardModal from "../card-modal/card-modal.component";
import "./card-list.styles.css";

const CardList = ({ vehicles }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    const cardId = e.target.id;
    console.log(cardId);
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
