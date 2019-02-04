import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  renderHouses() {
    const { houses, characters } = this.props

    return houses.map(house => {
      const studs = characters.filter(char => (char.house === house))
      return (
        <House
          key={house}
          houseName={house}
          characters={studs}
          houses={this.props.houses}
          handleHouseChange={this.props.handleHouseChange}
        />
      )
    })
  }

  render() {
    // const { houses, characters } = this.props

    return (
      <ul className="house-container">
        { this.renderHouses() }
      </ul>
    );
  }
}
