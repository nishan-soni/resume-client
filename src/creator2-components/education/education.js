import { motion } from "framer-motion";
import './education.css'
import Accordion from "../accordion/accordion";
import { useContext } from "react";
import { EducationContext } from "../../Creator2";


const Education = () => {
    const {education, setEducation} = useContext(EducationContext)

    const addEduInput = () => {
        const newEducation = [...education]
        const obj = {id : Date.now()}
        newEducation.push(obj)
        console.log(newEducation)
        setEducation(newEducation)
        return obj;
    }

    return (
        <div id = 'education-container'>
            <div id = 'edu-title'>
                Education.
            </div>
            <div style = {{height : 'fit-content', width : 'fit-content', margin : 'auto', marginBottom : '2vh'}}>
                <button className = 'add-edu-btn' onClick = {() => {addEduInput()}}>Add Education</button>
            </div>
            
            {education.map((edu, index) =>{
                return(
                    
                        <Accordion key = {edu.id} label1 = 'University' label2 = 'Degree' array = {education} setArrayState = {setEducation} id ={edu.id}/>
                
                    
                )
            })}
                
        </div>
    );
}
 
export default Education;