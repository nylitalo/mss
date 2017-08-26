import React from 'react'
import slug from 'slug'
import { connect } from 'react-redux'
import { updateArea } from '../actions/updateAreaAction'
import './contact.css'

const services = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']

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
      <div>
        <h1>Kontakta oss</h1>
        <form>
          <p>Namn: </p>
          <input type='text' name='name' placeholder='För och efternamn' />
          <p>Mail: </p>
          <input type='mail' name='email' placeholder='ex. john@internet.com' />
          <p>Telefonnummer: </p>
          <input type='number' name='phone' placeholder='ex. +4673123456789' />
          <p>Area: </p>
          <input type='number' id='area' value={this.props.area} onChange={this.handleChange}/>
          <p>Tjänst: </p>
          <select name='service'>
            {services.map((service) => {
              const slugService = slug(service, {lower: true})
              if (service === this.props.service) {
                return <option
                  key={slugService}
                  value={slugService}
                  selected={service} >{service}</option>
              }
              else {
                return <option
                  key={slugService}
                  value={slugService}>{service}</option>
              }
            })}
          </select>
        </form>
      </div>
    )
  }
}

export default Contact
