import SideBar from "./components/SideBar/SideBar";
import "./Creator.css"
import { useState } from "react";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Personal from "./components/Personal/Personal";
import Save from "./components/Save/Save";
import Skills from "./components/Skills/Skills";
import MobileMenu from "./components/MobileMenu/MobileMenu";
const Creator = () => {
    const [canvasComponent, setCanvasComponent] = useState("Personal Details")
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div id = "Creator_div">
            <div id = "SideBar_div">
                <SideBar setCanvasComponent = {setCanvasComponent}/>
            </div>
            <div id = "Canvas_div">
                <button className='open-menu-button' style = {openMenu === true ? {color: 'white'} : {color: 'black'}} onClick={() => {
                    if (openMenu === true) {
                        setOpenMenu(false)
                    }
                    else {
                        setOpenMenu(true)
                    }
                }}>
                    ☰
                </button>
                {openMenu === true ? <MobileMenu setOpenMenu = {setOpenMenu} setCanvasComponent = {setCanvasComponent}/> : null}
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