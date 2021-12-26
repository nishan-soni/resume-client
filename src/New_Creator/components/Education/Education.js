import '../../section.css'
import InfoBlock from '../InfoBlock/InfoBlock'
import Editor from '../Editor/Editor'
import { useState } from 'react'
import React from 'react'
import { useSelector} from 'react-redux'
import { createEducation, editEducation, removeEducation } from './functions'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../../buttons.css'
const Education = (props) => {
    const {setCanvasComponent} = props
    const [showEditor, setShowEditor] = useState(false)
    const [editorID, setEditorID] = useState("") // The ID of the component that needs to be edited
    const education = useSelector(state => state.education)
    return (
        <div className="Section_div">
            {!showEditor === true ?
            <React.Fragment>
                <div className="Section_title">
                    Education
                </div>
                <div className="Section_subtitle">
                    <h3>Include recent education.</h3>
                </div>
                <div className='Info_div'>
                    {education.map(element => {
                        return (
                            <InfoBlock onClick = {() => {setShowEditor(true); setEditorID(element.id);}} title = {element.subtitle + " | " + element.title } date = {element} key = {element.id}/>
                        )
                    })}
                </div>
                <div style = {{width: 'fit-content', margin: 'auto', marginTop : '1%', marginBottom: '1%'}}>
                    <button className='add_button' onClick={createEducation}>
                        Add Education
                    </button>
                </div>
                <div className='next_button_div'>
                    <button className='back_button' onClick={() => {setCanvasComponent("Experience")}}>
                        <ArrowForwardIcon style = {{fill : 'lightgrey'}} fontSize = 'large'/>
                    </button>
                </div>
            </React.Fragment> 
            : <Editor dateOption = {true} setShowEditor = {setShowEditor} removeFunction = {removeEducation} editFunction = {editEducation} editedItem = {education.find(element => element.id === editorID)}/>}
        </div>
    )
}

export default Education