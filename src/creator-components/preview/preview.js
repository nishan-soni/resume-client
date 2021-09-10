import './preview.css'
import Basic from '../images/basic.png'
import Template1 from '../images/template1.png'
import { motion } from 'framer-motion';
import ColorButton from '../color-button/colorbutton';

/*
<button id = "left-btn" style = {{float : 'left', marginRight : '0.5vw', background: 'none', border : 'none'}} onClick = {buttonLeft}>
                    <ArrowLeftIcon fontSize = 'large' style = {{fill : 'red'}}/>
                </button>
                <button id = "right-btn" style = {{float : 'right', marginLeft : '0.5vw', background: 'none', border : 'none'}} onClick = {buttonRight}>
                    <ArrowRightIcon fontSize = 'large' style = {{fill : 'red'}}/>
                </button>
*/

const Preview = (props) => {

    const images = [
        {
            img : Basic,
            colors : ['#e85a4f', '#58A4B0', '#21897E', '#8075FF', '#A9BCD0', '#D8DBE2']
        },
        {
            img : Template1,
            colors : ['lightgrey']
        }
    ]
    const {pointer, setSelect, setColor, selectedColor} = props

    return (
        <div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap = {{scale : 0.95}} style = {{width : 'fit-content', height : 'fit-content', margin: 'auto'}}>
                <img src = {images[pointer].img} style = {{width : 'auto', height : '50vh', border : 'solid 1.5px #e85a4f'}} onClick = {()=> {setSelect(true)}} alt = ""/>
            </motion.div>
            <div style = {{display : 'flex', flexDirection : 'row', width : 'fit-content', height : 'fit-content', margin: 'auto'}}>
                    {images[pointer].colors.map((val, index) => {
                        return (
                            //<input name = 'templateColor' type = 'radio' style = {{ fill :'red', height : '5vh', width : '5vh', margin : '0', marginLeft : '0.4vw', marginRight : '0.4vw', marginTop : '1vh', marginBottom : '1vh', backgroundColor : 'crimson'}}/>
                            <ColorButton color = {images[pointer].colors[index]} setColor = {setColor} selectedColor = {selectedColor}/>
                        )
                    })}            
            </div>
        </div>

        
    )
}

export default Preview;