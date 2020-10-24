import React, { Component } from 'react'

class PortfolioCoffeeCalculator extends Component {
    render() {
        return (
            <div>
                <a href="coffeeCalculator/index.html">
                    <img className='defaultSize' src={require('../images/coffee-image.jpg')} alt="screenshot of my coffee calculator app" /></a>
                <div>
                    <p>Coffee Calculator<br/>HTML, CSS and Javascript</p>
                </div>
            </div>
        )
    }
}

export default PortfolioCoffeeCalculator