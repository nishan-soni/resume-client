import './App.css';
import React, { Component } from 'react';
import Personal from './components/personal_info/personal';
import Education from './components/education/education';
import axios from 'axios'
import fileDownload from 'js-file-download'
import Experience from './components/employment/experience'
import Skills from './components/skills/skills';

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

  handleSkillChange = (skill_data, id) => {
    const skills = [...this.state.skills]
    let b = false
    skills.forEach((item, index) => {
      if(skills[index].id === id) {
        skills[index] = {...skill_data,id};
        b = true
      }
    })
    if (b === false) {
      skills.push({...skill_data, id})
    }
    this.setState({skills})
  }

  addSkillInput = () => {
    const skills = [...this.state.skills]
    const obj = {id : Date.now()}
    skills.push(obj)
    this.setState({skills})
    return obj;
  }

  removeSkillInput = (id) => {
    const skills = this.state.skills.filter(c => c.id !== id)
    this.setState({skills})
    return skills
  }

  updateSkillsArray = (newArray) => {
    this.setState({skills : [...newArray]})
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
        title: "EMPLOYMENT",
        array: [...this.state.experience]
      }
    }

    let skills = {}
    if(this.state.skills.length > 0) {
      let string = ""
      let array = [...this.state.skills]
      for(let i = 0; i <array.length; i++) {
        if(i === array.length-1) {
          string = string + array[i].skill
        }
        else {
          string = string + array[i].skill + ", "
        }

      }
      skills = {
        title: "SKILLS",
        skills: string
      }
    }

    axios({
      url : 'https://resume-e.herokuapp.com/create/template1',
      method: 'POST',
      data : {
        info : this.state.info,
        education : education,
        experience : experience,
        skills : skills
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
        <Experience handleExpChange = {this.handleExpChange} addInput = {this.addExpInput} removeInput = {this.removeExpInput} updateExpArray = {this.updateExpArray} expArray = {this.state.experience}/>
        <Education handleEduChange = {this.handleEduChange} addInput = {this.addEduInput} removeInput = {this.removeEduInput} updateEduArray = {this.updateEduArray} eduArray = {this.state.education}/>
        <Skills handleSkillChange = {this.handleSkillChange} addInput = {this.addSkillInput} removeInput = {this.removeSkillInput} updateSkillsArray = {this.updateSkillsArray} skillArray = {this.state.skills} />
        <button onClick = {this.onCreate}>enter</button>
      </React.Fragment>
    );
  } 
}
export default App;

