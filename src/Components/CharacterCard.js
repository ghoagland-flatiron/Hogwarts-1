import React from "react";
// import UpdateForm from './UpdateForm'
import ToggleHouseForm from './ToggleHouseForm'

class CharacterCard extends React.Component {

  deleteChar = (e) => {
    // console.log(e.target);
    const id = this.props.character.id
    fetch(`http://localhost:3001/characters/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(r => r.json())
    .then(res => this.props.handleCharacterDelete(id))
  }
  render() {
    const { character, houses, handleHouseChange } = this.props
    return (
      <div className='character-card'>
        <img src={character.image1} alt={character.name}/>
        <p>{character.name}</p>
        <ToggleHouseForm houses={houses} character={character} handleHouseChange={handleHouseChange} />
        <button value={character.id} onClick={this.deleteChar}>Delete Char</button>
      </div>
    )
  }
}

export default CharacterCard;
