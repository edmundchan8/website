import React, { Component } from 'react'

class PortfolioUnity3d extends Component {
    render() {
        return (
            <div>
                <a href="https://pokedev8.itch.io/">
                    <img className='defaultSize' src={require('../images/unityScreenShot.jpg')} alt="screenshot of my 2D rhythm Unity3D game" />
                </a>
                <div>
                    <p>Unity3D Projects<br/>C# and Unity3D</p>
                </div>
            </div>
        )
    }
}

export default PortfolioUnity3d