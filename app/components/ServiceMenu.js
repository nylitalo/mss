import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import slug from 'slug'
import {Flyttstadning} from './Services/Flyttstadning'
import {Hemstadning} from './Services/Hemstadning'
import './ServiceMenu.css'

const links = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']

export const ServiceMenu = () => (
    <nav>
      {links.map((link) => (
        <div key={link}>
          <NavLink activeClassName='active' to={'/tjanster/' + slug(link, {lower: true})}>
            {link}
          </NavLink>
        </div>
      )
    )}
    <div className='test'>
      <Route path='/tjanster/hemstadning' component={Hemstadning} />
      <Route path='/tjanster/flyttstadning' component={Flyttstadning} />
    </div>
  </nav>
)
