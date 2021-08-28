import './preview.css'
import { useState } from 'react'
import Basic from './images/basic.png'
import Template1 from './images/template1.png'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Preview = (props) => {
    const [images, setImages] = useState([Basic, Template1])
    const {pointer, updatePointer, templates} = props

    const buttonLeft = () => {
        let newPointer = pointer
        newPointer--
        if(newPointer < 0) {
            newPointer = templates.length - 1
        }
        updatePointer(newPointer)
    }

    const buttonRight = () => {
        let newPointer = pointer
        newPointer++
        if(newPointer > templates.length - 1) {
            newPointer = 0
        }
        updatePointer(newPointer)
    }

    return (
        <div>
            <div style = {{width : 'fit-content', height : 'fit-content', margin: 'auto'}}>
                <img src = {images[pointer]} style = {{width : 'auto', height : '45vh', border : 'solid 1.5px #e85a4f'}}/>
            </div>
            <div style = {{width : 'fit-content', height : 'fit-content', margin: 'auto'}}>
                <button style = {{float : 'left', marginRight : '0.5vw', background: 'none', border : 'none'}} onClick = {buttonLeft}>
                    <ArrowLeftIcon fontSize = 'large' style = {{fill : 'red'}}/>
                </button>
                <button style = {{float : 'right', marginLeft : '0.5vw', background: 'none', border : 'none'}} onClick = {buttonRight}>
                    <ArrowRightIcon fontSize = 'large' style = {{fill : 'red'}}/>
                </button>
            </div>
        </div>

        
    )
}

export default Preview;