import React from 'react'
import {NavLink, Link, Route} from 'react-router-dom'
import slug from 'slug'
import {Flyttstadning} from './Services/Flyttstadning'
import {Hemstadning} from './Services/Hemstadning'
import { connect } from 'react-redux'

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
            <li key={val} id={dropdownMenuId} className="main-menu-item">
              <NavLink activeClassName='active' to={'/tjanster/' + slug(link, {lower: true})}>
                {link}
              </NavLink>
            </li>
        )
      })
    )

  }

  render() {
    return (
      <nav className='service-menu-grid-item'>
          <ul className="main-menu">
              {this.generateLinks(this.props.services)}
          </ul>
      </nav>
    )
  }
}

export default ServiceMenu