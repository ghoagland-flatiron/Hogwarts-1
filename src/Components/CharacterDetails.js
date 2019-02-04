import React, { Component } from "react";
import ToggleHouseForm from './ToggleHouseForm'

class CharacterDetails extends Component {
  state = {
    showDetails: false
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const { character } = this.props
    return (
      <div className='character-card' >
        {
          this.state.showDetails
          ? (
            <div>
              <h3>{ character.name }</h3>
              <p>Age: {character.age}</p>
              <p>Role: {character.role}</p>
              <ToggleHouseForm
                character={character}
                houses={this.props.houses}
                handleHouseChange={this.props.handleHouseChange}
              />
              <button onClick={this.handleClick}>Hide Details</button>
            </div>
          )
          : <img src={character.image2} alt={character.name} onClick={this.handleClick} />
        }
      </div>
    )
  }
};

export default CharacterDetails;
