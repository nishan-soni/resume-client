import "./Home.css"
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <motion.div
            className = "home-container"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
         >
            <div>
                <div className  ="title1">
                    Resume
                </div>
                <div className = "title2">
                    Creator
                </div>
                <div style = {{width : 'fit-content', margin : 'auto'}}>
                    <Link to='/creator' className = 'get-started-link'>
                        <motion.button
                            className = 'get-started-btn'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
        
    );
}
 
export default Home;