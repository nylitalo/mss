import React from 'react'
import ServiceContent from '../ServiceContent'

export const Hemstadning = () => {
    return (
        <ServiceContent
            spc={true}
            image='hemstad_banner.png'
            title='Hemstädning'
            content={<div>
                <h3>Kök</h3>
                <ul>
                    <li>Torkar av</li>
                    <ul>
                        <li>Allt kakel ovanför diskbänken",</li>
                        <li>Alla köksluckor utvändigt</li>
                        <li>Alla vitvaror utvändigt, inklusive: kaffebryggar, brödrostar, vattenkokare</li>
                    </ul>
                    <li>Lampor (som är nåbara)</li>
                    <li>Rengör diskhon och kranar</li>
                    <li>Lägger disken i diskmaskin (vid önskemål)</li>
                    <li>Tömmer soporna och torkar av utrymmet under diskbänken där soporna kastas</li>
                    <li>Dammsuger och våttorkar golvet</li>
                    <li>Dammtorkar/våttorkar</li>
                    <li>Alla öppna ytor, som t.ex bord, bänkar, hyllor, eluttag m.m</li>
                    <li>Dammtorkar golvlister och socklar</li>
                    <li>Torkar dörrar, karmar och fönsterbrädor</li>
                </ul>
                <h3>Vardagsrum</h3>
                <ul>
                    <li>Dammsuger soffor och fåtöljer – både utanpå och under dynor, mattor (även under kanterna) och våttorkar golvet</li>
                    <li>Dammtorkar/våttorkar alla öppna ytor, som t.ex bord, bänkar, bokhyllor, eluttag m.m</li>
                    <li>Dammtorkar golvlister och socklar, tavellister och lampor (som är nåbara)</li>
                    <li>Putsar speglar</li>
                    <li>Torkar dörrar, karmar och fönsterbrädor</li>
                </ul>
                <h3>Sovrum och andra utrymmen</h3>
                <ul>
                    <li>Dammtorkar/våttorkar alla öppna ytor, som t.ex. bord, bänkar, bokhyllor, eluttag m.m</li>
                    <li>Dammsuger mattor (även under kanterna) och våttorkar golvet</li>
                    <li>Dammtorkar golvlister, socklar och lampor (som är nåbara)</li>
                    <li>Putsar speglar</li>
                    <li>Torkar dörrar, karmar och fönsterbrädor</li>
                    <li>Dammsuger soffor och fåtöljerna – både utanpå och under dynor</li>
                </ul>
                <h3>Bad och toalett</h3>
                <ul>
                    <li>Torkar av allt kakel runt toalettstolen, handfatet och duschen/badkaret</li>
                    <li>Rengör toalettstolen, duschkabinen/badkaret (plockas ej isär)</li>
                    <li>Torkar av lampor (som är nåbara)</li>
                    <li>Rengör all armatur som man kommer åt</li>
                    <li>Dammsuger och våttorkar golvet</li>
                    <li>Putsar speglar</li>
                    <li>Dammtorkar/våttorkar badrumsmöbler och vitvaror utvändigt</li>
                    <li>Torkar dörrar, karmar och fönsterbrädor</li>
                </ul>
            </div>}
        />
    )
}
