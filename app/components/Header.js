import React from 'react'
import {MainMenu} from './MainMenu'
import './header.css'

export const Header = () => (
  <header>
    <div className='header-container'>
      <div className='header-logo'>
        <img src='./app/static/images/marinas_logo.png' alt='Marinas Städservice' />
      </div>
      <MainMenu />
    </div>
    <div className='main-banner'>
      <img src='/app/static/images/mainImage.png' />
    </div>
  </header>
)
