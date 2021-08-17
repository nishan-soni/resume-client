import './navbar.css'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const NavBar = () => {
    //{location.pathname === '/save' ? {color : 'white'} : null}
    return (
        <div className = "navbar">
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "personal-title" smooth = {true} duration = {1000}>Personal Info</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "education-container" smooth = {true} duration = {1000}>Education</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "employment-container" smooth = {true} duration = {1000}>Employment</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "/projects" >Projects</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "/skills">Skills</Link></motion.ul>
            <motion.ul whileTap={{ scale: 0.9 }}><Link className = "link" to = "/save" >Save</Link></motion.ul>
        </div>
    );
}
 
export default NavBar;