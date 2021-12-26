import './TemplateSelect.css'
import { motion } from 'framer-motion';
import Basic from '../Images/basic.png'
import CloseIcon from '@material-ui/icons/Close';
import Professional from '../Images/professional.png'

const TemplateSelect = (props) => {

    const {setTemplateSelect, updateTemplate} = props

    return (
        <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{duration : 0.3}} className = 'template-container'>
            <div style = {{width : '100%', marginBottom : '2vh', paddingTop : '1vh'}}>
                <button className = "close-templates" onClick= {() => {setTemplateSelect(false)}}>
                    <CloseIcon fontSize = 'large' style = {{fill : 'grey'}}/>
                </button>
            </div>
            <div className = 'template-title'>
                Select a template.
            </div>
            <div className = 'templates'>
                <div className='images_div'>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Basic} onClick= {() => {setTemplateSelect(false); updateTemplate("Basic", "#e85a4f")}}/>
                    <motion.img whileTap = {{scale : 0.95}} className = 'template-img' src = {Professional} onClick= {() => {setTemplateSelect(false); updateTemplate("Professional", "black")}}/>
                </div>
            </div>
        </motion.div>
    )
}

export default TemplateSelect;