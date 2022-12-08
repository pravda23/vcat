import { Component } from "react";
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

  render() {
    const {monsters, searchField} = this.state
    const {onSearchChange} = this.state

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

        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <p>{monster.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
