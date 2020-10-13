import React, { Component } from 'react'

class PortfolioDescription extends Component {
    render() {
        const isMobile = window.innerWidth < 480;
        const alignleft = { textAlign: 'left'}
        const alignCenter = { textAlign: 'center'}
        const alignPosition = isMobile ? alignCenter : alignleft
        const flexContent = {display: 'flex', alignItems: 'center' }
        const unFlexContent = {display: 'block'}
        const flexContainer = isMobile ? unFlexContent : flexContent
        const paddingAll = { padding: '10px'}

        return (
            <div>
                <div style={alignleft} style={paddingAll}>
                    <h2>Portfolio</h2>
                    <p>At college, I have worked in teams to create websites and in my spare time, I have created web applications to help with
                        everyday tasks.  Below are a few of the projects I have created using the programming skills that I have either been 
                        taught or self learnt.</p>
                </div>
            </div>
        )
    }
}

export default PortfolioDescription