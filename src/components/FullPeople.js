import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The FullPeople iterates over all of the players and creates
// a link to their profile page.
const FullPeople = () => (
  <div>
    <h1>People</h1>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/People/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullPeople
