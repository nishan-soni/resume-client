import React,{ useState, createContext, useEffect } from 'react';
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
import Certificates from './creator-components/certificates/certificates';

export const InfoContext = createContext()
export const EmploymentContext = createContext()
export const EducationContext = createContext()
export const SkillsContext = createContext()
export const ProjectsContext = createContext()
export const CertificatesContext = createContext()

// NOTE: When setting the id for compoenents one hase to be date.now other has to be date.now+1 so you may need a new way to set ids just for this part

const Creator = () => {

    const [info, setInfo] = useState({fname : '', lname: '', email : '', phone : ''})
    const [education, setEducation] = useState([])
    const [employment, setEmployment] = useState([])
    const [skills, setSkills] = useState([])
    const [projects, setProjects] = useState([])
    const [certificates, setCertificates] = useState([])
    const [loading, setLoading] = useState(false)
    const [templateSelect, setTemplateSelect] = useState(false)
    const templates = ['basic', 'template1', 'professional']
    const [templatePointer, setTemplatePointer] = useState(0)
    const [color, setColor] = useState("#e85a4f")


    useEffect(() =>{
      let name = "resumeInfo="
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      let resumeInfoString = ""
      let cookieExist = false
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          resumeInfoString = c.substring(name.length, c.length);
          cookieExist = true
        }
      }
      if(cookieExist) {
        const resumeInfo = JSON.parse(resumeInfoString)
        const {info,education,employment,skills,projects,certificates} = resumeInfo
        setInfo(info)
        setEducation(education)
        setEmployment(employment)
        setSkills(skills)
        setProjects(projects)
        setCertificates(certificates)
      }
    }, [])

    useEffect(() => {
      let date = new Date()
      date.setTime(date.getTime() + 5*24*60*60*1000)
      let expires = ";expires=" + date.toUTCString()
      document.cookie = "resumeInfo=" + JSON.stringify({
        info : info,
          education : education,
          employment : employment,
          skills : skills,
          projects : projects,
          certificates: certificates,
      }) + expires
    })


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
          empTitle = "Experience"
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

        let certTitle = ""
    
        if(certificates.length > 0) {
          certTitle = "Certificates"
        }

        let newCertificates = {
          certificates : {
            title: certTitle,
            array: [...certificates]
          }
        }

        return [newEducation, newEmployment, newSkills, newProjects, newCertificates]
    }


    const handleDownload = () => {
      const [newEducation, newEmployment, newSkills, newProjects, newCertificates] = processData()
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
          projects : newProjects.projects,
          certificates: newCertificates.certificates,
          color : color
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
            <CertificatesContext.Provider value = {{certificates, setCertificates}}>
              <Certificates />
            </CertificatesContext.Provider>
            <Download onDownload = {handleDownload} updatePointer = {setTemplatePointer} pointer = {templatePointer} templates = {templates} setTemplateSelect = {setTemplateSelect} setColor = {setColor} color = {color}/>
            {loading ? <Load/> : null}
            {templateSelect ? <TemplateSelect setTemplateSelect = {setTemplateSelect} templates = {templates} updatePointer = {setTemplatePointer} setColor = {setColor}/> : null}
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