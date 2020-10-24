import React, { Component } from 'react'
import styled from 'styled-components';
// import '../App.css';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sideText: 'Sidebar'
        }
        this.changeHeader = this.changeHeader.bind(this)
    }

    changeHeader(){
        this.props.setTextMethod(this.state.sideText)
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
                <div>
                    <h3>Coffee Calculator</h3>
                    <button onClick ={this.changeHeader}>Click ME</button>
                    {/* <h3 onMouseOver={ () => this.props ("../images/coffeeCalculatorScreenShot.jpg")} >Coffee Calculator</h3> */}
                </div>
            </StyledDiv>
        )
    }
}

export default Sidebar