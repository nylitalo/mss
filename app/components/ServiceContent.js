import React from 'react'
import ServicePriceCalculator from './ServicePriceCalculator'
import { ServiceMenu } from './ServiceMenu'
import slug from 'slug'
import './servicecontent.css'
import { Link } from 'react-router-dom'

export const ServiceContent = (props) => {
  return (
    <div className='service-content-container'>
      <div className='service-image'>
        <img src={'../app/static/images/' + props.image} alt={props.title} />
      </div>
      <div className='service-title'>
        {props.title}
      </div>
      {props.spc == true &&
        <div className='service-calculator'>
          <ServicePriceCalculator service={slug(props.title, {lower:true})}/>
        </div>
      }
      <div className='service-info'>
        {props.content}
      </div>
      <div className='booking-button'>
        <button type='button'>
          <Link to='/kontakt'>Boka nu</Link>
        </button>
      </div>
    </div>
  )
}
/*
Rebuild ServiceContent to a class
Slug the title and put in service state.
Pass the state to ServicePriceCalculator and booking button*/
