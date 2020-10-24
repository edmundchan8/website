import React, { Component } from 'react'
import styled from "styled-components";

class Navigation extends Component {
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
                    <li a href="">About Me</li>
                    <li a href="">Portfolio</li>
                    <li a href="">Resume</li>
                    <li a href="">Contact</li>
                </ul>
            </nav>
            </StyledDiv>
        )
    }
}

export default Navigation