import { useContext } from 'react';
import { EmploymentContext } from '../../Creator';
import './employment.css'
import Accordion from "../accordion/accordion";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import Subtitle from '../subtitle/subtitle';

const Employment = () => {

    const {employment, setEmployment} = useContext(EmploymentContext)

    const addEmpInput = () => {
        const newEmployment = [...employment]
        const obj = {id : Date.now() + 1, checked: false, text1 : 'Example Employment', text2: 'Location', start : 'Start Date', end : 'End Date'}
        newEmployment.push(obj)
        setEmployment(newEmployment)
        return obj;
    }

    const handleDragEnd = (result) => {
        if(!result.destination) {
            return
        }
        let items = [...employment]
        let [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setEmployment(items)
    }

    return (
        <div id= 'employment-container'>
            <div className = 'employment-title'>
                Employment.
            </div>
            <div style = {{marginBottom : '1vh'}}>
                <Subtitle subtitle = 'Include recent work experience and volunteering.'/>
            </div>
            <DragDropContext onDragEnd = {handleDragEnd}>
                <Droppable droppableId = 'empDrop'>
                    {provided => (
                        <div ref = {provided.innerRef} {...provided.droppableProps}>
                            {employment.map((item, index) => {
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
                                                <Accordion key = {item.id} checked = {item.checked} text1 = {item.text1} text2 = {item.text2} label1 = 'Job' label2 = 'Location' array = {employment} setArrayState = {setEmployment} id ={item.id} drag = {{...provided.dragHandleProps}} dateAllow = {true}  controlLabel = 'Currently working here.'/>
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
                <button className = 'add-emp-btn' onClick = {() => {addEmpInput()}}>Add Employment</button>
            </div>
        </div>
    );
}
 
export default Employment;