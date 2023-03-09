import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState("Vehicle catalogue");

  // const onSearchChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setSearchField(searchFieldString);
  // };
  // const onTitleChange = (event) => {
  //   const titleString = event.target.value.toLocaleLowerCase();
  //   setTitle(titleString);
  // };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setMonsters(user);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      {/* <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"monsters-search-box"}
      /> */}

      {/* <SearchBox
        onChangeHandler={onTitleChange}
        placeholder={"set title"}
        className={"monsters-search-box"}
      /> */}

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
