import React from 'react'
import { NavLink } from 'react-router-dom'
import MainMenu from './MainMenu'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='header-container'>
          <div className='header-logo'>
            <img src='./app/static/images/marinas_logo.png' alt='Marinas Städservice' />
          </div>
          <MainMenu
            navList={this.props.links}
          />
        </div>
        <div className='main-banner'>
          <img src='/app/static/images/mainImage.png' />
        </div>
      </div>
    )
  }
}

export default Header
