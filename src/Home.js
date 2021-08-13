import "./Home.css"
import {motion} from 'framer-motion'
import {useHistory, Link} from 'react-router-dom'

const Home = () => {
    let history = useHistory()
    return (
        <motion.div
            className = "container"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
         >
            <div className  ="title1">
                Resume
            </div>
            <div className = "title2">
                Creator
            </div>
            <Link to='/creator' className = 'get-started-link'>
                <motion.button
                    className = 'get-started-btn'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    
                >
                    Get Started
                </motion.button>
            </Link>
            
        </motion.div>
        
    );
}
 
export default Home;