import './personal.css'
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Personal extends Component {
    render() { 
        
        const {getFname, getLname, getPhone, getEmail} = this.props;

        return (
            <div className = "info">
                <div className = "info-title">
                    Personal Details
                </div>
                <div className = "info-container1">
                    <div style = {{marginBottom : "2vh"}}>
                    <TextField 
                        id= "filled-basic" 
                        label = "First Name" 
                        variant="filled" 
                        onChange = { (e) => {
                            getFname(e.target.value)
                            }
                        }
                        
                     />
                    </div>

                    <div>
                    <TextField 
                        id= "filled-basic" 
                        label = "Phone Number" 
                        variant="filled" 
                        onChange = { (e) => {
                            getPhone(e.target.value)
                            }
                        }
                        
                     />
                    </div>
                    
                    
                </div>
                
                <div className = "info-container2">
                    <div style = {{marginBottom : "2vh"}}>
                    <TextField 
                        id= "filled-basic" 
                        label = "Last Name" 
                        variant="filled" 
                        onChange = { (e) => {
                            getLname(e.target.value)
                            }
                        }
                        
                     />
                    </div>

                    <div>
                    <TextField 
                        id= "filled-basic" 
                        label = "Email" 
                        variant="filled" 
                        onChange = { (e) => {
                            getEmail(e.target.value)
                            }
                        }
                        
                     />
                    </div>
                
                    
                </div>
               
        </div>
        );
    }
}
 
export default Personal;
