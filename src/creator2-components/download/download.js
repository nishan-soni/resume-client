import './download.css'

const Download = (props) => {
    const {onDownload} = props
    return(
        <div className = "download-container">
            <div className = "download-title">
                Save Resume.
            </div>
            <div style = {{width : 'fit-content', height : 'fit-content', margin : 'auto'}}>
                <button className = "save-btn" onClick = {onDownload}>
                    Save
                </button>
            </div>
            
        </div>
    )
}

export default Download;