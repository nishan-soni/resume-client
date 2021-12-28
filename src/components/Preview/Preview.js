import './Preview.css'
import Basic from '../Images/basic.png'
import Professional from '../Images/professional.png'
import ColorButton from '../ColorButton/colorbutton'
import { motion } from 'framer-motion'

const Preview = (props) => {
    // Download --> Select Template --> Find the template --> Set the color buttons --> Send a request with the color and template url
    // Select Template --> Open Template Selectoe --> Set the template and a color for it
    const {template, updateTemplate, setTemplateSelect} = props
    
    const templates = {
        Basic : {
            img : Basic,
            colors : ['#e85a4f', '#58A4B0', '#21897E', '#8075FF', '#A9BCD0', '#D8DBE2']
        },
        Professional : {
            img : Professional,
            colors : ['black']
        }
    }
    return (
        <div style = {{marginTop : '1%'}}>
            <motion.div whileHover={{ scale: 1.01 }} whileTap = {{scale : 0.95}} style = {{width : 'fit-content', height : 'fit-content', margin: 'auto', cursor: 'pointer'}} onClick={() => {setTemplateSelect(true)}}>
                <img src = {templates[template.name].img} className='preview-img'  alt = ""/>
            </motion.div>
            <div style = {{display : 'flex', flexDirection : 'row', width : 'fit-content', height : 'fit-content', margin: 'auto'}}>
                    {templates[template.name].colors.map((val, index) => {
                        return (
                            <ColorButton color = {templates[template.name].colors[index]} template = {template} updateTemplate = {updateTemplate}/>
                        )
                    })}            
            </div>
        </div>

        
    )
}

export default Preview;