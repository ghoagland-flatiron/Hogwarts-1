import React from "react";
import CharacterDetails from './CharacterDetails'

const House = (props) => {
  const { houseName, characters, houses, handleHouseChange } = props
  // const houseName = props.houseName
  // const characters = props.characters
  return (
    <li>
      <h1>{houseName}</h1>
      <div className='house-card-container'>
        { renderCharacters(characters, houses, handleHouseChange) }
      </div>
    </li>
  );
};

function renderCharacters(characters, houses, handleHouseChange) {
  return characters.map(char => (
    <CharacterDetails
      character={char}
      key={char.id}
      houses={houses}
      handleHouseChange={handleHouseChange}
    />
  ))
}

export default House;
