import React, { Component } from 'react'
import '../App.css';
import Navigation from './Navigation';
import Content from './Content';
import Sidebar from './Sidebar';
import PersonalInfo from './PersonalInfo';
import PortfolioDescription from './PortfolioDescription';
import PortfolioCoffeeCalculator from './PortfolioCoffeeCalculator';
import PortfolioOrcaStars from './PortfolioOrcaStars';

export class Presentation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // displayImage: require('../images/healthExplainedScreenShot.jpg'),

            // sets the text for the context
            componentOption: 'default'
        }
        // binding the set text method
        this.OnSetComponent = this.OnSetComponent.bind(this)

        // binds the renderSwitch, switch statement that helps us choose components in the
        // content section (the content component) based on what has been clicked on 
        // the website
        this.renderSwitch = this.renderSwitch.bind(this)
    }

    // sets new text to, in our case, context text
    OnSetComponent(newText){
        this.setState({
            // state to hold the component 
            componentOption: newText
        })
    }

    renderSwitch (param) {
        switch (param) {
            case 'portfolioDescription':
                return <PortfolioDescription />
            case 'portfolioCoffeeCalculator':
                return <PortfolioCoffeeCalculator />
            case 'portfolioOrcaStars':
                return <PortfolioOrcaStars />
                default:
                return <PersonalInfo />
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* pass the set component method to nav, nav component will call our set component
                method switch, along with added param to display chosen component in the content component 
                section */}
                <Navigation setComponent={this.OnSetComponent}/>
                <div className="row">                
                    {/* pass the rendercomponent method to content, the content component will handle
                    what is displayed in the content section, and received the state.componentOption
                    when this is changed, to render what appears in the content section as and when */}
                    <Content renderComponentMethod={this.renderSwitch(this.state.componentOption)}/>

                    {/* similar to our nav component above, side bar has text links that will call our
                    set component method switch here to let content component know which component
                    to display */}
                    <Sidebar setComponent={this.OnSetComponent}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Presentation
