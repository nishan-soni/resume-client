import './TemplateSelect.css'
import { motion } from 'framer-motion';
import Basic from '../images/basic.png'
import Template1 from '../images/template1.png'
import CloseIcon from '@material-ui/icons/Close';

const TemplateSelect = (props) => {

    const {setSelect, updatePointer} = props

    return (
        <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{duration : 0.3}} className = 'template-container'>
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
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Basic} onClick= {() => {setSelect(false); updatePointer(0)}}/>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Template1} onClick= {() => {setSelect(false); updatePointer(1)}}/>

                </div>
            </div>
        </motion.div>
    )
}

export default TemplateSelect;