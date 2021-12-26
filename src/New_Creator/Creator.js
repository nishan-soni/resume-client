import SideBar from "./components/SideBar/SideBar";
import "./Creator.css"
import { useState } from "react";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Personal from "./components/Personal/Personal";
import Save from "./components/Save/Save";
import Skills from "./components/Skills/Skills";
const Creator = () => {
    const [canvasComponent, setCanvasComponent] = useState("Personal Details")
    return (
        <div id = "Creator_div">
            <div id = "SideBar_div">
                <SideBar setCanvasComponent = {setCanvasComponent}/>
            </div>
            <div id = "Canvas_div">
                {canvasComponent === "Education" ? <Education setCanvasComponent = {setCanvasComponent}/> : null}
                {canvasComponent === "Experience" ? <Experience setCanvasComponent = {setCanvasComponent}/> : null}
                {canvasComponent === "Projects" ? <Projects setCanvasComponent = {setCanvasComponent}/> : null}
                {canvasComponent === "Skills" ? <Skills setCanvasComponent = {setCanvasComponent}/> : null}
                {canvasComponent === "Personal Details" ? <Personal setCanvasComponent = {setCanvasComponent}/> : null}
                {canvasComponent === "Save" ? <Save/> : null}
            </div>
        </div>
    )
}

export default Creator;