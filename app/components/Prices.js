import React from 'react'
import priceData from '../static/data/priceData.json';
import './prices.css';

export class Prices extends React.Component {
//First it maps over the different services values in the object received from priceData
    //it sets the h3 to the key.
    //then it maps over the child objects for each parent as they contain the diffeent prices.

    render() {
        return(
            <section className="grid-item-section">
                <h1>Priser</h1>
                <div>
                    <h3>Hemstädning</h3>
                    <h5>Månadspriser efter rutavdrag inkl. moms</h5>
                    <h4>0-80 kvm</h4>
                    <ul className="list-group">
                        <ul className="list-group">
                            <li className="list-group-item">Var fjärde vecka: 600 kr</li>
                            <li className="list-group-item">Varannan vecka: 1000 kr</li>
                            <li className="list-group-item">Varje vecka: 1700 kr</li>
                        </ul>
                        <h4>81-130 kvm</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Var fjärde vecka: 750 kr</li>
                            <li className="list-group-item">Varannan vecka: 1350 kr</li>
                            <li className="list-group-item">Varje vecka: 2500 kr</li>
                        </ul>
                        <h4>131-160 kvm</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Var fjärde vecka: 900 kr</li>
                            <li className="list-group-item">Varannan vecka: 1700 kr</li>
                            <li className="list-group-item">Varje vecka: 2900 kr</li>
                        </ul>
                        <h4>161-210 kvm</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Var fjärde vecka: 1050 kr</li>
                            <li className="list-group-item">Varannan vecka: 1900 kr</li>
                            <li className="list-group-item">Varje vecka: 3400 kr</li>
                        </ul>
                        <h4>211-259 kvm</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Var fjärde vecka: 1200 kr</li>
                            <li className="list-group-item">Varannan vecka: 2150 kr</li>
                            <li className="list-group-item">Varje vecka: 3800 kr</li>
                        </ul>
                        <h4>260 kvm+</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Enligt offert</li>
                        </ul>
                    </ul>
                    <h3>Flyttstädning</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Enligt offert</li>
                    </ul>
                    <h3>Storstädning</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Enligt offert</li>
                    </ul>
                    <h3>Kontorstädning</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Enligt offert</li>
                    </ul>
                    <h3>Fönsterputs</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Enligt offert</li>
                    </ul>
                </div>
            </section>
        )
    }
}