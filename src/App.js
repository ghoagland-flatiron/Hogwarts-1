import React, { Component } from "react";
import CharacterContainer from './Containers/CharacterContainer'
import HouseContainer from './Containers/HouseContainer'
import NewCharacterForm from './Components/NewCharacterForm'
import "./App.css";

class App extends Component {
  state = {
    characters: [],
    houses: []
  }

  handleCharacterSubmit = (newChar) => {
    const newChars = [...this.state.characters, newChar]
    this.setState({ characters: newChars })
  }

  handleHouseChange = (newHouse, characterId) => {
    const newChars = this.state.characters.map(char => {
      if(char.id === characterId) {
        return { ...char, house: newHouse }
      } else {
        return char
      }
    })
    this.setState({ characters: newChars })
  }

  handleCharacterDelete = (id) => {
    const newChars = this.state.characters.filter(char => char.id !== id)
    this.setState({ characters: newChars })
  }

  componentDidMount() {
    this.fetchByType('houses')
    this.fetchByType('characters')
  }

  fetchByType(housesOrCharacters) {
    fetch(`http://localhost:3001/${housesOrCharacters}`)
      .then(r => r.json())
      .then(res => this.setState({ [housesOrCharacters]: res }))
  }

  render() {
    return (
      <div className="app">
        <CharacterContainer
          characters={this.state.characters}
          houses={this.state.houses}
          handleHouseChange={this.handleHouseChange}
          handleCharacterDelete={this.handleCharacterDelete}
        />
        <HouseContainer
          characters={this.state.characters}
          houses={this.state.houses}
          handleHouseChange={this.handleHouseChange}
        />
        <NewCharacterForm handleCharacterSubmit={this.handleCharacterSubmit} houses={this.state.houses}
        />
      </div>
    );
  }
}

export default App;
