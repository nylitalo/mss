import React from 'react'
import {NavLink} from 'react-router-dom'
import slugify from 'slugify'

class Menu extends React.Component {
  menuItems () {
    return this.props.navList.map((link) => {
      return (
        <li key={link}>
          <NavLink activeClassName='active' to={'/Tjanster/' + slugify(link)}>
            {link}
          </NavLink>
        </li>
      )
    })
  }

  render () {
    return (
      <div className={this.props.cssClass}>
        <ul>
          {this.menuItems()}
        </ul>
      </div>
    )
  }
}

export default Menu
