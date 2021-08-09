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
import "./education.css"


const EduInput = (props) =>  {

    const {eduInput, onEduChange, removeInput, updatePosition} = props
    const {id} = eduInput

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [university, setUniversity] = React.useState("New Education")
    const [degree, setDegree] = React.useState("")
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
    const [start, setStart] = React.useState(months[selectedStartDate.getMonth()].toUpperCase() + " " + selectedStartDate.getFullYear().toString())
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [end, setEnd] = React.useState(months[selectedEndDate.getMonth()].toUpperCase() + " " + selectedEndDate.getFullYear().toString())
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
    const [notes, setNotes] = React.useState([])
    const [endTemp, setEndTemp] = React.useState(months[selectedEndDate.getMonth()].toUpperCase() + " " + selectedEndDate.getFullYear().toString())

    return (
        <div className = "edu-container">
            <Accordion>
                <AccordionSummary>
                    <Typography>
                        {university}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "education">
                        <div style = {{float: "left", marginRight : '0.8vw'}}>
                            <TextField 
                                id= "filled-basic" 
                                label = "School" 
                                variant="filled"
                                onChange = {(e) => {
                                    let university = e.target.value
                                    setUniversity(university)
                                    onEduChange({university, degree, start, end, notes }, id)
                                    }
                                } 
                            />
                        </div>

                        <div style = {{float: "right", marginRight : '4vw'}}>
                            <TextField 
                                id= "filled-basic" 
                                label = "Degree" 
                                variant="filled" 
                                onChange = {(e) => {
                                    let degree = e.target.value
                                    setDegree(degree)
                                    onEduChange({university, degree, start, end, notes }, id)
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
                                                onEduChange({university, degree, start, end, notes }, id)
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
                                                onEduChange({university, degree, start, end, notes }, id)
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
                                        onEduChange({university, degree, start, end, notes }, id)
                                    }
                                    else if (!e.target.checked) {
                                        let end = endTemp
                                        setEnd(end)
                                        onEduChange({university, degree, start, end, notes }, id)
                                    }
                                }}/>
                            }
                            label="Currently studying here"
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
                                            onEduChange({university, degree, start, end, notes }, id)
                                            
                                        }
                                        
                                    }
                                    editorStyle = {{border : "1px solid #EAEAEA", fontFamily : "Arial"}}
                                    toolbar={{options: ['list']}}
                                /> 
                            </div>
                            <Button onClick = {() => {
                                const newEduArray = removeInput(id)
                                updatePosition([...newEduArray])
                            }}
                            color = "secondary"
                            variant = "contained" 
                            size = "medium"
                            style = {{marginTop : "3vh"}}>
                                Delete Education
                            </Button>
                        </div>
                    </div>
                </AccordionDetails>  
            </Accordion>
        </div>
        
            
    );
}
 
export default EduInput;