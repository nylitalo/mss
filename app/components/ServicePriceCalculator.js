import React from 'react'
import './servicepricecalculator.css'

class ServicePriceCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.setState(
      {
        price: this.areaPrice(event.target.value)
      }
    )
  }


  render() {
    return (
      <div className='spc-container hvr'>
        <p>Beräkna ungefär pris baserat på din yta: {this.props.service}</p>
        <form onSubmit={this.handleSubmit}>
          Yta i kvm:
          <input type='number' name='area' onChange={this.handleChange}/>
          <input type='textbox' name='output' value={this.state.price} />
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
