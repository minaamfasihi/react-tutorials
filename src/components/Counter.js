import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment() {
        // this.state.count = this.state.count + 1; // this wont re-render the DOM.
        // this.setState({
        //     count: this.state.count + 1
        // });
        // console.log(this.state.count);
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("Callback value: " + this.state.count);
        // });

        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
    }

    incrementFive() {
        // all of these consecutive calls to setState get regrouped into a single update call to setState and the updated value doesnt carry over. 
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

        // solution: we pass in a function to setState.
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
