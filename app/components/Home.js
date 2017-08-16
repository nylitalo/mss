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
          <p>
            My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?
          </p>
          <p>
            Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
          </p>
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
