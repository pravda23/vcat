import Card from "../card/card.component";
import CardModal from "../card-modal/card-modal.component";
import "./card-list.styles.css";

const CardList = ({ vehicles }, { isActive }) => {
  console.log(vehicles);

  return (
    <div className="card-list">
      {vehicles.map((vehicle) => {
        return <Card vehicle={vehicle} key={vehicle.id} />;
      })}
    </div>
  );
};

export default CardList;
