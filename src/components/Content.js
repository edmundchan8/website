import React, { Component } from 'react'
import styled from 'styled-components'
import '../App.css'

class Content extends Component {
    // SetImgArray = (image) => {
    //     this.setState = ({
    //         displayImage: require({image})
    //     })
    // }

    render() {
        const StyledDiv = styled.div`
        background-color: grey;
        margin: 5px;
        border: solid red 5px ;
        border-radius: 25px;
      `;
      
        return (
            <StyledDiv className="columnContent">
                    <h1>{this.props.contentText}</h1>
                    {/* <img src={this.state.displayImage} className="defaultSize" /> */}
            </StyledDiv>
        )
    }
}

export default Content