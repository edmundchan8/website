import React, { Component } from 'react'

class PersonalInfo extends Component {
    
    render() {
        const isMobile = window.innerWidth < 480;
        const alignleft = { textAlign: 'left'}
        const alignCenter = { textAlign: 'center'}
        const alignPosition = isMobile ? alignCenter : alignleft
        const flexContent = {display: 'flex', alignItems: 'center' }
        const unFlexContent = {display: 'block'}
        const flexContainer = isMobile ? unFlexContent : flexContent
        const paddingAll = { padding: '10px'}
        
        console.log(isMobile)

        return (
            <React.Fragment>
                <div style={flexContainer}>
                    <div style={alignPosition} style={paddingAll}>
                        <img src={require('../images/profilePic.jpeg')} alt={"me"} />
                    </div>
                    <div style={alignPosition}>
                        <h2>Hi there!</h2>
                        <p>I graduated from Cascadia College with an Associates Degree in Web Application Development.  Proficient in C# and Java as 
                        well as HTML, CSS, Javascript, JQuery and ASP.NET Core. I'm also experienced with designing webpages through
                        Adobe Photoshop, Illustrator and GIMP as well as creating and managing databases with SQL.</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PersonalInfo