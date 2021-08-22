import './navbar.css'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const NavBar = () => {
    //{location.pathname === '/save' ? {color : 'white'} : null}
    return (
        <div className = "navbar">
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "personal-title" smooth = {true} duration = {1000}>Contact Info</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "education-container" smooth = {true} duration = {1000}>Education</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "employment-container" smooth = {true} duration = {1000}>Employment</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "skills-container" smooth = {true} duration = {1000}>Skills</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "projects-container" smooth = {true} duration = {1000}>Projects</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "download-container" smooth = {true} duration = {1000}>Save</Link></motion.ul>
        </div>
    );
}
 
export default NavBar;