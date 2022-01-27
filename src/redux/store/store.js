import {createStore} from 'redux'
import rootReducer from '../reducers/rootReducer'

let template = JSON.parse(localStorage.getItem('template'))
if ( template === null) {
    template = {name: 'Professional', color : 'black'}
}

let personal = JSON.parse(localStorage.getItem('personal'))
if (personal === null) {
    personal = {}
}

let education = JSON.parse(localStorage.getItem('education'))
if (education === null) {
    education = []
}

let experience = JSON.parse(localStorage.getItem('experience'))
if (experience === null) {
    experience = []
}

let skills = JSON.parse(localStorage.getItem('skills'))
if (skills === null) {
    skills = []
}

let projects = JSON.parse(localStorage.getItem('projects'))
if (projects === null) {
    projects = []
}



const initalState = {
    personal : personal,
    education : education,
    experience : experience,
    skills : skills,
    projects: projects,
    template: template
}

const store = createStore(rootReducer, initalState /*&& window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/)

store.subscribe(() => {
    const {personal, education, experience, projects, skills, template} = store.getState()
    localStorage.setItem('personal', JSON.stringify(personal))
    localStorage.setItem('education', JSON.stringify(education))
    localStorage.setItem('experience', JSON.stringify(experience))
    localStorage.setItem('projects', JSON.stringify(projects))
    localStorage.setItem('skills', JSON.stringify(skills))
    localStorage.setItem('template', JSON.stringify(template))
})


export default store;