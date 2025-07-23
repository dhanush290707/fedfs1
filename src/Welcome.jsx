import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Computer Science and Engineering Department</h1>
                <p>This is the Information Technology section.</p>
                <p>Feel free to explore our courses and resources.</p>
                <Link to='/app'>App</Link> <br />                  /*Use link instead of href it is compatible with git hub.*/
                <Link to='/myapp'>MyApp</Link>
            </div>
        );
    }
}

export default Welcome;
