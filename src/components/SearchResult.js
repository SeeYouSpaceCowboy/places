import React, { Component } from 'react'

export default class SearchResult extends Component {
  render() {
    return (
      <div className='search-result'>
        <img src={ this.props.imgUrl } alt='address'/>
        <div className='search-info'>
          <h2>Diner Maria</h2>
          <p>New York, NY 10045</p>
        </div>
      </div>
    )
  }
}
