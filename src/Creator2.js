import React,{ useState, createContext } from 'react';
import Personal from './creator2-components/personal/personal';
import Education from './creator2-components/education/education';
import Employment from './creator2-components/employment/employment';
import NavBar from './creator2-components/navbar/navbar';
import Skills from './creator2-components/skills/skills';
import axios from 'axios'
import fileDownload from 'js-file-download'
import Projects from './creator2-components/projects/projects';
import Download from './creator2-components/download/download';
import Load from './creator2-components/load-popup/load';

export const InfoContext = createContext()
export const EmploymentContext = createContext()
export const EducationContext = createContext()
export const SkillsContext = createContext()
export const ProjectsContext = createContext()

const Creator = () => {
    const [info, setInfo] = useState({fname : 'First Name', lname: 'Last Name', email : 'Email', phone : ''})
    const [education, setEducation] = useState([{id : Date.now() + 1, text1 : 'Example Education', text2: 'Location', start : 'Start Date', end : 'End Date'}])
    const [employment, setEmployment] = useState([{id : Date.now() + 2, text1 : 'Example Employment', text2: 'Location', start : 'Start Date', end : 'End Date'}])
    const [skills, setSkills] = useState([])
    const [projects, setProjects] = useState([{id : Date.now() + 2, text1 : 'Example Project', text2: '', start : 'Start Date', end : 'End Date'}])
    const [loading, setLoading] = useState(false)

    const processData = () => {
      let eduTitle = ""
    
        if(education.length >0) {
          eduTitle = "Education"
        }

        let newEducation = {
          education : {
            title: eduTitle ,
            array: [...education]
          }
        }
    
        let empTitle = ""
    
        if(employment.length > 0) {
          empTitle = "Work Experience"
        }

        let newEmployment = {
          employment : {
            title: empTitle,
            array: [...employment]
          }
        }
    
        let skillsTitle = ""
        if(skills.length > 0) {
          skillsTitle = "Skills"
        }

        let newSkills = {
          skills : {
            title: skillsTitle,
            array: skills
          }
        }

        let projTitle = ""
    
        if(projects.length > 0) {
          projTitle = "Projects"
        }

        let newProjects = {
          projects : {
            title: projTitle,
            array: [...projects]
          }
        }

        return [newEducation, newEmployment, newSkills, newProjects]
    }

    const handleView = () => {
      const [newEducation, newEmployment, newSkills, newProjects] = processData()
      axios({
        url : 'https://resume-e.herokuapp.com/create/basic',
        method: 'POST',
        data : {
          info : info,
          education : newEducation.education,
          employment : newEmployment.employment,
          skills : newSkills.skills,
          projects : newProjects.projects
        },
      })
    }

    const handleDownload = () => {
      const [newEducation, newEmployment, newSkills, newProjects] = processData()
      setLoading(true)
      axios({
        url : 'https://resume-e.herokuapp.com/create/basic',
        method: 'POST',
        data : {
          info : info,
          education : newEducation.education,
          employment : newEmployment.employment,
          skills : newSkills.skills,
          projects : newProjects.projects
        },
        responseType: 'blob'
      }).then(response => {
        fileDownload(response.data, 'resume.pdf')
        setLoading(false)
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
            <ProjectsContext.Provider value = {{projects, setProjects}}>
              <Projects/>
            </ProjectsContext.Provider>
            <Download onDownload = {handleDownload}/>
            {loading ? <Load/> : <div/>}
            
        </div>
    );
}
 
export default Creator;