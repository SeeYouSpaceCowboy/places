import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import '../stylesheets/components/GoogleMap.css'

export default class Map extends Component {
  static createMapOptions = (maps) => {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: true,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
  }

  static defaultProps = {
    center: { lat: 40.7081160, lng: -73.9570700 },
    zoom: 12
  }

  render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          options={ this.createMapOptions }
          layerTypes={ ['TransitLayer'] } >

          {
            this.props.locationsList.map((location, i) => {
              return <MapMarker
                        key={ i }
                        lat={ location.geometry.location.lat() }
                        lng={ location.geometry.location.lng() }
                      />
            })
          }
        </GoogleMapReact>
      </div>
    )
  }
}
