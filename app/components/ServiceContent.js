import React from 'react'
import {ServicePriceCalculator} from './ServicePriceCalculator'
import { ServiceMenu } from './ServiceMenu'

export const ServiceContent = (props) => {
  return (
    <div>
      <div>
        <div className='title'>{props.title}</div>
        <ServicePriceCalculator />
        <div>{props.content}</div>
      </div>
    </div>
  )
}
