import './colorbutton.css'
import { motion } from 'framer-motion'

const ColorButton = (props) => {

    const {color, setColor} = props

    return (
        <div>
            <motion.button whileHover = {{scale : 1.1}} whileTap = {{scale : 0.96}} className = 'color-btn' style = {{  backgroundColor : color}}
                onClick = {() => {
                    setColor(color)
                }}
            />  
        </div>
    )
}

export default ColorButton