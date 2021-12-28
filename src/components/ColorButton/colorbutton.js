import './colorbutton.css'
import { motion } from 'framer-motion'

const ColorButton = (props) => {

    const {color, template, updateTemplate} = props

    return (
        <div>
            <motion.button whileHover = {{scale : 1.1}} whileTap = {{scale : 0.96}} className = 'color-btn' style = { template.color === color ? {border : '1.5px solid black', backgroundColor : color } : {backgroundColor : color}}
                onClick = {() => {
                    updateTemplate(template.name, color)
                }}
            />  
        </div>
    )
}

export default ColorButton