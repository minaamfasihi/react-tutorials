import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClicksCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>                
            </div>
        )
    }
}

export default UpdatedComponent(ClicksCounter)
