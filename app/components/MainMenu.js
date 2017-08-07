import React from 'react'
import {NavLink} from 'react-router-dom'
import slug from 'slug'

const links = ['Hem', 'Tjänster', 'Om oss', 'Priser', 'Kontakt']

export const MainMenu = () => (
    <nav className='header-menu'>
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            {links[0]}
          </NavLink>
        </li>
        {links.slice(1).map((link) => (
          <li key={link}>
            <NavLink activeClassName='active' to={'/' + slug(link, {lower: true})}>
              {link}
            </NavLink>
          </li>
          )
        )}
      </ul>
  </nav>
)
