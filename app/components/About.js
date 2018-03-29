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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id volutpat diam, vitae porttitor ligula. Nunc a ipsum tincidunt dui sollicitudin aliquet non ac arcu. Curabitur a metus sit amet turpis hendrerit consectetur. Phasellus at libero aliquet, varius dui ut, sagittis ex. Ut ornare pretium tortor, vel tempus lectus pulvinar a. Proin aliquam, justo eget consequat finibus, ligula nisl sodales lectus, ut dictum orci metus et nibh. Aliquam finibus risus id ligula tempor feugiat. Nullam tempus nulla purus, ut feugiat mauris sagittis eu. Praesent eleifend velit eget erat laoreet bibendum. Nullam vulputate condimentum elit, nec convallis magna tempus in. Donec vel leo volutpat, bibendum neque eget, ultrices risus. Duis quis luctus odio, ac ornare ipsum. Pellentesque lorem nulla, dictum a leo id, lobortis interdum tortor. Vivamus ultrices aliquet nisi. Proin ac nunc dignissim, dictum purus sit amet, fermentum nibh.
                    </span>
                </div>
                <div className="faq-container">
                    <h3>Frågor & Svar</h3>
                    <ul>
                        <li>Fråga 1</li>
                        <li>Fråga 2</li>
                        <li>Fråga 3</li>
                        <li>Fråga 4</li>
                    </ul>
                </div>
            </div>
        </section>
    )
  }
}

export default About
