import './download.css'
import Preview from '../../creator2-components/preview/preview';

const Download = (props) => {
    const {onDownload, pointer, updatePointer, templates} = props
    return(
        <div className = "download-container">
            <div className = "download-title">
                Save Resume.
            </div>
            <Preview updatePointer = {updatePointer} pointer = {pointer} templates = {templates}/>
            <div style = {{width : 'fit-content', height : 'fit-content', margin : 'auto'}}>
                <button className = "save-btn" onClick = {onDownload}>
                    Save
                </button>
            </div>
            
        </div>
    )
}

export default Download;