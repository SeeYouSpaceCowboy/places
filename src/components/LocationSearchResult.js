import React from 'react'

const LocationSearchResult = (props) => {
  return (
    <div className='search-result'>
      <img src={ props.imgUrl } alt='address'/>
      <div className='search-info'>
        <h2>Diner Maria</h2>
        <p>New York, NY 10045</p>
      </div>
    </div>
  )
}

export default LocationSearchResult
