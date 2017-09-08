import React from 'react'
import {NavLink, Link, Route} from 'react-router-dom'
import slug from 'slug'
import {Flyttstadning} from './Services/Flyttstadning'
import {Hemstadning} from './Services/Hemstadning'
import { connect } from 'react-redux'
import './servicemenu.css'

@connect((store) => {
  return {
    service: store.service.service,
    services: store.services.services,
  }
})

class ServiceMenu extends React.Component {
  constructor() {
    super()
  }

  generateLinks(services) {
    let idNum = 0
    return(
      services.map((link, val) => {
        if(idNum == 2) {
          idNum = idNum - 2
        }
        const dropdownMenuId = 'dropdown-menu-accent-' + idNum.toString()
        {idNum++}
        return (
            <li key={val} id={dropdownMenuId}>
              <Link to={'/tjanster/' + slug(link, {lower: true})}>
                {link}
              </Link>
            </li>
        )
      })
    )

  }

  render() {
    return (
      <nav className='service-menu'>
        <label htmlFor='drop' className='toggle'>Tjänster</label>
        <input type='checkbox' id='drop'/>
            <ul className='menu'>
              {this.generateLinks(this.props.services)}
            </ul>
      </nav>
    )
  }
}

export default ServiceMenu


/*
<nav className='service-menu'>
  <div className='selected-service'>
    {this.props.service}
  </div>
  <div className='dropdown-content'>
    {this.props.services.map((link, val) => (
      <div className='service-link' key={val}>
        <NavLink activeClassName='active' to={'/tjanster/' + slug(link, {lower: true})}>
          {link}
        </NavLink>
      </div>
    )
    )}
  </div>
</nav>
*/
