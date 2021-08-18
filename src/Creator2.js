import React,{ useState, createContext } from 'react';
import Personal from './creator2-components/personal/personal';
import Education from './creator2-components/education/education';
import Employment from './creator2-components/employment/employment';
import NavBar from './creator2-components/navbar/navbar';
import Skills from './creator2-components/skills/skills';

export const InfoContext = createContext()
export const EmploymentContext = createContext()
export const EducationContext = createContext()
export const SkillsContext = createContext()

const Creator = () => {
    const [info, setInfo] = useState({fname : '', lname: '', email : '', phone : ''})
    const [employment, setEmployment] = useState([])
    const [education, setEducation] = useState([])
    const [skills, setSkills] = useState([])

    return (
        <div>  
            <NavBar/>
            <InfoContext.Provider value = {{info,setInfo}}>
                <Personal/>
            </InfoContext.Provider>
            <EducationContext.Provider value = {{education, setEducation}}>
                <Education/>
            </EducationContext.Provider>
            <EmploymentContext.Provider value = {{employment, setEmployment}}>
                <Employment/>
            </EmploymentContext.Provider>
            <SkillsContext.Provider  value = {{skills, setSkills}}>
                <Skills/>
            </SkillsContext.Provider>
        </div>
    );
}
 
export default Creator;