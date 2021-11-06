import {Route} from 'react-router-dom'
import Home from './Home/Home';
import Creator from './Creator/Creator';

const App = () => {
    //{location.pathname === '/' ? null : <NavBar/>}
    return (
        <div>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/creator' component = {Creator}/>
        </div>
    );
}
 
export default App