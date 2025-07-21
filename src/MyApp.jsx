import React, { Component } from 'react';
import './MyApp.css';

class MyApp extends Component {
    render() {
        return (
            <div className='MyInfo'>
                <img className='image' src = '/DSC_0189 Potrait.jpg' alt = 'photo' />
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><label>Battula Dhanush Sai Pavan</label></td>
                    </tr>
                    <tr>
                        <td><label>Rollno</label></td>
                        <td><label>2400030301</label></td>
                    </tr>
                    <tr>
                        <td><label>Batch</label></td>
                        <td><label>2024</label></td>
                    </tr>
                    <tr>
                        <td><label>Section</label></td>
                        <td><label>A</label></td>
                    </tr>
                    <tr>
                        <td><label>Department</label></td>
                        <td><label>Computer Science and Engineering</label></td>
                    </tr>
                    <tr>
                        <td><label>Course</label></td>
                        <td><label>Front End Development Frameworks</label></td>
                    </tr>
                </table>
                
            </div>
        );
    }
}

export default MyApp;
