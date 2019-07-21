import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentOfRegComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Munnu'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Munnu'
            })
        }, 2000);
    }

    render() {
        console.log('*************ParentOfRegComp render*************')
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentOfRegComponent
