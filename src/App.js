import './App.css';
import React, { Component } from 'react';
import Personal from './components/personal_info/personal';
import Education from './components/education/education';
import axios from 'axios'
import fileDownload from 'js-file-download'

class App extends Component {
  state = {
    edu_inputs : [],
    template : '',
    info : {
      fname: "",
      lname: "",
      phone: "",
      email: "",
    },
    education : [],
    experience: [],
    skills : [],
    projects :[]
  }

  getFname = (text) => {
    this.setState(prevState => ({
      info : {
        ...prevState.info,
        fname : text.toUpperCase(),
      }
    }))
  }

  getLname = (text) => {
    this.setState(prevState => ({
      info : {
        ...prevState.info,
        lname : text.toUpperCase(),
      }
    }))
  }

  getPhone = (text) => {
    this.setState(prevState => ({
      info : {
        ...prevState.info,
        phone : text,
      }
    }))
  }

  getEmail = (text) => {
    this.setState(prevState => ({
      info : {
        ...prevState.info,
        email : text,
      }
    }))
  }

  handleEduChange = (edu_data, id) => {
    const education = [...this.state.education];
    let b = false
    education.forEach((item, index) => {
      if(education[index].id === id) {
        education[index] = {...edu_data,id};
        b = true
      }
    })
    if (b === false) {
      education.push({...edu_data, id})
    }
    this.setState({education})
  }

  addEduInput = () => {
    const edu_inputs = [...this.state.edu_inputs]
    edu_inputs.push({id : Date.now()})
    this.setState({edu_inputs: edu_inputs})
  }

  removeEduInput = (id) => {
    const edu_inputs = this.state.edu_inputs.filter(c => c.id !== id)
    const education = this.state.education.filter(item => item.id !== id)
    this.setState({edu_inputs : edu_inputs})
    this.setState({education : education})
  }

  onCreate = () => {
    axios({
      url : 'https://resume-e.herokuapp.com/create/template1',
      method: 'POST',
      data : {
        info : this.state.info,
        education : this.state.education,
      },
      responseType: 'blob'
    }).then(response => {
      fileDownload(response.data, 'resume.pdf')
    })
  }

  //primary colour of the app #28247c
  //<button onClick = {this.onCreate}>enter</button>
  render() {
    return (
      <React.Fragment>
        <Personal getFname = {this.getFname} getLname = {this.getLname} getPhone = {this.getPhone}   getEmail = {this.getEmail}/>
        <Education handleEduChange = {this.handleEduChange} addInput = {this.addEduInput} removeInput = {this.removeEduInput} edu_inputs = {this.state.edu_inputs} />
        <button onClick = {this.onCreate}>enter</button>
      </React.Fragment>
    );
  } 
}
export default App;

