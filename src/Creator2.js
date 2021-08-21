import React,{ useState, createContext } from 'react';
import Personal from './creator2-components/personal/personal';
import Education from './creator2-components/education/education';
import Employment from './creator2-components/employment/employment';
import NavBar from './creator2-components/navbar/navbar';
import Skills from './creator2-components/skills/skills';
import axios from 'axios'
import fileDownload from 'js-file-download'

export const InfoContext = createContext()
export const EmploymentContext = createContext()
export const EducationContext = createContext()
export const SkillsContext = createContext()

const Creator = () => {
    const [info, setInfo] = useState({fname : '', lname: '', email : '', phone : ''})
    const [employment, setEmployment] = useState([])
    const [education, setEducation] = useState([])
    const [skills, setSkills] = useState([])

    const onCreate = () => {
        let eduTitle = ""
    
        if(education.length >0) {
          eduTitle = "EDUCATION"
        }

        let newEducation = {
          education : {
            title: eduTitle ,
            array: [...education]
          }
        }
    
        let empTitle = ""
    
        if(employment.length > 0) {
          empTitle = "EMPLOYMENT"
        }

        let newEmployment = {
          employment : {
            title: empTitle,
            array: [...employment]
          }
        }
    
        let skillsTitle = ""
        if(skills.length > 0) {
          skillsTitle = "SKILLS"
        }

        let newSkills = {
          skills : {
            title: skillsTitle,
            skillsArray: skills
          }
        }
    
        axios({
          url : 'https://resume-e.herokuapp.com/create/template1',
          method: 'POST',
          data : {
            info : info,
            education : newEducation.education,
            employment : newEmployment.employment,
            skills : newSkills.skills
          },
          responseType: 'blob'
        }).then(response => {
          fileDownload(response.data, 'resume.pdf')
        })
      }

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
            <button onClick = {onCreate}>
                enter
            </button>
        </div>
    );
}
 
export default Creator;