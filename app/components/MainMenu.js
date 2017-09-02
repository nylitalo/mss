import React from 'react'
import {NavLink} from 'react-router-dom'
import slug from 'slug'
import './mainmenu.css'

const links = ['Hem', 'Tjänster', 'Om oss', 'Priser', 'Kontakt']
const icons = ['home', 'room_service', 'help', 'payment', 'email']

export const MainMenu = () => (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            <div>
              <i className="material-icons md-28">{icons[0]}</i>
              <p>{links[0]}</p>
            </div>
          </NavLink>
        </li>
        {links.slice(1).map((link, icon) => (
          <li key={link}>
            <NavLink activeClassName='active' to={'/' + slug(link, {lower: true})}>
              <div>
                <i className="material-icons md-28">{icons[icon+1]}</i>
                <p>{link}</p>
              </div>
            </NavLink>
          </li>
          )
        )}
      </ul>
  </nav>
)
