import React, { Component } from 'react';
import EduInput from './eduinput';
import "./education.css"
import { Button } from '@material-ui/core';

class Education extends Component {

    

    render() {
        const {handleEduChange, addInput, edu_inputs} = this.props
        return (
            <div>
                <div className = "edu-title" style = {{marginBottom: "2vh"}}>
                    Education
                </div>
                <Button onClick = {addInput} color = "primary" variant = "contained" size = "medium">
                        Add Education
                </Button>
                <div style = {{marginTop : "2vh"}}>
                    {edu_inputs.map(edu_input => {
                        return(
                            <EduInput id = {edu_input.id} onEduChange = {handleEduChange}/>
                        )
                        
                    })}
                </div>
            </div>
            
        );
    }
}
 
export default Education;