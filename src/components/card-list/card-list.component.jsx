import {Component} from 'react'

class CardList extends Component {
  render() {
    const {monsters} = this.props
    return (
      <div>
        {monsters.map(monster => (
         <p key={monster.id}>{monster.name}</p> 
        ))}
     </div>
      )
    }
}

export default CardList;
