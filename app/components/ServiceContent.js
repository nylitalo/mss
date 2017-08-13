import React from 'react'
import {ServicePriceCalculator} from './ServicePriceCalculator'
import { ServiceMenu } from './ServiceMenu'
import './servicecontent.css'

export const ServiceContent = (props) => {
  return (
    <div className='service-content-container'>
      <div className='service-image'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='service-title'>
        {props.title}
      </div>
      <div className='service-calculator'>
        <ServicePriceCalculator />
      </div>
      <div className='service-info'>
        {props.content}
      </div>
    </div>
  )
}
