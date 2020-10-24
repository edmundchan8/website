import React, { Component } from 'react'

class TextModifier extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             t: 'TextModifier'
        }
        this.ChangeText = this.ChangeText.bind(this)
    }
    

    ChangeText() {
        this.props.onSetText(this.state.t)
    }

    render() {
        return (
            <div>
                <button onClick={this.ChangeText}>Click Me</button>
            </div>
        )
    }
}

export default TextModifier