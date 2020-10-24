import React, { Component } from 'react'
import styled from "styled-components";

class PersonalInfo extends Component {
    
    render() {
        const StyledDiv = styled.div`
        border: solid red 5px ;
      `;
        return (
            <StyledDiv>
                <img src={require('../images/profilePic.jpeg')} alt={"me"} />
                <div>
                    <h2>Hi there!</h2>
                    <p>I graduated from Cascadia College with an Associates Degree in Web Application Development.  Proficient in C# and Java as 
                    well as HTML, CSS, Javascript, JQuery and ASP.NET Core. I'm also experienced with designing webpages through
                    Adobe Photoshop, Illustrator and GIMP as well as creating and managing databases with SQL.</p>
                </div>
            </StyledDiv>
        )
    }
}

export default PersonalInfo