import "./SideBar.css"
const SideBar = (props) => {
    const {setCanvasComponent} = props
    return (
        <div className="SideBar">
            <button className="title_link" onClick={()=>{setCanvasComponent("Personal Details")}}>Personal Details</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Education")}}>Education</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Experience")}}>Experience</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Skills")}}>Skills</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Projects")}}>Projects</button>
            <button className="title_link" onClick={()=>{setCanvasComponent("Save")}}>Save</button>
        </div>
    )
}

export default SideBar;