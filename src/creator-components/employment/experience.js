import React from 'react';
import ExpInput from './expinput';
import { Button } from '@material-ui/core';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import './experience.css'

const Experience = (props) => {
    const {handleExpChange, addInput,removeInput, updateExpArray, expArray} = props
    const [position, updatePosition] = React.useState([])

    const handleDragEnd = (result) => {
        if(!result.destination) {
            return
        }
        let items = [...expArray]
        let [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        updatePosition([...items])
        updateExpArray([...items])
    }

    return (
        <div>
            <div className = "exp-title" style = {{marginBottom: "2vh"}}>
                Employment History
            </div>
            <Button 
                onClick = {() => {
                    updatePosition([...position,addInput()])
                }} 
                color = "primary" variant = "contained" size = "medium"
            >
                    Add Employment
            </Button>
            <div style = {{marginTop : "2vh"}}>
                <DragDropContext onDragEnd = {handleDragEnd}>
                    <Droppable droppableId = "edudrop">
                        {provided => (
                            <div ref = {provided.innerRef} {...provided.droppableProps}>
                                {position.map((experience, index) => {
                                    return(
                                        <Draggable 
                                            key={`${experience.id}`}
                                            draggableId={`${experience.id}`}
                                            index={index}
                                        >
                                            {provided => (
                                                <div 
                                                    style = {{width : "fit-content", height : "fit-content", marginTop : "3vh", marginBottom: "3vh"}}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className = "expinput"
                                                    
                                                    
                                                >
                                                    
                                                <ExpInput key = {experience.id} onExpChange = {handleExpChange} removeInput  = {removeInput} expInput = {experience} updatePosition = {updatePosition}/>
                                                 
                                                    
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
 
export default Experience;