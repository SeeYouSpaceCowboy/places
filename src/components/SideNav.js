import React from 'react'
import '../stylesheets/components/SideNav.css'
import Home from '../stylesheets/home.png'
import Heart from '../stylesheets/heart.png'
import Pin from '../stylesheets/pin.png'
import Marker from '../stylesheets/location.png'

const SideNav = () => {
  return (
    <div className='side-nav'>
      <ul>
        <li><img className='icon' src={ Home } alt='Home' /></li>
        <li><img className='icon' src={ Heart } alt='Love' /></li>
        <li><img className='icon' src={ Pin } alt='Want' /></li>
        <li><img className='icon' src={ Marker } alt='Location' /></li>
      </ul>
    </div>
  )
}

export default SideNav
