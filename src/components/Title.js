import React, { Component } from 'react'
import styled from "styled-components";

class Title extends Component {
    render() {
        const StyledDiv = styled.div`
        border: solid blue 5px ;
      `;
        return (
            <StyledDiv>
                <h1>Chi Hong Edmund Chan</h1>
                <h2>Web Application Developer</h2>
            </StyledDiv>
        )
    }
}

export default Title