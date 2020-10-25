import React, { Component } from 'react'
import '../App.css';

class PortfolioOrcaStars extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Orcastarts Web Application</h1>
                <a href="https://github.com/Cascadia-Connections/orca-stars">
                    <img className='defaultSize' src={require('../images/orcastars.png')} alt="Cartoon image of an Orca, the Orca Conservancy logo" />

                    </a>
                <div>
                    <p>Orcastars Web application 
                        <br/>ASP.NET Core, C#, HTML, CSS, Javascript</p>
                </div>
            </React.Fragment>
        )
    }
}

export default PortfolioOrcaStars