import { useContext } from 'react';
import { CertificatesContext } from '../../Creator';
import './certificates.css'
import Accordion from "../accordion/accordion";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Certificates = () => {
    const {certificates, setCertificates} = useContext(CertificatesContext)
    const addCertInput = () => {
        const newCertificates = [...certificates]
        const obj = {id : Date.now(), text1 : 'Example Certificate', text2: "",}
        newCertificates.push(obj)
        setCertificates(newCertificates)
        return obj;
    }
    
    const handleDragEnd = (result) => {
        if(!result.destination) {
            return
        }
        let items = [...certificates]
        let [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setCertificates(items)
    }

    return (
        <div className = 'certificates-container'>
            <div className = 'certificates-title'>
                Certificates.
            </div>
            <DragDropContext onDragEnd = {handleDragEnd}>
                <Droppable droppableId = 'projDrop'>
                    {provided => (
                        <div ref = {provided.innerRef} {...provided.droppableProps}>
                            {certificates.map((cert, index) => {
                                return(
                                    <Draggable
                                        key={`${cert.id}`}
                                        draggableId={`${cert.id}`}
                                        index={index}
                                    >
                                        {provided => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                
                                            >
                                                <Accordion key = {cert.id} text1 = 'New Certificate' label1 = 'Certificate' label2 = 'Subtitle' array = {certificates} setArrayState = {setCertificates} id ={cert.id} drag = {{...provided.dragHandleProps}}  controlLabel = 'Currently working on project.'/>
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
                <button className = 'add-cert-btn' onClick = {() => {addCertInput()}}>Add Certificate</button>
            </div>
        </div>
    )
}


export default Certificates;
