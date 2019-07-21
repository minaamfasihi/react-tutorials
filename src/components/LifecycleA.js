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

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount called')
    }

    changeState = () => {
        this.setState({
            name: 'Changed'
        })
    }
    
    render() {
        console.log('LifecycleA render called')
        return (
            <div>
                LifecycleA
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
