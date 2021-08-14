import './navbar.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "navbar">
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "/personal">Personal Info</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "/education">Education</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "/employment">Employment</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "/skills">Skills</Link></motion.ul>
        </div>
    );
}
 
export default NavBar;