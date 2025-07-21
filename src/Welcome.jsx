import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Computer Science and Engineering Department</h1>
                <p>This is the Information Technology section.</p>
                <p>Feel free to explore our courses and resources.</p>
                <a href='/app'>App</a><br />
                <a href='/myapp'>MyApp</a>
            </div>
        );
    }
}

export default Welcome;
