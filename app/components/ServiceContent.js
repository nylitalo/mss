import React from 'react'
import ServicePriceCalculator from './ServicePriceCalculator'
import { ServiceMenu } from './ServiceMenu'
import slug from 'slug'
import './servicecontent.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateService } from '../actions/updateServiceAction'

@connect((store) => {
  return {
    service: store.service.service,
  }
})

class ServiceContent extends React.Component {
  componentWillMount() {
    this.props.dispatch(updateService(this.props.title))
  }
  render () {
    console.log(this.props);
    return(
      <div className='service-content-container'>
        <div className='service-image'>
          <img src={'../app/static/images/' + this.props.image} alt={this.props.title} />
        </div>
        <div className='service-title'>
          {this.props.title}
        </div>
        {this.props.spc == true &&
          <div className='service-calculator'>
            <ServicePriceCalculator service={slug(this.props.title, {lower:true})}/>
          </div>
        }
        <div className='service-info'>
          {this.props.content}
        </div>
        <div className='booking-button'>
          <button type='button'>
            <Link to='/kontakt'>Boka nu</Link>
          </button>
        </div>
      </div>
    )
  }
}

export default ServiceContent
