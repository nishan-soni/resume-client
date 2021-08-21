import { motion } from "framer-motion";
import { useContext } from "react";
import { InfoContext } from "../../Creator2";
import './personal.css'

const Personal = () => {
    const {info, setInfo} = useContext(InfoContext)
    return (
        <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
        >
            <div id = "personal-title">
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
            </div> 
        </motion.div>
        
    );
}
 
export default Personal;