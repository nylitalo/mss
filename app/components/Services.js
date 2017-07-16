import React from 'react'
import Menu from './Menu'
import slugify from 'slugify'
import {Service} from './Service'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Services extends React.Component {
  constructor () {
    super()
    this.serviceList = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']
    this.state = {
      activeServicePage: slugify(this.serviceList[0])
    }
  }
  render () {
    return (
      <div>
        <div>
          <Menu navList={this.serviceList} cssClass='service-menu' />
        </div>
        <div>
          <Router>
            <div>
              <Route to='/Tjanster/Hemstadning' component={() => (<Service title='Hemstadning' content='Denna sida handlar om hemstädning!' />)} />
              <Route to='/Tjanster/Flyttstadning' component={() => (<Service title='Flyttstädning' content='Denna sida handlar om Flyttstädning!' />)} />
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export default Services
