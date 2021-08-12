import React from 'react';
import { Button } from '@material-ui/core';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import SkillInput from './skillinput';
import "./skills.css"

const Skills = (props) => {
    const {handleSkillChange, addInput,removeInput, updateSkillsArray, skillArray} = props
    const [position, updatePosition] = React.useState([])

    const handleDragEnd = (result) => {
        if(!result.destination) {
            return
        }
        let items = [...skillArray]
        let [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        updatePosition([...items])
        updateSkillsArray([...items])
    }

    return (
        <div>
            <div className = "skill-title" style = {{marginBottom: "2vh"}}>
                Skills
            </div>
            <Button 
                onClick = {() => {
                    updatePosition([...position,addInput()])
                }} 
                color = "primary" variant = "contained" size = "medium"
            >
                    Add Skills
            </Button>
            <div style = {{marginTop : "2vh"}}>
                <DragDropContext onDragEnd = {handleDragEnd}>
                    <Droppable droppableId = "skilldrop">
                        {provided => (
                            <div ref = {provided.innerRef} {...provided.droppableProps}>
                                {position.map((skill, index) => {
                                    return(
                                        <Draggable 
                                            key={`${skill.id}`}
                                            draggableId={`${skill.id}`}
                                            index={index}
                                        >
                                            {provided => (
                                                <div 
                                                    style = {{width : "fit-content", height : "fit-content", marginTop : "3vh", marginBottom: "3vh"}}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className = "skillinput"
                                                    
                                                    
                                                >
                                                    <SkillInput key = {skill.id} onSkillChange = {handleSkillChange} removeInput = {removeInput} skillInput = {skill} updatePosition = {updatePosition}/>  
                                                </div>
                                                
                                            )}
                                        </Draggable>
                                    )
                                })}
                                    {provided.placeholder}
                            </div>
                        )}

                    </Droppable>

                </DragDropContext>
                    
            </div>
        </div>
    );
}
 
export default Skills;