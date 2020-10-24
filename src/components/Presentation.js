import React, { Component } from 'react'
import '../App.css';
import Content from './Content';
import Sidebar from './Sidebar';

export class Presentation extends Component {
    constructor(props) {
        super(props)
    
        
        this.state = {
            // displayImage: require('../images/healthExplainedScreenShot.jpg'),

            // sets the text for the context
            contentText: 'Content'
        }
        // binding the set text method
        this.OnSetContextText = this.OnSetContextText.bind(this)
    }

    // sets new text to, in our case, context text
    OnSetContextText(newText){
        this.setState({
            contentText: newText
        })
    }

    render() {
        return (
            <div className="row">
                <div className="columnContent">

                    {/* pass the text to content to show the header text */}
                    <Content contentText={this.state.contentText} />
                </div>
                <div className="columnSidebar">
                    
                    {/* we pass the settext method to sidebar, so method called will
                    change content text */}
                    <Sidebar setTextMethod={this.OnSetContextText}/>
                </div>
            </div>
        )
    }
}

export default Presentation
