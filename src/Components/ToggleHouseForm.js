import React, { Component } from 'react'
import UpdateForm from './UpdateForm'

class ToggleHouseForm extends Component {
  state = {
    formVisible: false
  }


  handleClick = (e) => {
      // console.log(e);
      this.setState({ formVisible: !this.state.formVisible})
    }

  render() {
    const { houses, character, handleHouseChange } = this.props
    if (this.state.formVisible) {
      return (
        <UpdateForm
          handleClick={this.handleClick}
          houses={houses}
          characterId={character.id}
          handleHouseChange={handleHouseChange}
        />
      )
    } else {
      return <p onClick={this.handleClick}>House: {character.house}</p>
    }

  }
}

export default ToggleHouseForm
