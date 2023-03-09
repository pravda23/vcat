import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import CardModal from "./components/card-modal/card-modal.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { stripHtml } from "string-strip-html";

const App = () => {
  // const [vehicles, setVehicles] = useState({
  //   title: "",
  //   imgUrl: "",
  //   isActive: false,
  // });

  const [vehicles, setVehicles] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch(
      "https://johnbartmann.com/vcat/wp-json/wp/v2/posts?_fields=id,title,excerpt,jetpack_featured_media_url"
    )
      .then((res) => {
        return res.json();
      })
      .then((vehicle) => {
        setVehicles(vehicle);
        vehicle.map((i) => {
          i.isActive = false;
        });
      });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1 className="app-title">Vehicle catalogue</h1>
      </div>

      <CardList vehicles={vehicles} />
    </div>
  );
};

export default App;
