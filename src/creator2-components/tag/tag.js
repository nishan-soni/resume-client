import './tag.css'
import DeleteIcon from '@material-ui/icons/Delete';
import BackspaceIcon from '@material-ui/icons/Backspace';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const Tag = (props) => {
    
    const {title, deleteSkill} = props

    return (
        <div className = 'tag'>
            <div style = {{paddingLeft : '0.5vw', paddingRight : '0.5vw', paddingTop : '0.25vw', paddingBottom : '0.25vw'}}>
                {title}
                <button className = 'delete-tag' onClick = {() => {deleteSkill(title)}}>
                    X
                </button>
            </div>
        </div>
    );
}
 
export default Tag;