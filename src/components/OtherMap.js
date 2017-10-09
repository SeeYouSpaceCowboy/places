import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import '../stylesheets/components/GoogleMap.css'

export default class Map extends Component {
  render() {
    const NewYork = { lat: 40.7446790, lng: -73.9485420 }
    const NewYorkMarker = { lat: 40.7473310, lng: -73.8517440 }

    const MyMapComponent = withScriptjs(withGoogleMap( props =>
      <GoogleMap
          defaultZoom={ 12 }
          defaultCenter={ NewYork }>
          { props.isMarkerShown && <Marker position={ NewYorkMarker } /> }
      </GoogleMap>
    ))

    var mapStyle = {
      width: '100%',
      height: '100%'
    }

    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div className='google-map' style={{ height: `100%` }} />}
        containerElement={<div className='google-map' style={{ height: `100%` }} />}
        mapElement={<div className='google-map' style={{ height: `100%` }} />}

        style={ mapStyle }/>
    )
  }
}
