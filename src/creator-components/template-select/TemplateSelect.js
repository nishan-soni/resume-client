import './TemplateSelect.css'
import { motion } from 'framer-motion';
import Basic from '../images/basic.png'
import Template1 from '../images/template1.png'
import CloseIcon from '@material-ui/icons/Close';
import { useEffect, useRef } from 'react';

const TemplateSelect = (props) => {

    const selectRef = useRef()

    const {setSelect, updatePointer, setColor} = props

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []);
    
      const handleClickOutside = event => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setSelect(false);
        }
      };

    return (
        <motion.div ref = {selectRef} initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{duration : 0.3}} className = 'template-container'>
            <div style = {{width : '100%', marginBottom : '2vh', paddingTop : '1vh'}}>
                <button className = "close-templates" onClick= {() => {setSelect(false)}}>
                    <CloseIcon fontSize = 'large'/>
                </button>
            </div>
            <div className = 'template-title'>
                Select a template.
            </div>
            <div className = 'templates'>
                <div style = {{width : 'fit-content', margin :'auto'}}>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Basic} onClick= {() => {setSelect(false); updatePointer(0); setColor("#e85a4f")}}/>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Template1} onClick= {() => {setSelect(false); updatePointer(1); setColor("lightgrey")}}/>

                </div>
            </div>
        </motion.div>
    )
}

export default TemplateSelect;