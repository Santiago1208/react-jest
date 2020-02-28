import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        this.onClick = this.onClick.bind(this)
    }
    
    render() {
        const counter = this.state.counter
        const element = (
            <div>
                <p>{ counter }</p>
                <button onClick={ this.onClick } type="button">Click me!</button>
            </div>
        )
        return element
    }

    onClick() {
        this.setState(previousState => ({
            counter: previousState.counter + 1
        }))
    }
}

export default Counter
