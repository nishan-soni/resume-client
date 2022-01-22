import '../../helpers/section.css'
import { useSelector} from 'react-redux'
import { addSkill, removeSkill } from '../../redux/actions/actions'
import store from '../../redux/store/store'
import Tag from './tag/tag'
import './Skills.css'
import { useState } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Skills = (props) => {
    const {setCanvasComponent} = props
    const skills = useSelector(state => state.skills)
    const [inputValue, setInputValue] = useState("")

    return (
        <div className='Section_div'>
            <div className="Section_title">
                    Skills
            </div>
            <div className="Section_subtitle">
                <h3>Include relevant skills.</h3>
            </div>
            <div className='Skills_div'>
                {skills.map((element) => {
                    return (
                        <div style = {{marginTop: '1%', marginRight: '0.5%', marginLeft: '0.5%'}}>
                            <Tag skillName = {element} removeAction = {() => {store.dispatch(removeSkill(element))}}/>
                        </div>
                    )
                })}
            </div>
            <div style = {{width: 'fit-content', margin: 'auto', marginTop : '1%'}}>
                <input
                    className='Skills_input'
                    value={inputValue}
                    placeholder='Skill'
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                    onKeyDown = {(e) => {
                        if(e.key === 'Enter') {
                            store.dispatch(addSkill(inputValue))
                            setInputValue("")  
                        }
                    }}
                 />
            </div>
            <div style = {{width: 'fit-content', margin: 'auto', marginTop : '1%'}}>
                <button className='add_button' onClick={() => {store.dispatch(addSkill(inputValue)); setInputValue("")}}>
                    Add Skill
                </button>
            </div>
            <div className='next_button_div'>
                    <button className='back_button' onClick={() => {setCanvasComponent("Projects")}}>
                        <ArrowForwardIcon style = {{fill : 'lightgrey'}} fontSize = 'large'/>
                    </button>
                </div>
        </div>
    )
}

export default Skills