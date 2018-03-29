import React from 'react'
import {ServiceCard} from './ServiceCard'
import './home.css'

export const Home = () => (
  <section className="grid-item-section">
    <div className='home-container'>
      <div className='home-intro-container'>
        <div className='quote'>
          "Ett rent hem, är ren lycka."
        </div>
      </div>
      <div className='sc-title'>
        <h1>Våra populära tjänster </h1>
      </div>
        <div className='home-content'>
          <ServiceCard title='Hemstädning'
            thumbnail='./app/static/images/sc_hemstad_256.png'
            text='Spara tid och öka trivseln hemma. Boka hemstädning redan idag!' />
          <ServiceCard title='Flyttstädning'
            thumbnail='./app/static/images/sc_flyttstad_256.png'
            text='Låt oss ta hand om erat gamla hem medans ni njuter av det nya.' />
          <ServiceCard title='Kontorsstädning'
            thumbnail='./app/static/images/sc_kontorstad_256.png'
            text='Vi ordnar kontorsstädning från Stockholm till Uppsala för både små och stora kontor.' />
          <ServiceCard title='Trappstädning'
            thumbnail='./app/static/images/sc_trappstad_256.png'
            text='En ren och fräsch trappuppgång är viktig för hyresgästen. ' />
        </div>
    </div>
  </section>
)
