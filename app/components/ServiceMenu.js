import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import slug from 'slug'
import {Flyttstadning} from './Services/Flyttstadning'
import {Hemstadning} from './Services/Hemstadning'
import './servicemenu.css'

const links = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']

export const ServiceMenu = () => (
    <nav className='service-menu'>
      {links.map((link) => (
        <div className='service-link' key={link}>
          <NavLink activeClassName='active' to={'/tjanster/' + slug(link, {lower: true})}>
            {link}
          </NavLink>
        </div>
      )
    )}
  </nav>
)
