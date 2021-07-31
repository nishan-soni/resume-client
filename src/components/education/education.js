import React from 'react';
import EduInput from './eduinput';
import "./education.css"
import { Button } from '@material-ui/core';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Education = (props) => {
    const {handleEduChange, addInput,removeInput, updateEduArray, eduArray} = props
    const [position, updatePosition] = React.useState([])

    const handleDragEnd = (result) => {
        if(!result.destination) {
            return
        }
        let items = [...eduArray]
        let [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        updatePosition([...items])
        updateEduArray([...items])
    }


    return (
        <div>
            <div className = "edu-title" style = {{marginBottom: "2vh"}}>
                Education
            </div>
            <Button 
                onClick = {() => {
                    updatePosition([...position,addInput()])
                }} 
                color = "primary" variant = "contained" size = "medium"
            >
                    Add Education
            </Button>
            <div style = {{marginTop : "2vh"}}>
                <DragDropContext onDragEnd = {handleDragEnd}>
                    <Droppable droppableId = "yo">
                        {provided => (
                            <div ref = {provided.innerRef} {...provided.droppableProps}>
                                {position.map((education, index) => {
                                    return(
                                        <Draggable 
                                            key={`${education.id}`}
                                            draggableId={`${education.id}`}
                                            index={index}
                                        >
                                            {provided => (
                                                <div 
                                                    style = {{width : "fit-content", height : "fit-content", marginTop : "3vh", marginBottom: "3vh"}}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    
                                                >
                                                    <EduInput key = {education.id} onEduChange = {handleEduChange} removeInput  = {removeInput} eduInput = {education} updatePosition = {updatePosition}/>

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
 
export default Education;