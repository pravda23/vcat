import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
  const [vehicles, setVehicles] = useState([]);

  // console.log(vehicles);

  useEffect(() => {
    fetch(
      "https://johnbartmann.com/vcat/wp-json/wp/v2/posts?_fields=id,title,excerpt,jetpack_featured_media_url"
    )
      .then((res) => {
        return res.json();
      })
      .then((vehicle) => {
        setVehicles(vehicle);
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
