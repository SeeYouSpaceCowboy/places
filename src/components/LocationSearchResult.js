import React from 'react'

const LocationSearchResult = (props) => {
  return (
    <div className='search-result'>
      <img src={ props.imgUrl } alt='address'/>
      <div className='search-info'>
        <h2>{ props.name }</h2>
        <p>{ props.address }</p>
      </div>
    </div>
  )
}

export default LocationSearchResult
