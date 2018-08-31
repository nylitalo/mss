import React from 'react'
import ServiceContent from '../ServiceContent'

export const Storstadning = () => {
    return (
        <ServiceContent
            spc={true}
            image='storstadning_banner.png'
            title='Storstädning'
            content={
                <div>
                    Storstäd,
                    Generellt utför vi följande!
                    • vädra små mattor (om möjlighet finns)
                    • dammsugning av golv, mattor och klädda/stoppade möbler
                    • Moppning av golv
                    • torka av dörrar, karmar, lister, fönsterbrädor, fria ytor, ytor ovanpå skåp och garderob
                    • putsa glaspartier i inner- och ytterdörrar samt speglar
                    • torka av skåpsluckor
                    • damma av böcker och prydnadssaker i bokhyllor
                    • damma av tavlor
                    • damma av möbler och lampor
                    Kök:
                    • torkning av köksluckor och köksskåp utvändigt
                    • rengöring av ugn invändigt
                    • rengöring av köksfläkt
                    • rengöring ut- och invändigt av skåp där sopbehållare finns
                    • rengöring av diskänk, spis och kakel
                    Badrum/Toalett/Dusch
                    • rengöring av badkar/dusch och toalett
                    • torkning av badrumsskåp
                    • rengöring av kran och handfat
                    • torkning av väggar
                    Fönsterputs ingår
                </div>
            }
        />
    )
}
