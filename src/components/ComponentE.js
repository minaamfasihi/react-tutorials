import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
    static contextType = UserContext // this line and the line at the bottom: ComponentE.contextType = UserContext are equivalent

    render() {
        return (
            <div>
                ComponentE context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext

export default ComponentE
