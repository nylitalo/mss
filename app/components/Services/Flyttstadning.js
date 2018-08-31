import React from 'react'
import ServiceContent from '../ServiceContent'

export const Flyttstadning = () => {
  return (
    <ServiceContent
      spc={true}
      image='flyttstadning_banner.png'
      title='Flyttstädning'
      content={
          <div>
              <h3>Följande ingår i ett standardavtal:</h3><br/>
              <h3>Kök</h3>
              <ul>
                <li>Fast belysning</li>
                <li>Spisfläkt, ventil (ej inuti)</li>
                <li>Ugn, värmeskåp, plåtarna, galler, spis dras fram (specificera spishäll vid bokning)</li>
                <li>Kyl och frys (frys ska vara avfrostad när städning påbörjas)</li>
                <li>Skåp, lådor och luckor (ska vara tömda när städning påbörjas)</li>
                <li>Arbetsbänkar</li>
              </ul>
              <h3>Badrum</h3>
              <ul>
                <li>Fast belysning</li>
                <li>Badrumsskåp (ska vara tömda när städning påbörjas)</li>
                <li>Bidé</li>
                <li>Avtorkning av rör</li>
                <li>Speglar</li>
                <li>Badkar (front till jacuzzi demonteras och monteras av kunden)</li>
                <li>Toalett</li>
                <li>Tvättställ</li>
                <li>Golvbrunn (ej inuti)</li>
                <li>Avkalkning och rengöring av kakel och klinkers</li>
                <li>Ventil</li>
              </ul>
              <h3>Fönsterputsning</h3>
            <ul>
              <li>4 eller 6 sidor - Fönster ska lätt kunna öppnas för rengöring (insidor, utsidan)</li>
            </ul>
              <h3>Alla rum</h3>
              <ul>
                <li>Fönsterbänkar</li>
                <li>Eluttag, strömbrytare, elskåp</li>
                <li>Väggar och tak dammas</li>
                <li>Fönsterkarmar</li>
                <li>Golv och golvlister</li>
                <li>Garderober (ska vara tömda när städning påbörjas)</li>
                <li>Trösklar</li>
                <li>Element (även bakom)</li>
              </ul>
          </div>
      }
    />
  )
}
