import { useContext } from 'react';
import { ProjectsContext } from '../../Creator2';
import './projects.css'
import Accordion from "../accordion/accordion";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

/*const addEmpInput = () => {
    const newEmployment = [...employment]
    const obj = {id : Date.now()}
    newEmployment.push(obj)
    console.log(newEmployment)
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
}*/

const Projects = () => {
    const {projects, setProjects} = useContext(ProjectsContext)

    return (
        <div className = 'projects-container'>
            <div className = 'projects-title'>
                Projects.
            </div>
            <div style = {{height : 'fit-content', width : 'fit-content', margin : 'auto', marginBottom : '2vh'}}>
                <button className = 'add-proj-btn' onClick = {() => {}}>Add Project</button>
            </div>
        </div>
    )
}

export default Projects;
