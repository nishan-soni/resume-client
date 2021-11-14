import React, {useState} from 'react';
import AccordionMUI from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import './accordion.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    DatePicker
} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {ContentState, EditorState} from 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DeleteIcon from '@material-ui/icons/Delete';
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';

const AccordianStyle = makeStyles({
    root : {
        background : 'white',
        width : 'fit-content',
        border : '1px solid #e98074',
        boxShadow: 'none'
    }
})
const TypStyle = makeStyles({
    root : {
        fontFamily : [ 'Open Sans' ],
        fontSize : '1.6rem',
        color : '#e98074',
        boxShadow: "none"
    }
})

const CapStyle = makeStyles({
    root : {
        fontFamily : [ 'Open Sans' ],
        color : '#e98074',
        fontSize : '0.8rem'
    }
})

const NotesStyle = makeStyles({
    root : {
        fontFamily : [ 'Open Sans' ],
        color : '#e98074',
        fontSize : '1.3rem'
    }
})

const DateTheme = createTheme({
    palette: {
        primary: {  // primary color
            contrastText: "#FFFFFF",
            dark: "#e98074",  
            main: "#e98074",
            light: "#e98074"
        },
        secondary: {
            contrastText: "#e98074",
			main: '#FFFFFF',
		},
    },
    
})

const DateStyle = makeStyles({
    input : {
        fontFamily : [ 'Open Sans' ],
        fontSize : '1.2rem',
        color: '#e98074',
    }
})

//textfield background #F0EEE7

const Accordion = (props) => {
    //Gets notes from cookies and displays them in editor
    let notesString = ""
    props.notes.forEach((value, index) => {
        if(!index+1 === props.notes.length) {
            notesString += props.notes[index] + ";"
        }
        else {
            notesString += props.notes[index]
        }
        
    })

    const [text1, setText1] = useState(props.text1)
    const [text2, setText2] = useState(props.text2)
    const [start, setStart] = React.useState(props.start)
    const [end, setEnd] = React.useState(props.end)
    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(ContentState.createFromText(notesString, ";")))
    const [notes, setNotes] = React.useState([])
    const [checked, setChecked] = React.useState(props.checked)

    const {array, setArrayState, id, drag, controlLabel, dateAllow} = props

    const handleChange = (data) => {
        const newArray = [...array]
        let b = false
        newArray.forEach((item, index) => {
            if(newArray[index].id === id) {
                newArray[index] = {...data,id};
                b = true
            }
        })
        if (b === false) {
            newArray.push({...data, id})
        }
        setArrayState(newArray)
    }

    const removeInput = (id) => {
        const newArray = array.filter(c => c.id !== id)
        setArrayState(newArray)
    }

    //text1/2, label1/2

    const AccordianClasses = AccordianStyle()
    const TypClasses = TypStyle()
    const DateClasses = DateStyle()
    const CapClasses = CapStyle()
    const NotesClasses = NotesStyle()

    return (
        <div className = "accordion-container">
            <AccordionMUI className = {AccordianClasses.root}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style = {{fill : '#e98074'}} fontSize = 'large'/>} >
                    <button 
                        onClick = {() => {
                            removeInput(id)
                        }}
                        className = 'delete-accordion'
                    >
                        <DeleteIcon style = {{fill : '#e98074'}}/> 
                    </button>
                    <div style = {{width : '40vw'}}> 
                        <Typography className = {TypClasses.root}>
                            {text1}
                        </Typography>
                    </div>
                    <button 
                        className = 'drag-accordion'
                        {...drag}
                    >
                        <DragHandleOutlinedIcon fontSize = 'large' style = {{fill : '#e98074'}} />
                    </button>
                    
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                    <div className = 'input-container' style = {{display : 'block', overflow: 'auto', height: 'fit-content', width: 'fit-content'}}>
                        <div style = {{float : 'left'}}>
                            <input
                                value = {text1}
                                className = 'inputs' 
                                placeholder = {props.label1} 
                                onChange = {(e) => {
                                    let text1 = e.target.value
                                    setText1(text1)
                                    handleChange({text1, text2, start, end, notes, checked }, id)
                                }}
                            />
                        </div>
                        <div style = {{float : 'right'}}>
                            <input
                                value = {text2}
                                className = 'inputs'
                                placeholder = {props.label2}
                                onChange = {(e) => {
                                    let text2 = e.target.value
                                    setText2(text2)
                                    handleChange({text1, text2, start, end, notes, checked }, id)
                                }}
                            />
                        </div>
                    </div>
                        {dateAllow ?  
                        
                        <div className = "dates" style = {{display : 'block', width : 'fit-content', height : 'fit-content', margin : 'auto', marginTop: '3vh'}}>
                            <div className = "date-from">
                                <ThemeProvider theme = {DateTheme}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        variant="inline"
                                        margin="normal"
                                        value={start}
                                        openTo="year"
                                        views={["year", "month"]}
                                        InputProps = {{className : DateClasses.input, disableUnderline: true, readOnly : true}}
                                        className = {DateClasses.datePicker}
                                        onChange = {
                                            (date) => {
                                                let start = date
                                                setStart(start)
                                                handleChange({text1, text2, start, end, notes, checked }, id)
                                            }
                                        }
                                    />
                                </MuiPickersUtilsProvider>
                                </ThemeProvider>
                                <div>
                                    <Typography variant = "caption" className = {CapClasses.root}>
                                        Start Date
                                    </Typography>
                                </div>
                            </div>
                            <div className = "date-to">
                                <ThemeProvider theme = {DateTheme}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        variant="inline"
                                        margin="normal"
                                        value={end}
                                        openTo="year"
                                        views={["year", "month"]}
                                        InputProps = {{className : DateClasses.input, disableUnderline: true, readOnly : true}}
                                        className = {DateClasses.datePicker}
                                        onChange = {
                                            (date) => {
                                                let end = date
                                                setEnd(end)
                                                handleChange({text1, text2, start, end, notes, checked }, id)
                                            }
                                        }
                                    />
                                </MuiPickersUtilsProvider>
                                </ThemeProvider>
                                <div>
                                    <Typography variant = "caption" className = {CapClasses.root}>
                                        End Date
                                    </Typography>
                                </div>
                            </div>
                            <div className = 'date-current'>
                                <FormControlLabel
                                    control = {
                                        <Checkbox style ={{color: "#e98074",}} checked = {checked} size = 'medium' onChange = {(e)=> {
                                            if (e.target.checked) {
                                                let end = null
                                                setEnd(end)
                                                let checked = true
                                                setChecked(checked)
                                                handleChange({text1, text2, start, end, notes, checked }, id)
                                            }
                                            else if (!e.target.checked) {
                                                let end = new Date()
                                                setEnd(end)
                                                let checked = false
                                                setChecked(checked)
                                                handleChange({text1, text2, start, end, notes, checked }, id)
                                            }
                                        }}/>
                                    }
                                    label={<Typography className = {DateClasses.input}>{controlLabel}</Typography>}
                                />
                            </div>
                        </div>
                        : null}
                        <div style = {{height : "fit-content", width : 'fit-content', margin : 'auto', paddingTop : '1vh'}}>
                                <Typography className = {NotesClasses.root}>
                                    Notes
                                </Typography>
                                <Typography className = {CapClasses.root}>
                                    • List accomplishments and describe what you have done.
                                </Typography>
                                <Typography className = {CapClasses.root}>
                                    • Add each note on a new line.
                                </Typography>
                                <div style = {{width: "45vw", marginTop: "2vh"}}>
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={
                                            (e) => {
                                                setEditorState(e)
                                                let lines = e.getCurrentContent().getPlainText().toString()
                                                let notes = lines.split('\n')
                                                if (notes[0] === "") {
                                                    notes = []
                                                }
                                                setNotes(notes)
                                                handleChange({text1, text2, start, end, notes, checked }, id)
                                                
                                            }
                                            
                                        }
                                        editorStyle = {{minHeight:"10vh", border : "1px solid lightgrey", fontFamily : "Open Sans", color : 'black', backgroundColor: 'white'}}
                                        toolbar={{options: ['textAlign', 'history']}}
                                    /> 
                                </div>
                            </div>
                    </div>
                </AccordionDetails>
            </AccordionMUI>
        </div>
    );
}
 
export default Accordion;