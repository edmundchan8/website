import React, { Component } from 'react'
import styled from "styled-components";

class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             personalInfoComponent: 'personalInfo',
             portfolioDescComponent: 'portfolioDescription'
        }
        this.changeContent = this.changeContent.bind(this)
    }
    
    changeContent(param){
        this.props.setComponent(param)
    }
    
    render() {
        const StyledDiv = styled.div`
        background-color: grey;
        margin: 5px;
        border: solid red 5px ;
        border-radius: 25px;
      `;
        return (
            <StyledDiv>
            <nav>
                <ul>
                    {/* We use () => because we were getting Maxium update depth exceeded error
                    due to calling setState too many times, meaning code is triggered now when something 
                    happens as opposed to triggered when user loads page.  Each method here passes a
                    param based off of the state */}
                    <li a href="#" onClick={() => this.changeContent(this.state.personalInfoComponent)}>About Me</li>
                    <li a href="#" onClick={() => this.changeContent(this.state.portfolioDescComponent)}>Portfolio</li>
                    <li a href="">Resume</li>
                    <li a href="">Contact</li>
                </ul>
            </nav>
            </StyledDiv>
        )
    }
}

export default Navigation