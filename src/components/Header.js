import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header style={{
    background: "lightgrey"}}>
    <h1 style= {{
      margin: 10,
      border: 10}}>A Site With React</h1>
    <nav style= {{
      margin: 10,
      border: 10
    }}>
      <ul style={{
            listStyleType: "none", 
            background: "lightgrey",
            margin: 0,
            padding: 0}}>
        <li style={{display: "block", float: "left"}}><Link to='/'>| Pictures | </Link></li>
        <li style={{display: "block", float: "left"}}><Link to='/people'>| People | </Link></li>
        <li style={{display: "block"}}><Link to='/events'> | Events | </Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
