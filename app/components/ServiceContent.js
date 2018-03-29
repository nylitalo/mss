import React from 'react'
import ServicePriceCalculator from './ServicePriceCalculator'
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
          <div className='service-image-inner'>
            <img src={'../app/static/images/' + this.props.image} alt={this.props.title} />
          </div>
        </div>
        <div className='service-info'>
          {this.props.content.map((cont, val) => (
            <div key={val}>
              {cont}
            </div>
          ))}
        </div>
          <Link className="booking-button" to='/kontakt'>Boka nu</Link>
      </div>
    )
  }
}

export default ServiceContent
