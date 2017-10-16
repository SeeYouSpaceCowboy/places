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
        <div className='search-results'>{ this.renderLocationsList() }</div>
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

  renderLocationsList = () => {
    let locationsList = this.props.locationsList
    if(locationsList.length === 0) return null

    return locationsList.map((location) => {
      return <LocationSearchResult
                imgUrl={ this.getPhoto(location) }
                name={ location.name }
                address={ location.formatted_address } />
    })
  }

  getPhoto(location) {
      if(location.photos) return location.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 })

      return "http://www.vandemazoraxhoeve.com/wp-content/plugins/breedr/assets/no-image-available.png"
  }
}
