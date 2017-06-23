import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'

class Header extends React.Component {
  render () {
    return (
      <div className='header-container'>
        <div className='header-logo'>
          <img src='./app/static/images/marinas_logo.png' alt='Marinas Städservice' />
        </div>
        <Menu
          navList={this.props.links}
        />
      </div>
    )
  }
}

export default Header
