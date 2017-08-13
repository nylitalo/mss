import React from 'react'
import {ServiceContent} from '../ServiceContent'

export const Hemstadning = () => {
  return (
    <ServiceContent
      image='../app/static/images/hemstad_banner.png'
      title='Hemstädning'
      content={["Tänk att komma till ett nystädat hem, varje vecka. Snart märker du hur mycket tid du sparar och trivseln hemma ökar.",<br />,
      "Har man väl provat vill man inte vara utan det. Städningen görs givetvis efter dina önskemål.",<br />,
      "Vi kan även hjälpa till med fönsterputs, tvättning och strykning. Hemstädning kan göras en gång i veckan, varannan vecka, eller en gång i månaden, och givetvis engångsstädning om så önskas.",<br />,
      "Tveka inte att ta kontakt, 070-998 04 49 så kommer vi och presenterar oss och går igenom pris och vad som skall göras."]} />
)
}
