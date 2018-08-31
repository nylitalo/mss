import React from 'react'
import slug from 'slug'
import { connect } from 'react-redux'
import { updateArea } from '../actions/updateAreaAction'
import Map from './Map'
import MailForm from './MailForm'
import './contact.css'

const services = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Storstädning']

@connect((store) => {
  return {
    area: store.area.area,
    service: store.service.service,
  }
})

class Contact extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.dispatch(updateArea(event.target.value))
  }

  render() {
    return (
      <section className="grid-item-section">
        <div className='contact-container'>
          <div className='form-content hvr'>
            <MailForm />
          </div>
          <div className='location-content'>
            <Map initialPosition={{lat: 59.523424, lng: 17.894824}}/>
          </div>
          <div className='contact-info'>
            <h3>Adress</h3>
              <p>Hagvägen 71</p>
              <p>194 40 Upplands Väsby</p>
              <h3>Telefonnummer</h3>
            <p>
              08-12 34 567
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
