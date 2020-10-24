import React, { Component } from 'react'

class PortfolioHealthExplained extends Component {
    render() {
        return (
            <div>
                <a href="healthExplained/index.html">
                <img className='defaultSize' src={require('../images/doctorPointingNotes.jpg')} alt="screenshot of my BIT112 website project regarding USA healthcare" /></a>
                <div>
                    <p>Health Explained<br/>HTML and CSS</p>
                </div>
            </div>
        )
    }
}

export default PortfolioHealthExplained