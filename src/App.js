import {Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Creator from './pages/Creator/Creator';
import Signup from './pages/Signup/Signup';

const App = () => {
    return (
        <div>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/creator' component = {Creator}/>
            <Route exact path = '/signup' component = {Signup}/>
        </div>
    );
}
 
export default App