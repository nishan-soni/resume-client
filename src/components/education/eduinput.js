import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const EduInput = () =>  {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    return (
        <div className = "edu-container">
            <Accordion>
            <AccordionSummary>
                New Education
            </AccordionSummary>
            <AccordionDetails>
            <div className = "education">
                <div style = {{float: "left", marginRight : '0.8vw'}}>
                <TextField 
                    id= "filled-basic" 
                    label = "School" 
                    variant="filled" 
                 />
                </div>

                <div style = {{float: "right", marginLeft : '0.8vw'}}>
                <TextField 
                    id= "filled-basic" 
                    label = "Degree" 
                    variant="filled" 
                    
                 />
                </div>
                
                
                <div>
                    <div className = "date-from">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            format="MM/dd/yyyy"
                            margin="normal"
                            value={selectedDate}
                            onChange = {
                                (date) => {
                                    setSelectedDate(date);
                                    // onAddDate(date)
                                }
                            }
                  
                        />
                    </MuiPickersUtilsProvider>
                       
                    </div>
                    <div className = "date-to">
                    </div>
                </div>
            </div>
            </AccordionDetails>
            
        </Accordion>
        </div>
        
            
    );
}
 
export default EduInput;