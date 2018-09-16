import React from 'react'
import {NavLink} from 'react-router-dom'
import slug from 'slug'
import './mainmenu.css'
const links = ['Hem', 'Tjänster', 'Om oss', 'Priser', 'Kontakt']
const icons = ['home', 'room_service', 'info', 'payment', 'email']

export const MainMenu = () => (
    <nav className="main-menu-grid-item">
      <ul className="main-menu">
          <li className="main-menu-item menu-text">
              <NavLink exact activeClassName='active' to='/'>
                  {links[0]}
              </NavLink>
          </li>
          <li className="main-menu-item menu-icons">
              <NavLink exact activeClassName='active' to='/'>
                  <i className="material-icons icon-align">{icons[0]}</i>
                  {links[0]}
              </NavLink>
          </li>
        {links.slice(1).map((link, icon) => {
            console.log(icons[icon]);
                return (
                    <span>
                    <li key={link} className="main-menu-item menu-text">
                    <NavLink activeClassName='active' to={'/' + slug(link, {lower: true})}>
                    {link}
                    </NavLink>
                    </li>
                    <li key={link+"_"+icon} className="main-menu-item menu-icons">
                    <NavLink activeClassName='active' to={'/' + slug(link, {lower: true})}>
                    <i className="material-icons icon-align">{icons[icon+1]}</i>
                        {link}
                    </NavLink>
                    </li>
                    </span>
                )
            }
        )}
      </ul>
  </nav>
)
