import React from 'react'
import { connect } from 'react-redux'
import { updateArea } from '../actions/updateAreaAction'

import './servicepricecalculator.css'

@connect((store) => {
  return {
    area: store.area.area,
  }
})
class ServicePriceCalculator extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    let customerPrice = 0
  }
  areaPrice(area) {
    const basePrice = 100
    let areaPrice = 0
    if (area > 0 && area <= 10) {
      areaPrice = 50
    }
    if (area > 10 && area <= 19) {
      areaPrice = 150
    }
    if (area > 19 && area <= 29) {
      areaPrice = 200
    }
    if (area > 29) {
      areaPrice = 379
    }

    return basePrice + areaPrice
  }

  handleSubmit(event) {
    event.preventDefault()

  }

  handleChange(event) {
    this.props.dispatch(updateArea(event.target.value))
    this.customerPrice = this.areaPrice(event.target.value)
  }


  render() {
    console.log(this.props);
    return (
      <div className='spc-container hvr'>
        <p>Beräkna ungefär pris baserat på din yta:</p>
        <form onSubmit={this.handleSubmit}>
          Yta i kvm:
          <input type='number' name='area' onChange={this.handleChange}/>
          <input type='textbox' value={this.customerPrice} />
        </form>
      </div>
    )
  }
}

/*const ServicePriceCalculator = () => {
  const price = 0;
  return (
    <div className='spc-container hvr'>
      <p>Beräkna ungefär pris baserat på din yta</p>
      <form>
        Yta i kvm:
        <input type='number' name='area' />
        <input type='submit' value='Beräkna'/>
        <input type='textbox' name='output' value={price} />
      </form>
    </div>
  )
}
*/

export default ServicePriceCalculator
