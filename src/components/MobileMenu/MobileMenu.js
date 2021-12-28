import './MobileMenu.css'
import { motion } from 'framer-motion'
import '../SideBar/SideBar.css'
const MobileMenu = (props) => {
    const {setOpenMenu, setCanvasComponent} = props
    return (
        <motion.div 
            className="menu-div"
            initial={{ width: 0 }}
            animate={{ width: "calc(100vw)" }}
            transition={{ type: "linear", stiffness: 50 }}
        >
            <button className="title_link" onClick={()=>{setCanvasComponent("Personal Details"); setOpenMenu(false)}}>Personal Details</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Education"); setOpenMenu(false)}}>Education</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Experience"); setOpenMenu(false)}}>Experience</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Skills"); setOpenMenu(false)}}>Skills</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Projects"); setOpenMenu(false)}}>Projects</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Save"); setOpenMenu(false)}}>Save</button>
        </motion.div>
    )
}

export default MobileMenu