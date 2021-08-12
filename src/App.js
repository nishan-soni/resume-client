import React from 'react';
import Creator from './Creator';
import Home from './Home';
import {Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/creator' component = {Creator}/>
        </div>
    );
}
 
export default App;