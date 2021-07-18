import React, { Component } from 'react';
import EduInput from './eduinput';
import "./education.css"

class Education extends Component {
    render() {
        const {handleEduChange} = this.props
        return (
            <div>
                <div className = "edu-title">
                Education
                </div>
                <div>
                    <EduInput id = "0" onEduChange = {handleEduChange}/>
                </div>
            </div>
            
        );
    }
}
 
export default Education;