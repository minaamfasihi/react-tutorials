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

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate');
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
