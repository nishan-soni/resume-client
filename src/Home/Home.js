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
                    Rezume
                </div>
                <div className = "title2">
                    A free resume creator.
                </div>
                <div style = {{width : 'fit-content', margin : 'auto', position: 'absolute', top: '0', right:'0', marginRight:'1.8em', marginTop:'1.8em'}}>
                    <Link to='/creator' className = 'get-started-link'>
                        <motion.button
                            className = 'get-started-btn'
                            whileTap={{ scale: 0.9 }}
                            
                        >
                            Open Creator
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
        
    );
}
 
export default Home;