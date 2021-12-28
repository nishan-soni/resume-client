import '../../helpers/section.css'
import InfoBlock from '../InfoBlock/InfoBlock'
import Editor from '../Editor/Editor'
import { useState } from 'react'
import React from 'react'
import { useSelector} from 'react-redux'
import {addItem, removeItem, editItem} from './functions'
import '../../helpers/buttons.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Experience = (props) => {
    const {setCanvasComponent} = props
    const [showEditor, setShowEditor] = useState(false)
    const [editorID, setEditorID] = useState("")
    const experience = useSelector(state => state.experience)
    return (
        <div className="Section_div">
            {!showEditor === true ?
            <React.Fragment>
                <div className="Section_title">
                    Experience
                </div>
                <div className="Section_subtitle">
                    <h3>Include recent employment and experience.</h3>
                </div>
                <div className='Info_div'>
                    {experience.map(element => {
                        return (
                            <InfoBlock onClick = {() => {setShowEditor(true); setEditorID(element.id);}} title = {element.subtitle + " | " + element.title } date = {element} key = {element.id}/>
                        )
                    })}
                </div>
                <div style = {{width: 'fit-content', margin: 'auto', marginTop : '1%'}}>
                    <button className='add_button' onClick={addItem}>
                        Add Experience
                    </button>
                </div>
                <div className='next_button_div'>
                    <button className='back_button' onClick={() => {setCanvasComponent("Skills")}}>
                        <ArrowForwardIcon style = {{fill : 'lightgrey'}} fontSize = 'large'/>
                    </button>
                </div>
            </React.Fragment> 
            : <Editor dateOption = {true} setShowEditor = {setShowEditor} removeFunction = {removeItem} editFunction = {editItem} editedItem = {experience.find(element => element.id === editorID)}/>}
        </div>
    )
}

export default Experience