import React from 'react'
import {NavLink} from 'react-router-dom'
import slugify from 'slugify'

class Menu extends React.Component {
  menuItems () {
    return this.props.navList.slice(1).map((link) => {
      return (
        <li key={link}>
          <NavLink activeClassName='active' to={'/' + slugify(link)}>
            {link}
          </NavLink>
        </li>
      )
    })
  }

  render () {
    return (
      <div className='header-menu menu-horizontal'>
        <ul>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              {this.props.navList[0]}
            </NavLink>
          </li>
          {this.menuItems()}
        </ul>
      </div>
    )
  }
}

export default Menu
