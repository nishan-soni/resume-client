import './download.css'
import Preview from '../preview/preview';
import Subtitle from '../subtitle/subtitle';

const Download = (props) => {
    const {onDownload, pointer, updatePointer, templates, setSelect} = props
    return(
        <div className = "download-container">
            <div className = "download-title">
                Save Resume.
            </div>
            <div style = {{marginBottom : '2vh'}}>
                <Subtitle subtitle = "Click on the preview to change resume templates."/>
            </div>
            
            <Preview updatePointer = {updatePointer} pointer = {pointer} templates = {templates} setSelect = {setSelect}/>
            <div style = {{width : 'fit-content', height : 'fit-content', margin : 'auto'}}>
                <button className = "save-btn" onClick = {onDownload}>
                    Save
                </button>
            </div>
            
        </div>
    )
}

export default Download;