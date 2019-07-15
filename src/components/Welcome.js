import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props; // destructuring in class component
        // return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
        return <h1>Hello {name} a.k.a {heroName}</h1>
    }
}

export default Welcome;
