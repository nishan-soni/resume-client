import store from '../../../Redux/store/store'
import axios from 'axios'
import fileDownload from 'js-file-download'

export function saveResume(templateName, color) {
    let data = store.getState()
    let {personal, education, experience, projects, skills} = data
    let educationTitle, experienceTitle, projectsTitle, skillsTitle = ""
    if (education.length > 0) {
        educationTitle = "Education"
    }
    if (experience.length > 0) {
        experienceTitle = "Experience"
    }
    if (projects.length > 0) {
        projectsTitle = "Projects"
    }
    if (skills.length > 0) {
        skillsTitle = "Skills"
    }
    const newEducation = {
        title : educationTitle,
        array : education
    }
    const newExperience = {
        title : experienceTitle,
        array : experience
    }
    const newProjects = {
        title : projectsTitle,
        array : projects
    }
    const newSkills = {
        title : skillsTitle,
        array : skills
    }
    axios({
        url : `https://resume-e.herokuapp.com/create/${templateName.toLowerCase()}`,
        method: 'POST',
        data : {
          info : {...personal},
          education : {...newEducation},
          employment : {...newExperience},
          skills : {...newSkills},
          projects : {...newProjects},
          color : color
        },
        responseType: 'blob'
      }).then(response => {
        fileDownload(response.data, 'resume.pdf')
    })
}