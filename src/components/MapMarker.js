import React from 'react'
import markerImg from '../stylesheets/map-pin-b.png'

const MapMarker = (props) => {
  return <img src={ markerImg } alt='marker' style={ { width: '4em', height: '4em' } }/>
}

export default MapMarker
