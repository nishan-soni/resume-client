import './App.css';
import React, { Component } from 'react';
import Personal from './components/personal_info/personal';
import Education from './components/education/education';
import axios from 'axios'
import fileDownload from 'js-file-download'

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

  onCreate = () => {
    let education = {}

    if(this.state.education.length >0) {
      education = {
        title: "EDUCATION",
        array: [...this.state.education]
      }
    }

    const experience = {
      title : "EXPERIENCE",
		  array : [
        {
          job: "Neuroscientest",
          location: "| Calgary Childeren's Hospital",
          start: "SEPTEMBER 2021",
          end : "JUNE 2025",
          notes: ["Helped research on brains."]
        }
		  ]
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
        <Education handleEduChange = {this.handleEduChange} addInput = {this.addEduInput} removeInput = {this.removeEduInput} education = {this.state.education} updateEduArray = {this.updateEduArray} eduArray = {this.state.education}/>
        <button onClick = {this.onCreate}>enter</button>
      </React.Fragment>
    );
  } 
}
export default App;

