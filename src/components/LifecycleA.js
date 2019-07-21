import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Minaam'
        }
        console.log('Lifecycle A constructor called')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps called');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount called')
    }

    render() {
        console.log('LifecycleA render called')
        return (
            <div>
                LifecycleA
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
