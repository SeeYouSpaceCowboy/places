import React, { Component } from 'react'
const google = window.google

export default class Map2 extends Component {
  render() {
    let map = new google.maps.Map(this.refs.map,{
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    })

    return (
      <div className='google-map' ref='map'></div>
    )
  }

  componentDidMount() {
    
  }
}
