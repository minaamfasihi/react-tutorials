import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = 'Welcome Munnu'
        // } else {
        //     message = 'Welcome Guest'
        // }
        // return(
        //     <div>
        //         {message}
        //     </div>
        // )

        return (
            this.state.isLoggedIn ?
            <div>Welcome Munnu</div> :
            <div>Welcome guest</div>
        )
    }
}

export default UserGreeting;