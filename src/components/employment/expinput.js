import React from 'react';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Typography } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {EditorState} from 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './experience.css'

const ExpInput = (props) => {

    const {expInput, onExpChange, removeInput, updatePosition} = props
    const {id} = expInput

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [job, setJob] = React.useState("New Experience")
    const [location, setLocation] = React.useState("")
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
    const [start, setStart] = React.useState(months[selectedStartDate.getMonth()].toUpperCase() + " " + selectedStartDate.getFullYear().toString())
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [end, setEnd] = React.useState(months[selectedEndDate.getMonth()].toUpperCase() + " " + selectedEndDate.getFullYear().toString())
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
    const [notes, setNotes] = React.useState([])
    const [endTemp, setEndTemp] = React.useState(months[selectedEndDate.getMonth()].toUpperCase() + " " + selectedEndDate.getFullYear().toString())

    return (
        <div className = "exp-container">
            <Accordion>
                <AccordionSummary>
                    <Typography>
                        {job}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "experience">
                        <div style = {{float: "left", marginRight : '0.8vw'}}>
                            <TextField 
                                id= "filled-basic" 
                                label = "Job Title" 
                                variant="filled"
                                onChange = {(e) => {
                                    let job = e.target.value
                                    setJob(job)
                                    onExpChange({job, location, start, end, notes }, id)
                                    }
                                } 
                            />
                        </div>

                        <div style = {{float: "right", marginRight : '4vw'}}>
                            <TextField 
                                id= "filled-basic" 
                                label = "Location" 
                                variant="filled" 
                                onChange = {(e) => {
                                    let location = e.target.value
                                    setLocation(location)
                                    onExpChange({job, location, start, end, notes }, id)
                                    }
                                } 
                            />
                        </div>
                        
                        <div style = {{marginBottom : "22vh"}}>
                            <div className = "date-from">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        value={selectedStartDate}
                                        openTo="year"
                                        views={["year", "month"]}
                                        onChange = {
                                            (date) => {
                                                
                                                setSelectedStartDate(date);
                                                let start = months[date.getMonth()].toUpperCase() + " " + date.getFullYear().toString()
                                                setStart(start)
                                                onExpChange({job, location, start, end, notes }, id)
                                            }
                                        }
                            
                                    />
                                </MuiPickersUtilsProvider>
                                <div>
                                    <Typography variant = "caption">
                                        Start Date
                                    </Typography>
                                </div>
                            </div>
                            <div className = "date-to">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        value={selectedEndDate}
                                        openTo="year"
                                        views={["year", "month"]}
                                        onChange = {
                                            (date) => {
                                                
                                                setSelectedEndDate(date);
                                                let end = months[date.getMonth()].toUpperCase() + " " + date.getFullYear().toString()
                                                setEnd(end)
                                                setEndTemp(end)
                                                onExpChange({job, location, start, end, notes }, id)
                                            }
                                        }
                            
                                    />
                                </MuiPickersUtilsProvider>
                                <div>
                                    <Typography variant = "caption">
                                        End Date
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div>
                        <FormControlLabel
                            control = {
                                <Checkbox color="primary" onChange = {(e)=> {
                                    if (e.target.checked) {
                                        let end = "PRESENT"
                                        setEnd(end)
                                        onExpChange({job, location, start, end, notes }, id)
                                    }
                                    else {
                                        let end = endTemp
                                        setEnd(end)
                                        onExpChange({job, location, start, end, notes }, id)
                                    }
                                }}/>
                            }
                            label="Currently working here"
                        />
                            
                        </div>
                        <div>
                            <Typography>
                                Notes
                            </Typography>
                            <div style = {{width: "35vw", marginTop: "2vh"}}>
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={
                                        (e) => {
                                            setEditorState(e)
                                            let lines = e.getCurrentContent().getPlainText().toString()
                                            let notes = lines.split('\n')
                                            for(let i = 0; i < notes.length; i++) {
                                                let temp = "•" + notes[i]
                                                notes[i] = temp
                                            }
                                            if (notes[0] === "•") {
                                                notes = []
                                            }
                                            setNotes(notes)
                                            onExpChange({job, location, start, end, notes }, id)
                                            
                                        }
                                        
                                    }
                                    editorStyle = {{border : "1px solid #EAEAEA", fontFamily : "Arial"}}
                                    toolbar={{options: ['list']}}
                                /> 
                            </div>
                            <Button onClick = {() => {
                                const newExpArray = removeInput(id)
                                updatePosition([...newExpArray])
                            }}
                            color = "secondary"
                            variant = "contained" 
                            size = "medium"
                            style = {{marginTop : "3vh"}}>
                                Delete Employment
                            </Button>
                        </div>
                    </div>
                </AccordionDetails>  
            </Accordion>
        </div>
        
            
    );
}

export default ExpInput;