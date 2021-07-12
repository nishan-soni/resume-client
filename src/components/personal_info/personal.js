import 'bootstrap/dist/css/bootstrap.css';
import './personal.css'
import React, { Component } from 'react';

class Personal extends Component {
    render() { 
        const {getFname, getLname, getPhone, getEmail} = this.props;
        return (
            <div className = "name">
            <input
             className = "form-control"
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
             type = "tel" 
             aria-label="Small" 
             aria-describedby="inputGroup-sizing-sm"
             placeholder = "Phone Number"
             onChange = { (e) => {
                 getPhone(e.target.value)
                }
             }
             />
             <input
             className = "form-control"
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
        );
    }
}
 
export default Personal;
