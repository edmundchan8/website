import React, { Component } from 'react'
import styled from 'styled-components';
// import '../App.css';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             portfolioCoffeeComponent: 'portfolioCoffeeCalculator',
             portfolioOrcaComponent: 'portfolioOrcaStars'
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
            <React.Fragment>
            <StyledDiv className="columnSidebar">
                <div>
                    <h3 onClick ={() => this.changeContent(this.state.portfolioCoffeeComponent)}>Coffee Calculator</h3>
                </div>
                <div>
                    <h3 onClick ={() => this.changeContent(this.state.portfolioOrcaComponent)}>OrcaStars Convservancy</h3>
                </div>
            </StyledDiv>
            </React.Fragment>
        )
    }
}

export default Sidebar