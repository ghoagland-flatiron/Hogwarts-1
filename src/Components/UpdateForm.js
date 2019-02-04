import React from "react";

class UpdateForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const newHouse = e.target.house.value
    const id = this.props.characterId

    this.patchHouse(newHouse, id)
    this.props.handleHouseChange(newHouse, id)
    this.props.handleClick()
  }

  patchHouse(newHouse, id) {
    fetch(`http://localhost:3001/characters/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({house: newHouse})
    })
    .then(r => r.json())
    .then(console.log)
  }


  render() {
    const houseOptions = this.props.houses.map(house => (
      <option key={house} value={house}>{house}</option>
    ))

    return (
      <form onSubmit={this.handleSubmit} >
        <select name='house'>
         { houseOptions }
        </select>
        <button type="submit">Update House</button>
      </form>
    )
  }
}

export default UpdateForm;
