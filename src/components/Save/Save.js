import {saveResume} from './functions.js'
import './Save.css'
import Preview from '../Preview/Preview.js'
import { useSelector } from 'react-redux'
import store from '../../redux/store/store'
import { editSelectedTemplate } from '../../redux/actions/actions.js'
import '../../helpers/buttons.css'
import { useState } from 'react'
import TemplateSelect from '../TemplateSelect/TemplateSelect.js'
const Save = () => {
    const template = useSelector(state => state.template)
    const updateTemplate = (name, color) => {
        store.dispatch(editSelectedTemplate({
            name,
            color
        }))
    }

    const [templateSelect, setTemplateSelect] = useState(false)

    return (
        <div className='Save_container'>
            <div className='Save_title'>
                Save Resume
            </div>
            <div className='export_items'>
                <Preview template = {template} updateTemplate = {updateTemplate} setTemplateSelect = {setTemplateSelect}/>
                <button className='add_button' onClick = {() => {saveResume(template.name, template.color)}}>
                    Download
                </button>
                {templateSelect === true ? <TemplateSelect updateTemplate = {updateTemplate} setTemplateSelect = {setTemplateSelect}/> : null}
            </div>
        </div>
    )
}

export default Save;