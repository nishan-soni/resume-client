import React from 'react';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Button, Typography } from '@material-ui/core';
import "./skills.css"
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SkillInput = (props) => {
    const [skill, setSkill] = React.useState("New Skill")
    const {skillInput, onSkillChange, removeInput, updatePosition} = props
    const {id} = skillInput


    return (
        <div className = "skill-container">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>
                        {skill}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <TextField 
                            id= "filled-basic" 
                            label = "Skill" 
                            variant="outlined"
                            onChange = {(e) => {
                                    let skill = e.target.value
                                    setSkill(skill)
                                    onSkillChange({skill}, id)
                                }
                            }
                            style = {{width: '15vw'}}
                        />
                    </div>
                    <Button
                        color = "secondary"
                        variant = "contained" 
                        size = "small"
                        style = {{marginTop : "3vh", marginLeft : "3vh"}}
                        onClick = {()=>{
                            const newExpArray = removeInput(id)
                            updatePosition([...newExpArray])
                        }}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>  
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
 
export default SkillInput;