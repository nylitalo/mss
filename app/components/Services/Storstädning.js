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
                    <h3>Storstäd</h3>
                    <h3>Generellt utför vi följande!</h3>
                    <ul>
                        <li>vädra små mattor (om möjlighet finns)</li>
                        <li>dammsugning av golv, mattor och klädda/stoppade möbler</li>
                        <li>Moppning av golv</li>
                        <li>torka av dörrar, karmar, lister, fönsterbrädor, fria ytor, ytor ovanpå skåp och garderob</li>
                        <li>putsa glaspartier i inner- och ytterdörrar samt speglar</li>
                        <li>torka av skåpsluckor</li>
                        <li>damma av böcker och prydnadssaker i bokhyllor</li>
                        <li>damma av tavlor</li>
                        <li>damma av möbler och lampor</li>
                    </ul>
                    <h3>Kök</h3>
                    <ul>
                        <li>torkning av köksluckor och köksskåp utvändigt</li>
                        <li>rengöring av ugn invändigt</li>
                        <li>rengöring av köksfläkt</li>
                        <li>rengöring ut- och invändigt av skåp där sopbehållare finns</li>
                        <li>rengöring av diskänk, spis och kakel</li>
                    </ul>
                    <h3>Badrum/Toalett/Dusch</h3>
                    <ul>
                        <li>rengöring av badkar/dusch och toalett</li>
                        <li>torkning av badrumsskåp</li>
                        <li>rengöring av kran och handfat</li>
                        <li>torkning av väggar</li>
                    </ul>
                    <h3>Fönsterputs ingår</h3>
                </div>
            }
        />
    )
}
