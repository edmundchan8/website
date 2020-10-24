import React, { Component } from 'react'

class PortfolioTravelStars extends Component {
    render() {
        return (
            <div>
                <a href="travelWebsite/index.html">
                    <img className='defaultSize' src={require('../images/couplevacation.jpg')} alt="screenshot of my BIT113 website project for a travel blog" />
                </a>
                <div class="overlay">
                    <p class="sub-heading-font">Lisas Travel Blog<br/>HTML and CSS</p>
                </div>
            </div>
        )
    }
}

export default PortfolioTravelStars