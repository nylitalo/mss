import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div className='header-container'>
        <div className='header-logo'>
          <img src='./app/static/images/marinas_logo.png' alt='Marinas Städservice' />
        </div>
        <div className='header-menu' id='topnav'>
          <ul>
            <li>
              <NavLink exact activeClassName='active' to="/">
                Hem
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/tjanster">
                Tjänster
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/om-oss">
                Om oss
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/priser">
                Priser
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/kontakt">
                Kontakta oss
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
