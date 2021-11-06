import './TemplateSelect.css'
import { motion } from 'framer-motion';
import Basic from '../images/basic.png'
import Template1 from '../images/template1.png'
import CloseIcon from '@material-ui/icons/Close';
import Professional from '../images/professional.png'
import { useRef } from 'react';

const TemplateSelect = (props) => {

    const selectRef = useRef()

    const {setTemplateSelect, updatePointer, setColor} = props

    return (
        <motion.div ref = {selectRef} initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{duration : 0.3}} className = 'template-container'>
            <div style = {{width : '100%', marginBottom : '2vh', paddingTop : '1vh'}}>
                <button className = "close-templates" onClick= {() => {setTemplateSelect(false)}}>
                    <CloseIcon fontSize = 'large'/>
                </button>
            </div>
            <div className = 'template-title'>
                Select a template.
            </div>
            <div className = 'templates'>
                <div style = {{width : 'fit-content', margin :'auto'}}>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Basic} onClick= {() => {setTemplateSelect(false); updatePointer(0); setColor("#e85a4f")}}/>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Template1} onClick= {() => {setTemplateSelect(false); updatePointer(1); setColor("lightgrey")}}/>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Professional} onClick= {() => {setTemplateSelect(false); updatePointer(2); setColor("black")}}/>
                </div>
            </div>
        </motion.div>
    )
}

export default TemplateSelect;