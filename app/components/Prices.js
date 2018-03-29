import React from 'react'
import priceData from '../static/data/priceData.json';
import './prices.css';

export class Prices extends React.Component {
//First it maps over the different services values in the object received from priceData
    //it sets the h3 to the key.
    //then it maps over the child objects for each parent as they contain the diffeent prices.
    prices() {
        return(
                Object.keys(priceData).map((key, keyIndex) => (
                    <div key={keyIndex} className='price-service-container'>
                    <h3>{key}</h3>
                        <table>
                            <tr>
                                <th>Yta i Kvm</th>
                                <th>Pris(SEK)</th>
                            </tr>
                                {Object.keys(priceData[key]).map((area, areaIndex) => (
                                    <tr>
                                        <td key={areaIndex}>
                                            {area}
                                        </td>
                                        <td>
                                            {priceData[key][area]}
                                        </td>
                                    </tr>
                                ))}
                        </table>
                    </div>
                ))
        )
    }

    render() {
        return(
            <section className="grid-item-section">
                <h1>Priser</h1>
                {this.prices()}
            </section>
        )
    }
}