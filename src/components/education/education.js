import React, { Component } from 'react';
import EduInput from './eduinput';
import "./education.css"

class Education extends Component {
    state = {  }
    poo = (text) => {
        console.log(text)
    }
    render() {
        return (
            <div>
                <div className = "edu-title">
                Education
                </div>
                <div>
                    <EduInput poo = {this.poo}/>
                </div>
            </div>
            
        );
    }
}
 
export default Education;