import React, { Component } from 'react'
import '../stylesheets/components/MainMap.css'
import '../stylesheets/components/Search.css'
import '../stylesheets/index.css'
import SideDetail from './SideDetail'
import LocationSearch from '../components/LocationSearch'
import SideNav from '../components/SideNav'
import Map from '../components/Map'

export default class MainMap extends Component {
  render() {
    return (
      <div className='main-map-grid'>
        <SideDetail />
        <SideNav />
        <Map />
      </div>
    )
  }
}
