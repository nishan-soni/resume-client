import React from 'react';
import EduInput from './eduinput';
import "./education.css"
import { Button } from '@material-ui/core';


const Education = (props) => {
    const {handleEduChange, addInput,removeInput, education} = props

    //for tommrow: shift the education stuff when items are shifted
    return (
        <div>
            <div className = "edu-title" style = {{marginBottom: "2vh"}}>
                Education
            </div>
            <Button 
                onClick = {() => {
                    addInput()
                }} 
                color = "primary" variant = "contained" size = "medium"
            >
                    Add Education
            </Button>
            {edu_inputs.map(edu_input => (
                <div  style = {{width : "fit-content", height : "fit-content", marginTop : "1vh"}}>
                    <EduInput key = {edu_input.id} onEduChange = {handleEduChange} removeInput  = {removeInput} eduInput = {edu_input}/>
                </div>
            ))}
        </div>
    );
}
 
export default Education;