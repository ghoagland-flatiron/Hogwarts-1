import React, { Component } from 'react'


class NewCharacterForm extends Component {
  state = {
    name: "",
    age: 0,
    house: "Gryffindor",
    role: '',
    image1: '',
    image2: ''
  }

  handleChange = (e) => {
    // console.dir(e.target.name)
    // ["weight as ratio of pig to ...."]
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.postChar()
      .then(res => this.props.handleCharacterSubmit(res))

  }

  postChar() {
    return fetch(`http://localhost:3001/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .catch(console.error)
    //.then(res => this.props.handleCharacterSubmit(res))
  }


  render() {
    const houseOptions = this.props.houses.map(house => (
      <option key={house} value={house}>{house}</option>
    ))
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" value={this.state.name} onChange={this.handleChange} />

        <label htmlFor="age">Age:</label>
        <input name="age" value={this.state.age} onChange={this.handleChange} />

        <label htmlFor="role">Role:</label>
        <input name="role" value={this.state.role} onChange={this.handleChange} />

        <label htmlFor="image1">Image 1:</label>
        <input name="image1" value={this.state.image1} onChange={this.handleChange} />

        <label htmlFor="image2">Image 2:</label>
        <input name="image2" value={this.state.image2} onChange={this.handleChange} />

        <select name="house" onChange={this.handleChange} >
          { houseOptions }
        </select>

        <button type="submit">Create Character</button>
      </form>
    )
  }
}

export default NewCharacterForm
