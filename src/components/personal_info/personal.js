import 'bootstrap/dist/css/bootstrap.css';
import './personal.css'
import React, { Component } from 'react';

class Personal extends Component {
    render() { 
        const {getFname, getLname, getPhone, getEmail} = this.props;
        return (
            <div className = "info">
                <div className = "info-title">
                    Personal Details
                </div>
                <div className = "info-container1">
                    <input
                        className = "form-control"
                        id = 'element'
                        type = "text" 
                        aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder = "First Name"
                        onChange = { (e) => {
                            getFname(e.target.value)
                            }
                        }
                    />
                    <input
                        className = "form-control"
                        id = 'element'
                        type = "tel" 
                        aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder = "Phone Number"
                        onChange = { (e) => {
                            getPhone(e.target.value)
                            }
                        }
                    />
                </div>
                
                <div className = "info-container2">
                    <input
                        className = "form-control"
                        id = 'element'
                        type = "text" 
                        aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder = "Last Name"
                        onChange = { (e) => {
                            getLname(e.target.value)
                            }
                        }
                    />
                    <input
                        className = "form-control"
                        id = 'element'
                        type = "text" 
                        aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder = "Email"
                        onChange = { (e) => {
                            getEmail(e.target.value)
                            }
                        }
                    />
                </div>
               
        </div>
        );
    }
}
 
export default Personal;
