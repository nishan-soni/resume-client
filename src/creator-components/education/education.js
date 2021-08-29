import './education.css'
import Accordion from "../accordion/accordion";
import { useContext } from "react";
import { EducationContext } from "../../Creator";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


const Education = () => {
    const {education, setEducation} = useContext(EducationContext)

    const addEduInput = () => {
        const newEducation = [...education]
        const obj = {id : Date.now() + 1, text1 : 'Example Education', text2: 'Location', start : 'Start Date', end : 'End Date'}
        newEducation.push(obj)
        console.log(newEducation)
        setEducation(newEducation)
        return obj;
    }

    const handleDragEnd = (result) => {
        if(!result.destination) {
            return
        }
        let items = [...education]
        let [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setEducation(items)
    }

    return (
        <div id = 'education-container'>
            <div id = 'edu-title'>
                Education.
            </div>
            <DragDropContext onDragEnd = {handleDragEnd}>
                <Droppable droppableId = 'eduDrop'>
                    {provided => (
                        <div ref = {provided.innerRef} {...provided.droppableProps}>
                            {education.map((edu, index) => {
                                return(
                                    <Draggable
                                        key={`${edu.id}`}
                                        draggableId={`${edu.id}`}
                                        index={index}
                                    >
                                        {provided => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                
                                            >
                                                <Accordion key = {edu.id} text1 = 'New Education' label1 = 'Degree' label2 = 'University' array = {education} setArrayState = {setEducation} id ={edu.id} drag = {{...provided.dragHandleProps}} dateAllow = {true} controlLabel = 'Currently studying here.'/>
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
            <div style = {{height : 'fit-content', width : 'fit-content', margin : 'auto', marginBottom : '2vh'}}>
                <button className = 'add-edu-btn' onClick = {() => {addEduInput()}}>Add Education</button>
            </div>
        </div>
    );
}
 
export default Education;