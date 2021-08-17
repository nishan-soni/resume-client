import React,{ useState, useMemo, createContext } from 'react';
import Personal from './creator2-components/personal/personal';
import axios from 'axios'
import fileDownload from 'js-file-download'
import {Route, useLocation} from 'react-router-dom'
import Home from './Home';
import Education from './creator2-components/education/education';
import Employment from './creator2-components/employment/employment';
import NavBar from './creator2-components/navbar/navbar';

export const InfoContext = createContext()
export const EmploymentContext = createContext()
export const EducationContext = createContext()

const Creator = () => {
    const [info, setInfo] = useState({fname : '', lname: '', email : '', phone : ''})
    const [employment, setEmployment] = useState([])
    const [education, setEducation] = useState([])

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
        </div>
    );
}
 
export default Creator;