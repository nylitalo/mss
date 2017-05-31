import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      currentPage: 'Hem'
    }
  }

  render () {
    return (
      <div className='header-bar'>
        <div className='header-logo'>
          <img src='./app/static/images/marinas_logo.png' alt='Marinas Städservice' />
        </div>
        <div className='header-menu'>
          <ul>
            <li>
              <NavLink exact activeClassName='active' to="/">
                Hem
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
