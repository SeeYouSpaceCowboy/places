import React from 'react'

const LocationSearchResult = (props) => {
  return (
    <div className='search-result'>
      <img src={ props.imgUrl } alt='address'/>
      <div className='search-info'>
        <div className='search-buttons'>
          <button>Love</button>
          <button>Want</button>
          <button>Save</button>
        </div>
        <div className='search-address'>
          <h2>{ props.name }</h2>
          <p>{ props.address }</p>
        </div>
      </div>
    </div>
  )
}

export default LocationSearchResult
