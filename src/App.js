import { Component } from "react";
import CardList from './components/card-list/card-list.component'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
      ],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ monsters: data });
    });
  }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {return {searchField}});
  }
  
  logged = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    console.log(searchField)
  }

  render() {
    const {monsters, searchField} = this.state
    const {onSearchChange} = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name
      .toLocaleLowerCase()
      .includes(searchField);
    });

    
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={onSearchChange}

        />

        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
