import React, { Component } from 'react'
import LocationSearchResult from '../components/LocationSearchResult'
import '../stylesheets/components/SideDetail.css'

export default class SideDetail extends Component {
  render() {
    var heartLink = {
      color: '#c0392b',
      padding: '0.2em'
    }

    var p = {
      textAlign: 'center',
      paddingTop: '3em',
      paddingBottom: '3em'
    }

    return (
      <div className='side-detail'>
        <div className='search-results'>
          <LocationSearchResult imgUrl='https://www.silkroadstart.com/wp-content/uploads/2015/05/SRC-Coffee-shop-1.jpg'/>
          <LocationSearchResult imgUrl='http://asiasociety.org/files/queens_library.jpg'/>
          <LocationSearchResult imgUrl='https://media.timeout.com/images/101720961/image.jpg'/>
          <LocationSearchResult imgUrl='https://www.silkroadstart.com/wp-content/uploads/2015/05/SRC-Coffee-shop-1.jpg'/>
        </div>
        <p style={ p }>
          Developed with
          <a href='https://www.youtube.com/watch?v=IhP3J0j9JmY' target='_blank' rel='noopener noreferrer' style={ heartLink }>♥</a>
          by <a href='http://mohammedchisti.com' target='_blank' rel='noopener noreferrer'>Mohammed Chisti</a>
          <br />
          Please support me <a href='https://www.patreon.com' target='_blank' rel='noopener noreferrer'>@Patreon</a>
        </p>
      </div>
    )
  }
}
