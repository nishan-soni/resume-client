import { useState } from "react"
import './Editor.css'
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Popup from '../Popup/Popup'
import ClearIcon from '@material-ui/icons/Clear';

const DateTheme = createTheme({
    palette: {
        primary: {  // primary color
            contrastText: "#FFFFFF",
            dark: "#000000",  
            main: "#000000",
            light: "#000000"
        },
        secondary: {
            contrastText: "#000000",
			main: '#FFFFFF',
		},
    },  
})

const Editor = (props) => {
    const {setShowEditor, editFunction, editedItem, removeFunction} = props
    const [title, setTitle] = useState(editedItem.title)
    const [subtitle, setSubtitle] = useState(editedItem.subtitle)
    const [start, setStart] = useState(editedItem.start)
    const [end, setEnd] = useState(editedItem.end)
    const [notes, setNotes] = useState(editedItem.notes)
    const [currentChecked, setCurrentChecked] = useState(editedItem.currentChecked)
    const [showPopup, setShowPopup] = useState(false)
    const id = editedItem.id
    let data = {id,title,subtitle,start,end,notes,currentChecked}
    async function editData(key,info) {
        data[key] = info
    }
    
    return (
        <div className="Editor_parent">
            {showPopup === true ? <div><Popup message = "Are you sure you want to delete this?" setShowPopup = {setShowPopup} confirmFunction = {() => {removeFunction({id : id}); setShowEditor(false)}}/></div> : null}
            <div className="Editor_div">
                <div className="Inputs_div">
                    <div>
                        <input className="Editor_input" placeholder="Title" value = {title} onChange={ async (e) => {
                            const val = e.target.value
                            setTitle(val)
                            await editData("title", val)
                            editFunction({...data})
                        }}/>
                        <div className="input_caption">
                            Title
                        </div>
                    </div>
                    <div>
                        <input className="Editor_input" placeholder="Subtitle" value = {subtitle} onChange={async e => {
                            const val = e.target.value
                            setSubtitle(val)
                            await editData("subtitle", val)
                            editFunction({...data})
                        }}/>
                        <div className="input_caption">
                            Subtitle
                        </div>
                    </div>
                </div>
                <div className="Dates_div">
                    <div className="Datepicker_div">
                        <div className="Start_div">
                            <ThemeProvider theme = {DateTheme}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        label = "Start Date"
                                        variant="inline"
                                        margin="normal"
                                        value={start}
                                        openTo="year"
                                        views={["year", "month"]}
                                        onChange={async (date) => {
                                            setStart(date)
                                            await editData("start", date)
                                            editFunction({...data})
                                        }}
                                        InputProps={{
                                            style: {
                                                fontSize :'1.3em'
                                            },
                                            endAdornment: (
                                                <button style = {{background : 'none', border: 'none', cursor: 'pointer'}} onClick={async () => {
                                                    setStart(null)
                                                    await editData("start", null)
                                                    editFunction({...data})
                                                }}>
                                                    <ClearIcon style = {{fill: 'gray'}}/>
                                                </button>
                                            )
                                        }}
                                    />
                                    <div className="date_caption">
                                        Start Date
                                    </div>
                                </MuiPickersUtilsProvider>
                            </ThemeProvider>
                        </div>
                        <div className="End_div">
                            <ThemeProvider theme = {DateTheme}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        label = "End Date"
                                        variant="inline"
                                        margin="normal"
                                        value={end}
                                        openTo="year"
                                        views={["year", "month"]}
                                        onChange={async (date) => {
                                            setEnd(date)
                                            setCurrentChecked(false)
                                            await editData("end", date)
                                            await editData("currentChecked", false)
                                            editFunction({...data})
                                        }}
                                        InputProps={{
                                            style: {
                                                fontSize :'1.3em'
                                            },
                                            endAdornment: (
                                                <button style = {{background : 'none', border: 'none', cursor: 'pointer'}} onClick={async () => {
                                                    setEnd(null)
                                                    await editData("end", null)
                                                    editFunction({...data})
                                                }}>
                                                    <ClearIcon style = {{fill: 'gray'}}/>
                                                </button>
                                            )
                                        }}
                                    />
                                    <div className="date_caption">
                                        End Date
                                    </div>
                                    <div className="checkbox_div">
                                        <FormControlLabel
                                            control = {
                                                <Checkbox checked = {currentChecked} style ={{color: "#D3D3D3",}} value = {currentChecked} size = 'medium' onChange = {async (e)=> {
                                                    if (e.target.checked === true) {
                                                        setCurrentChecked(true)
                                                        setEnd(null)
                                                        await editData("currentChecked", true)
                                                        await editData("end", null)
                                                        editFunction({...data})
                                                    }
                                                    else if (e.target.checked === false) {
                                                        setCurrentChecked(false)
                                                        await editData("currentChecked", false)
                                                        editFunction({...data})
                                                    }
                                                }}/>
                                            }
                                            label={<div style = {{color: 'lightgray'}}>Current</div>}
                                        />
                                    </div>
                                </MuiPickersUtilsProvider>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
                <div className="text_editor">
                    <div style = {{fontSize: '1.3em', color: 'gray', marginBottom: '1%'}}>
                        Description
                    </div>
                    <ReactQuill
                        theme='snow'
                        value = {notes}
                        onChange={async (note) => {
                            setNotes(note)
                            await editData('notes', note)
                            editFunction({...data})
                        }}
                    />
                </div>
                <div className="multi_buttons_div">
                    <button className="back_button" onClick={() => {setShowEditor(false)}}>
                        <ArrowBackIcon style = {{fill : 'lightgray'}} fontSize = "large"/>
                    </button>
                    <button className="delete_button" onClick={() =>{setShowPopup(true)}}>
                        <DeleteOutlineIcon style = {{fill : '#e98074'}} fontSize = "large"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Editor;