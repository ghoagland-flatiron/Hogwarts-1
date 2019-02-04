import React from 'react'

function SearchTerm (props) {
  return(<input value={props.term} onChange={props.handleChange} />)
}

export default SearchTerm
