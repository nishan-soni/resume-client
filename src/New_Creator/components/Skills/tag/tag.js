import './tag.css'
const Tag = (props) => {
    
    const {skillName, removeAction} = props

    return (
        <div className = 'tag'>
            <div style = {{paddingLeft : '0.5vw', paddingRight : '0.5vw', paddingTop : '0.25vw', paddingBottom : '0.25vw'}}>
                {skillName}
                <button className = 'delete-tag' onClick = {() => {removeAction()}}>
                    X
                </button>
            </div>
        </div>
    );
}
 
export default Tag;