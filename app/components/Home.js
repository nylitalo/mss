import React from 'react'
import ServiceCard from './ServiceCard'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className='main-banner'>
          <img src='/app/static/images/mainImage.png' />
        </div>
        <div className='service-cards'>

          <ServiceCard title='Hemstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Spara tid och öka trivseln hemma. Boka hemstädning redan idag!' />
          <ServiceCard title='Flyttstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Låt oss ta hand om erat gamla hem medans ny njuter av det nya.' />
          <ServiceCard title='Kontorsstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Vi ordnar kontorsstädning från Stockholm till Uppsala för både små och stora kontor.' />
          <ServiceCard title='Trappstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='En ren och fräsch trappuppgång är viktig för hyresgästen. ' />
        </div>
      </div>

    )
  }
}

export default Home
