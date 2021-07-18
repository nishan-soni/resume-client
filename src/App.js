import './App.css';
import React, { Component } from 'react';
import Personal from './components/personal_info/personal';
import Education from './components/education/education';
import axios from 'axios'
import fileDownload from 'js-file-download'

class App extends Component {
  state = {
    edu_input : [],
    exp_input : [],
    skill_input : [],
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

  handleEduChange = (edu_data, index) => {
    const education = [...this.state.education];
    education[index] = edu_data
    this.setState({education})
  }

  onCreate = () => {
    axios({
      url : 'https://resume-e.herokuapp.com/create/template1',
      method: 'POST',
      data : {
        info : this.state.info,
      },
      responseType: 'blob'
    }).then(response => {
      fileDownload(response.data, 'resume.pdf')
    })
  }

  //primary colour of the app #28247c
  //<button onClick = {this.onClick}>enter</button>
  render() {
    return (
      <React.Fragment>
        <Personal getFname = {this.getFname} getLname = {this.getLname} getPhone = {this.getPhone}   getEmail = {this.getEmail}/>
        <Education handleEduChange = {this.handleEduChange} />
      </React.Fragment>
    );
  } 
}
export default App;

