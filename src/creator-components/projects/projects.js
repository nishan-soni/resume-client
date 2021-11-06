import { useContext } from 'react';
import { ProjectsContext } from '../../Creator';
import './projects.css'
import Accordion from "../accordion/accordion";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Projects = () => {
    const {projects, setProjects} = useContext(ProjectsContext)
    const addProjInput = () => {
        const newProjects = [...projects]
        const obj = {id : Date.now(), text1 : 'Example Project', text2: "", start : 'Start Date', end : 'End Date'}
        newProjects.push(obj)
        setProjects(newProjects)
        return obj;
    }
    
    const handleDragEnd = (result) => {
        if(!result.destination) {
            return
        }
        let items = [...projects]
        let [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setProjects(items)
    }

    return (
        <div className = 'projects-container'>
            <div className = 'projects-title'>
                Projects.
            </div>
            <DragDropContext onDragEnd = {handleDragEnd}>
                <Droppable droppableId = 'projDrop'>
                    {provided => (
                        <div ref = {provided.innerRef} {...provided.droppableProps}>
                            {projects.map((item, index) => {
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
                                                <Accordion key = {item.id} text1 = {item.text1} text2 = {item.text2} label1 = 'Project' label2 = 'Subtitle' array = {projects} setArrayState = {setProjects} id ={item.id} drag = {{...provided.dragHandleProps}}  controlLabel = 'Currently working on project.'/>
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
                <button className = 'add-proj-btn' onClick = {() => {addProjInput()}}>Add Project</button>
            </div>
        </div>
    )
}


export default Projects;
