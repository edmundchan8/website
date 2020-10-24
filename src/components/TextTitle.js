import React, { Component } from 'react'
import '../App.css'
import TextModifier from './TextModifier'

class TextTitle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text: 'Hi'
        }
        this.OnSetText = this.OnSetText.bind(this)
    }

    OnSetText(newText){
        console.log(newText)
        this.setState({
            text: newText
        })
        console.log(this.state.text)
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <TextModifier onSetText={this.OnSetText} />
            </div>
        )
    }
}

export default TextTitle
