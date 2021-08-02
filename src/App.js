import './App.css';
import React, { Component } from 'react';
import Personal from './components/personal_info/personal';
import Education from './components/education/education';
import axios from 'axios'
import fileDownload from 'js-file-download'
import Experience from './components/experience/experience'

class App extends Component {
  state = {
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
    const education = [...this.state.education]
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
    const education = [...this.state.education]
    const obj = {id : Date.now()}
    education.push(obj)
    this.setState({education: education})
    return obj;
  }

  removeEduInput = (id) => {
    const education = this.state.education.filter(c => c.id !== id)
    this.setState({education : education})
    return education
  }

  updateEduArray = (newArray) => {
    this.setState({education : [...newArray]})
  }

  handleExpChange = (exp_data, id) => {
    const experience = [...this.state.experience]
    let b = false
    experience.forEach((item, index) => {
      if(experience[index].id === id) {
        experience[index] = {...exp_data,id};
        b = true
      }
    })
    if (b === false) {
      experience.push({...exp_data, id})
    }
    this.setState({experience})
  }

  addExpInput = () => {
    const experience = [...this.state.experience]
    const obj = {id : Date.now()}
    experience.push(obj)
    this.setState({experience})
    return obj;
  }

  removeExpInput = (id) => {
    const experience = this.state.experience.filter(c => c.id !== id)
    this.setState({experience})
    return experience
  }

  updateExpArray = (newArray) => {
    this.setState({experience : [...newArray]})
  }

  onCreate = () => {
    let education = {}

    if(this.state.education.length >0) {
      education = {
        title: "EDUCATION",
        array: [...this.state.education]
      }
    }

    let experience = {}

    if(this.state.experience.length > 0) {
      experience = {
        title: "EXPERIENCE",
        array: [...this.state.experience]
      }
    }

    axios({
      url : 'https://resume-e.herokuapp.com/create/template1',
      method: 'POST',
      data : {
        info : this.state.info,
        education : education,
        experience : experience
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
        <Education handleEduChange = {this.handleEduChange} addInput = {this.addEduInput} removeInput = {this.removeEduInput} updateEduArray = {this.updateEduArray} eduArray = {this.state.education}/>
        <Experience handleExpChange = {this.handleExpChange} addInput = {this.addExpInput} removeInput = {this.removeExpInput} updateExpArray = {this.updateExpArray} expArray = {this.state.experience}/>
        <button onClick = {this.onCreate}>enter</button>
      </React.Fragment>
    );
  } 
}
export default App;

