import React from 'react';
import './about.css';

class About extends React.Component {
  render () {
    return (
        <section className="grid-item-section">
            <div className="about-grid">
                <div className="profile-picture">
                    <img src="/app/static/images/profile_picture.png" />
                </div>
                <div className="about-us-container">
                    <h3>Om oss</h3>
                    <span>
                        Vi på marinas städservice strävar alltid efter att leverera den högsta kvaliten när det kommer till städning. <br/>
                        Bla bla bla...
                    </span>
                </div>
                <div className="faq-container">
                    <h3>Vi har kollektivavtal.</h3>
                    <h3>Vi är ansvarsförsäkrade i IF.</h3>
                    <h3>Vi har F-Skattesedel.</h3>
                </div>
            </div>
        </section>
    )
  }
}

export default About
