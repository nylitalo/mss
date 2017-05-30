import React from 'react'

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
            <li>HEM</li>
            <li>TJÄNSTER</li>
            <li>OM OSS</li>
            <li>PRISER</li>
            <li>FAQ</li>
            <li>KONTAKTA OSS</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
