import './colorbutton.css'
import { motion } from 'framer-motion'

const ColorButton = (props) => {

    const {color, setColor, selectedColor} = props

    return (
        <div>
            <motion.button whileHover = {{scale : 1.1}} whileTap = {{scale : 0.96}} className = 'color-btn' style = { selectedColor === color ? {border : '1px solid black', backgroundColor : color } : {backgroundColor : color}}
                onClick = {() => {
                    setColor(color)
                }}
            />  
        </div>
    )
}

export default ColorButton