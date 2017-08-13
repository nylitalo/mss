import React from 'react'
import {ServiceCard} from './ServiceCard'
import './home.css'

export const Home = () => (
  <section>
    <div className='home-container'>
      <div className='home-intro-container hvr'>
        <div className='quote'>
          "Ett rent hem är ren lycka."
        </div>
        <div>
          <p>Vi är ett lite mer personligt, serviceinriktat företag, som förenklar din vardag när tiden inte räcker till.<br />
          Idag är vi 6 anställda som underlättar vardagen för över 100 kontor och hushåll, mestadels i norrort.<br />
          Vårt motto är att hålla en god kundrelation och hög kvalitét på det vi utför.<br />
          Med ett gott samarbete mellan er och mig så kan det inte annat än bli bra.</p>
        </div>
      </div>
      <div className='title'>
        <h1>Våra populära tjänster </h1>
      </div>
      <div className='home-content'>
        <ServiceCard title='Hemstädning'
          thumbnail='./app/static/images/hemstad_card.png'
          text='Spara tid och öka trivseln hemma. Boka hemstädning redan idag!' />
        <ServiceCard title='Flyttstädning'
          thumbnail='./app/static/images/flyttstad_card.png'
          text='Låt oss ta hand om erat gamla hem medans ni njuter av det nya.' />
        <ServiceCard title='Kontorsstädning'
          thumbnail='./app/static/images/kontorstad_card.png'
          text='Vi ordnar kontorsstädning från Stockholm till Uppsala för både små och stora kontor.' />
        <ServiceCard title='Trappstädning'
          thumbnail='./app/static/images/trappstad_card.png'
          text='En ren och fräsch trappuppgång är viktig för hyresgästen. ' />
      </div>
    </div>
  </section>
)
