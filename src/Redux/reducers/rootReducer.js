import { combineReducers } from 'redux'
import educationReducer from './educationReducer'
import experienceReducer from './experienceReducer'
import projectReducer from './projectReducer'
import personalReducer from './personalReducer'
import templateReducer from './templateReducer'
import skillReducer from './skillReducer'

const rootReducer = combineReducers({
    education: educationReducer,
    experience: experienceReducer,
    projects: projectReducer,
    personal: personalReducer,
    template: templateReducer,
    skills: skillReducer
})

export default rootReducer
