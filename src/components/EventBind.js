import React, { Component } from 'react';

export class EventBind extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            message: 'Hello'
        }
    }
    
    clickHandler() {
        this.setState({ // this wont work if we dont bind it, 'this' is null
            message: 'Goodbye!'
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind;