import React from 'react'
import {NavLink} from 'react-router-dom'
import slug from 'slug'

const links = ['Hem', 'Tjänster', 'Om oss', 'Priser', 'Kontakt']

export const MainMenu = () => (
    <nav>
      <NavLink exact activeClassName='active' to='/'>
        {links[0]}
      </NavLink>
      {links.slice(1).map((link) => (
        <div key={link}>
          <NavLink activeClassName='active' to={'/' + slug(link, {lower: true})}>
            {link}
          </NavLink>
        </div>
      )
    )}
  </nav>
)
