import { motion } from "framer-motion";
import { useContext } from "react";
import { InfoContext } from "../../Creator2";
import {Link} from 'react-router-dom'
import './personal.css'
import '../arrow.css'

const Personal = () => {
    const {info, setInfo} = useContext(InfoContext)
    return (
        <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
        >
            <div className = "personal-title">
                Personal Info.
            </div>
            <div className = "personal-container">
                <div className = "names">
                    <input
                        type="text" 
                        placeholder = "First Name" 
                        onChange = {(e) => {
                            e.preventDefault()
                            let infoTemp = {...info}
                            infoTemp.fname = e.target.value
                            setInfo(infoTemp)
                        }}
                    />
                    <input 
                        type="text" 
                        placeholder = "Last Name" 
                        onChange = {(e) => {
                            e.preventDefault()
                            let infoTemp = {...info}
                            infoTemp.lname = e.target.value
                            setInfo(infoTemp)
                        }}
                    />
                </div>
                <div className = "contact">
                    <input 
                        type="text" 
                        placeholder = "Phone Number" 
                        onChange = {(e) => {
                            e.preventDefault()
                            let infoTemp = {...info}
                            infoTemp.phone = e.target.value
                            setInfo(infoTemp)
                        }}
                    />
                    <input 
                        type="text" 
                        placeholder = "Email" 
                        onChange = {(e) => {
                            e.preventDefault()
                            let infoTemp = {...info}
                            infoTemp.email = e.target.value
                            setInfo(infoTemp)
                        }}
                    />
                </div>
                <Link to= '/education' className = "to-education">
                    <motion.button 
                        className = "arrow-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                       <i className="arrow down"></i>
                    </motion.button>
                </Link>
            </div> 
        </motion.div>
        
    );
}
 
export default Personal;