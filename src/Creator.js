import React,{ useState, createContext } from 'react';
import Personal from './creator-components/personal/personal';
import Education from './creator-components/education/education';
import Employment from './creator-components/employment/employment';
import NavBar from './creator-components/navbar/navbar';
import Skills from './creator-components/skills/skills';
import axios from 'axios'
import fileDownload from 'js-file-download'
import Projects from './creator-components/projects/projects';
import Download from './creator-components/download/download';
import Load from './creator-components/load-popup/load';
import TemplateSelect from './creator-components/template-select/TemplateSelect';
import './Creator.css'
import RotateDevice from './creator-components/images/rotate-device.png'
import { motion } from 'framer-motion';

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
    const templates = ['basic', 'template1']
    const [templatePointer, setTemplatePointer] = useState(0)
    const [templateSelect, setTemplateSelect] = useState(false)


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


    const handleDownload = () => {
      const [newEducation, newEmployment, newSkills, newProjects] = processData()
      setLoading(true)
      const tempURL = templates[templatePointer].toString()
      axios({
        url : `https://resume-e.herokuapp.com/create/${tempURL}`,
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
            <Download onDownload = {handleDownload} updatePointer = {setTemplatePointer} pointer = {templatePointer} templates = {templates} setSelect = {setTemplateSelect}/>
            {loading ? <Load/> : null}
            {templateSelect ? <TemplateSelect setSelect = {setTemplateSelect} templates = {templates} updatePointer = {setTemplatePointer}/> : null}
            <motion.div className = 'landscape-notification' initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{duration : 0.4}}>
              <div style = {{textAlign : 'center'}}>
                  Please rotate your device for a better experience.
              </div>
              <div style = {{paddingTop : '4vh'}}>
                <img src = {RotateDevice} width = '80vw' alt = ""/>
              </div>
            </motion.div>
        </div>
    );
}
 
export default Creator;