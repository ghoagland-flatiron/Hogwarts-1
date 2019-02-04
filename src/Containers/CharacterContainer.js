import React from "react";
import CharacterCard from '../Components/CharacterCard'
import SearchForm from '../Components/SearchForm'

export default class CharacterContainer extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  renderCharCards() {
    const filteredChars = this.props.characters.filter(char => {
      const term = this.state.searchTerm.toLowerCase()
      const hasName = char.name.toLowerCase().includes(term)
      const hasHouse = char.house.toLowerCase().includes(term)
      return hasName || hasHouse
    })

    return filteredChars.map(char => (
      <CharacterCard
        key={char.id}
        character={char}
        houses={this.props.houses}
        handleHouseChange={this.props.handleHouseChange}
        handleCharacterDelete={this.props.handleCharacterDelete}
      />
    ))
  }

  render() {

    return (
      <> {/* see React Fragments*/}
        <SearchForm term={this.state.searchTerm} handleChange={this.handleChange}/>
        <div className='character-container'>
          { this.renderCharCards() }
        </div>
      </>
    );
  }
}
