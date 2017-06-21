import React from 'react'
import {NavLink} from 'react-router-dom'
import slugify from 'slugify'

class Menu extends React.Component {
  render () {
    const menuItems = this.props.navList.slice(1).map((link) => {
      return (
        <li key={link}>
          <NavLink activeClassName='active' to={slugify(link)}>
            {link}
          </NavLink>
        </li>
      )
    })
    return (
      <div className='header-menu'>
        <ul>
          <li>
          <NavLink  exact activeClassName='active' to='/'>
            {this.props.navList[0]}
          </NavLink>
        </li>
          {menuItems}
        </ul>
      </div>
    )
  }
}

export default Menu
