import React, { Component } from 'react'
import '../stylesheets/components/MainMap.css'
import '../stylesheets/components/Search.css'
import '../stylesheets/index.css'
import SideDetail from './SideDetail'
import SideNav from '../components/SideNav'
import Map from '../components/Map'

export class MainMap extends Component {
  render() {
    return (
      <div className='main-map-grid'>
        <input className='search' name='input' placeholder='Search or locate your place'/>
        <SideDetail />
        <SideNav />
        <Map />
      </div>
    )
  }
}

export default (MainMap)
