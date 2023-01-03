import { useEffect, useState } from "react";
import CardList from './components/card-list/card-list.component'
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState()
  const [filteredMonsters, setFilterMonsters] = useState(monsters)

  
  useEffect(() =>  {

    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ monsters: data });
    });
    
  }, []) 

  useEffect(() => {

    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
    
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className={'monsters-search-box'}
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'} />        

        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

export default App;
