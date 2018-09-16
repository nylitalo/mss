import React from 'react'
import ServiceMenu from './ServiceMenu'
import {Route} from 'react-router-dom'
import {Flyttstadning} from './Services/Flyttstadning'
import {Hemstadning} from './Services/Hemstadning'
import {Storstadning} from './Services/Storstädning'
import './services.css'

export const Services = () => (
  <section className="grid-item-section">
    <div className='service-container'>
      <ServiceMenu />
      <div className='service-content'>
        <Route path='/tjanster/hemstadning' component={Hemstadning} />
        <Route path='/tjanster/storstadning' component={Storstadning} />
        <Route path='/tjanster/flyttstadning' component={Flyttstadning} />
      </div>
    </div>
  </section>
)
