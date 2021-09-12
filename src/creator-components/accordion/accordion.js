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
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {EditorState} from 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DeleteIcon from '@material-ui/icons/Delete';
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';

const AccordianStyle = makeStyles({
    root : {
        background : '#e85a4f',
        width : 'fit-content'

    }
})
const TypStyle = makeStyles({
    root : {
        fontFamily : [ 'Open Sans' ],
        fontSize : '1.6rem',
        color : 'white'
    }
})

const CapStyle = makeStyles({
    root : {
        fontFamily : [ 'Open Sans' ],
        color : 'white',
        fontSize : '0.8rem'
    }
})

const NotesStyle = makeStyles({
    root : {
        fontFamily : [ 'Open Sans' ],
        color : 'white',
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
    overrides : {
        MuiSvgIcon: {
            root: {
              fill: 'white',
            },
        },
    }
    
})

const DateStyle = makeStyles({
    input : {
        fontFamily : [ 'Open Sans' ],
        fontSize : '1.2rem',
        color: 'white',
    }
})

//textfield background #F0EEE7

const Accordion = (props) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [text1, setText1] = useState(props.text1)
    const [text2, setText2] = useState(props.text2)
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
    const [start, setStart] = React.useState()
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [end, setEnd] = React.useState()
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
    const [notes, setNotes] = React.useState([])
    const [endTemp, setEndTemp] = React.useState(months[selectedEndDate.getMonth()].toUpperCase() + " " + selectedEndDate.getFullYear().toString())

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
                <AccordionSummary expandIcon={<ExpandMoreIcon style = {{color : 'white'}} fontSize = 'large'/>} >
                    <button 
                        onClick = {() => {
                            removeInput(id)
                        }}
                        className = 'delete-accordion'
                    >
                        <DeleteIcon style = {{color : 'white'}}/> 
                    </button>
                    <Typography className = {TypClasses.root}>
                        {text1}
                    </Typography>
                    <button 
                        className = 'drag-accordion'
                        {...drag}
                    >
                        <DragHandleOutlinedIcon fontSize = 'large' style = {{color : 'white'}} />
                    </button>
                    
                </AccordionSummary>
                <AccordionDetails>
                    <div>

                    <div className = 'input-container'>
                        <div style = {{float : 'left'}}>
                            <input 
                                className = 'inputs' 
                                placeholder = {props.label1} 
                                onChange = {(e) => {
                                    let text1 = e.target.value
                                    setText1(text1)
                                    handleChange({text1, text2, start, end, notes }, id)
                                }}
                            />
                        </div>
                        <div style = {{float : 'right'}}>
                            <input 
                                className = 'inputs'
                                placeholder = {props.label2}
                                onChange = {(e) => {
                                    let text2 = e.target.value
                                    setText2(text2)
                                    handleChange({text1, text2, start, end, notes }, id)
                                }}
                            />
                        </div>
                    </div>
                        {dateAllow ?  
                        
                        <div style = {{display : 'block', width : 'fit-content', height : 'fit-content', margin : 'auto'}}>
                            <div className = "date-from">
                                <ThemeProvider theme = {DateTheme}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        value={selectedStartDate}
                                        openTo="year"
                                        views={["year", "month"]}
                                        InputProps = {{className : DateClasses.input, disableUnderline: true}}
                                        className = {DateClasses.datePicker}
                                        onChange = {
                                            (date) => {
                                                
                                                let start = ''
                                                try {
                                                    setSelectedStartDate(date);
                                                    start = months[date.getMonth()].toUpperCase() + " " + date.getFullYear().toString()
                                                } catch(e) {
                                                    start = ''
                                                }
                                                setStart(start)
                                                handleChange({text1, text2, start, end, notes }, id)
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
                                    <KeyboardDatePicker
                                        margin="normal"
                                        value={selectedEndDate}
                                        openTo="year"
                                        views={["year", "month"]}
                                        InputProps = {{className : DateClasses.input, disableUnderline: true}}
                                        className = {DateClasses.datePicker}
                                        onChange = {
                                            (date) => {
                                                setSelectedEndDate(date);
                                                let end = months[date.getMonth()].toUpperCase() + " " + date.getFullYear().toString()
                                                setEnd(end)
                                                setEndTemp(end)
                                                handleChange({text1, text2, start, end, notes }, id)
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
                            <div>
                                <FormControlLabel
                                    control = {
                                        <Checkbox color="primary" size = 'medium' onChange = {(e)=> {
                                            if (e.target.checked) {
                                                let end = "PRESENT"
                                                setEnd(end)
                                                handleChange({text1, text2, start, end, notes }, id)
                                            }
                                            else if (!e.target.checked) {
                                                let end = endTemp
                                                setEnd(end)
                                                handleChange({text1, text2, start, end, notes }, id)
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
                                                for(let i = 0; i < notes.length; i++) {
                                                    let temp = notes[i]
                                                    notes[i] = temp
                                                }
                                                if (notes[0] === "") {
                                                    notes = []
                                                }
                                                setNotes(notes)
                                                handleChange({text1, text2, start, end, notes }, id)
                                                
                                            }
                                            
                                        }
                                        editorStyle = {{border : "1px solid white", fontFamily : "Open Sans", color : 'white', backgroundColor: '#F0A69E'}}
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