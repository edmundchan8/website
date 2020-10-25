import React, { Component } from 'react'
import styled from 'styled-components'
import '../App.css'

class Content extends Component {

    render() {
        const StyledDiv = styled.div`
        background-color: grey;
        margin: 5px;
        border: solid red 5px ;
        border-radius: 25px;
      `;
      
        return (
            <StyledDiv className="columnContent">
                {/* accepts the render component method from presentation component to display content here */}
                {this.props.renderComponentMethod}
            </StyledDiv>
        )
    }
}

export default Content