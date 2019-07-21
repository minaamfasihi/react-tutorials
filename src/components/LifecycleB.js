import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Minaam'
        }
        console.log('Lifecycle B constructor called')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDerivedStateFromProps called');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount called')
    }

    render() {
        console.log('LifecycleB render called')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
