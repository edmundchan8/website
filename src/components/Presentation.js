import React, { Component } from 'react'
import '../App.css';
import Content from './Content';
import Sidebar from './Sidebar';

export class Presentation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // displayImage: require('../images/healthExplainedScreenShot.jpg'),
            text: 'Content'
        }
        this.OnSetText = this.OnSetText.bind(this)
    }

    OnSetText(newText){
        this.setState({
            text: newText
        })
    }

    render() {
        return (
            <div className="row">
                <div className="columnContent">
                    <Content contentText={this.state.text} />
                </div>
                <div className="columnSidebar">
                    <Sidebar setTextMethod={this.OnSetText}/>
                </div>
            </div>
        )
    }
}

export default Presentation
