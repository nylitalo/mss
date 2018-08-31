import React from 'react'
import ServiceMenu from './ServiceMenu'
import {Route} from 'react-router-dom'
import {Flyttstadning} from './Services/Flyttstadning'
import {Hemstadning} from './Services/Hemstadning'
import {Kontorsstadning} from './Services/Kontorsstadning'
import {Trappstadning} from './Services/Trappstadning'
import {Snoskottning} from './Services/Snoskottning'
import {Storstadning} from './Services/Storstädning'
import './services.css'
import ServiceContent from "./ServiceContent";

export const Services = () => (
  <section className="grid-item-section">
    <div className='service-container'>
      <ServiceMenu />
      <div className='service-content'>
        <Route path='/tjanster/hemstadning' component={Hemstadning} />
        <Route path='/tjanster/storstadning' component={Storstadning} />
        <Route path='/tjanster/flyttstadning' component={Flyttstadning} />
        <Route path='/tjanster/kontorsstadning' component={Kontorsstadning} />
        <Route path='/tjanster/trappstadning' component={Trappstadning} />
        <Route path='/tjanster/snoskottning' component={Snoskottning} />
      </div>
    </div>
  </section>
)
