import React, { Component } from 'react';


export default class Timer extends Component {
    state = {
        date: new Date()
    }

    callMe() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }
    render() {
        return (
            <div>
                <p>It is currently {this.state.date.toLocaleTimeString()}...</p>
                {this.callMe()}

            </div>
        )
    }
}
