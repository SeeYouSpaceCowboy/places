import React, { Component } from 'react'
import '../stylesheets/components/MainMap.css'
import '../stylesheets/components/Search.css'
import '../stylesheets/index.css'
import SideDetail from './SideDetail'
import LocationSearch from '../components/LocationSearch'
import SideNav from '../components/SideNav'
import Map from '../components/Map'

export default class MainMap extends Component {
  constructor() {
    super()

    this.state = {
      locationsList: []
    }

    this.getLocationsList = this.getLocationsList.bind(this)
  }

  render() {
    return (
      <div className='main-map-grid'>
        <SideNav />
        <LocationSearch getLocationsList={ this.getLocationsList }/>
        <SideDetail locationsList={ this.state.locationsList }/>
        <Map locationsList={ this.state.locationsList }/>
      </div>
    )
  }

  getLocationsList(locations) {
    this.setState({ locationsList: locations })
  }
}
