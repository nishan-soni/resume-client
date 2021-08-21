import './skills.css'
import Tag from '../tag/tag';
import { useContext, useState } from 'react';
import { SkillsContext } from '../../Creator2';
const Skills = () => {

    const {skills, setSkills} = useContext(SkillsContext)
    const [tempSkill, setTempSkill] = useState('')

    const addSkill = (name) => {
        let contains = false
        skills.forEach(tag => {
            if(tag === name) {
                contains = true
            }
        });
        if(contains === false) {
            let newSkills = [...skills]
            newSkills.push(name)
            setSkills(newSkills)
        }
    }

    const removeSkill = (name) => {
        const newArray = skills.filter(c => c !== name)
        setSkills(newArray)
    }

    return (
        <div id = 'skills-container'>
            <div className = 'skills-title'>
                Skills.
            </div>
            <div className = 'skill-tags'>
                {skills.map((item, index) => {
                    return(
                        <div style = {{paddingLeft : '0.3vw', paddingRight : '0.3vw'}}>
                            <Tag title = {skills[index]} key ={skills[index]} deleteSkill = {removeSkill} />
                        </div>
                    )
                })}
            </div>
            <div style = {{height : 'fit-content', width : 'fit-content', margin : 'auto', marginBottom : '2vh'}}>
                <input
                    type="text" 
                    placeholder = "Skill"
                    className = 'skill-input'
                    value = {tempSkill} 
                    onChange = {(e) => {
                        e.preventDefault()
                        let skill = e.target.value
                        setTempSkill(skill) 
                    }}
                    />
                <button className = 'add-skill-btn' onClick = {() => {addSkill(tempSkill); setTempSkill('')}}>Add Skill</button>
            </div>
        </div>
    );
}
 
export default Skills;