import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import MainMap from './containers/MainMap'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ MainMap }/>
    <Route path='/path' component={ MainMap }/>
  </Route>
)

// <Route path='/' component={ App }>
//   <IndexRoute component={ componentName }/>
//   <Route path='/path' component={ componentName }/>
// </Route>

// function requireAuth(nextState, replace) {
//   if (!sessionStorage.jwt) replace({ pathname: '/' })
// }
//
// function redirectToHomeIfLoggedIn() {
//   if(!!sessionStorage.jwt) browserHistory.push('/')
// }
