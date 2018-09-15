import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullPeople from './FullPeople'
import Player from './Player'

// The People component matches one of two different routes
// depending on the full pathname
const People = () => (
  <Switch>
    <Route exact path='/People' component={FullPeople}/>
    <Route path='/People/:number' component={Player}/>
  </Switch>
)


export default People
