import React, { Component } from 'react'
const google = window.google

export default class LocationSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchBox: null
    }

    this.inputChange = this.inputChange.bind(this)
  }

  render() {
    return (
      <div className='search'>
        <input ref="input" style={{ height: '100%', width: '100%' }} placeholder='Search or locate your place'/>
      </div>
    )
  }

  componentDidMount() {
    let input = this.refs.input
    let searchBox = new google.maps.places.SearchBox(input)
    searchBox.addListener('places_changed', this.inputChange)

    this.setState({ searchBox: searchBox })
  }

  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.inputChange);
  }

  inputChange() {
    let searchBoxList = this.state.searchBox.getPlaces()
    this.props.getLocationsList(searchBoxList)
  }
}
