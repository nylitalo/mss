import React from 'react'
import {ServiceMenu} from './ServiceMenu'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Flyttstadning} from './Services/Flyttstadning'
import {Hemstadning} from './Services/Hemstadning'
import './services.css'

export const Services = () => (
  <section>
    <div className='service-container'>
      <div className='service-menu-container'>
        <ServiceMenu />
      </div>
      <div className='service-content'>
        <Route path='/tjanster/hemstadning' component={Hemstadning} />
        <Route path='/tjanster/flyttstadning' component={Flyttstadning} />
      </div>
    </div>
  </section>
)
