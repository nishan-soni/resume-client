import loadGif from './LoadGif.gif'
const Load = () => {
    return(
        <div style = {{zIndex: '100', position : 'fixed', top : '50%', left : '50%', transform : 'translate(-50%, -50%)' }}>
            <img src = {loadGif} alt = ""/>
        </div>
    )
}

export default Load;