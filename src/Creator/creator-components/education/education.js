import './education.css'
import Accordion from "../accordion/accordion";
import { useContext } from "react";
import { EducationContext } from "../../Creator";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { motion } from 'framer-motion';


const Education = () => {
    const {education, setEducation} = useContext(EducationContext)

    const addEduInput = () => {
        const newEducation = [...education]
        const obj = {id : Date.now() + 1, checked: false, text1 : 'Example Education', text2: '', start : new Date(), end : new Date(), notes : []}
        newEducation.push(obj)
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
        <motion.div 
            id = 'education-container'
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 30, }}
        >
            <div id = 'edu-title'>
                Education.
            </div>
            <DragDropContext onDragEnd = {handleDragEnd}>
                <Droppable droppableId = 'eduDrop'>
                    {provided => (
                        <div ref = {provided.innerRef} {...provided.droppableProps}>
                            {education.map((item, index) => {
                                return(
                                    <Draggable
                                        key={`${item.id}`}
                                        draggableId={`${item.id}`}
                                        index={index}
                                    >
                                        {provided => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                
                                            >
                                                <Accordion start = {item.start} end = {item.end} notes = {item.notes} key = {item.id} checked = {item.checked} text1 = {item.text1} label1 = 'Degree' text2 = {item.text2} label2 = 'University' array = {education} setArrayState = {setEducation} id ={item.id} drag = {{...provided.dragHandleProps}} dateAllow = {true} controlLabel = 'Currently studying here.'/>
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
        </motion.div>
    );
}
 
export default Education;