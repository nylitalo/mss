import React from 'react'
import ServiceCard from './ServiceCard'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div>
          <ServiceCard title='Hemstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Tänk att komma hem till ett nystädat hem varje vecka' />
          <ServiceCard title='Hemstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Tänk att komma hem till ett nystädat hem varje vecka' />
        </div>
      </div>

    )
  }
}

export default Home
