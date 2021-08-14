import React,{ useState, useMemo, createContext } from 'react';
import Personal from './creator2-components/personal/personal';
import axios from 'axios'
import fileDownload from 'js-file-download'
import {Route, useLocation} from 'react-router-dom'
import Home from './Home';
import Employment from './creator2-components/employment/employment';
import NavBar from './creator2-components/navbar/navbar';

export const InfoContext = createContext()
export const EmploymentContext = createContext()

const Creator = () => {
    const [info, setInfo] = useState({fname : '', lname: '', email : '', phone : ''})
    const providerInfo = useMemo(()=> ({info,setInfo}), [info,setInfo])
    const [employment, setEmployment] = useState([])
    const location = useLocation();

    return (
        <div>
            <Route exact path = '/' component = {Home}/>
            <div>
              {location.pathname === '/' ? null : <NavBar/>}
              <InfoContext.Provider value = {providerInfo}>
                  <Route exact path = '/personal' component = {Personal}/>
              </InfoContext.Provider>
              <EmploymentContext.Provider value = {{employment, setEmployment}}>
                  <Route exact path = '/employment' component = {Employment}/>
              </EmploymentContext.Provider>
            </div>
            
        </div>
    );
}
 
export default Creator;