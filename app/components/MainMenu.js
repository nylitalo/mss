import React from 'react'
import {NavLink} from 'react-router-dom'
import slug from 'slug'
import './mainmenu.css'
const links = ['Hem', 'Tjänster', 'Om oss', 'Priser', 'Kontakt']
const icons = ['home', 'room_service', 'info', 'payment', 'email']

export const MainMenu = () => (
    <nav className="main-menu-grid-item">
      <ul className="main-menu">
        <li className="main-menu-item">
          <NavLink exact activeClassName='active' to='/'>
            {links[0]}
          </NavLink>
        </li>
        {links.slice(1).map((link, icon) => (
          <li key={link} className="main-menu-item">
            <NavLink activeClassName='active' to={'/' + slug(link, {lower: true})}>
              {link}
            </NavLink>
          </li>
          )
        )}
      </ul>
  </nav>
)
