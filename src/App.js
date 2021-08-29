import {Route} from 'react-router-dom'
import Home from './Home';
import Creator from './Creator';

const App = () => {
    //{location.pathname === '/' ? null : <NavBar/>}
    return (
        <div>
            <Route exact path = '/' component = {Home}/>
            <div>
                <Route exact path = '/creator' component = {Creator}/>
            </div>
        </div>
    );
}
 
export default App