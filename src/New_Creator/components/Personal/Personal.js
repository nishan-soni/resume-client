import './Personal.css'
import '../../section.css'
import store from '../../../Redux/store/store'
import { useSelector} from 'react-redux'
import {editPersonal} from '../../../Redux/actions/actions'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Personal = (props) => {
    const {setCanvasComponent} = props
    const personal = useSelector(state => state.personal)
    const {fname,lname,phone,email} = personal
    const data = {fname,lname,phone,email}
    async function editData(key,info) {
        data[key] = info
    }
    return (
        <div className="personal_container">
            <div className="personal_title">
                    Personal Details
            </div>
            <div className='personal_items'>
                <div className = "names_div">
                    <input className='personal_input' value = {fname} type = "text" placeholder='First Name' onChange={async e => {
                        await editData("fname", e.target.value)
                        store.dispatch(editPersonal({
                            ...data
                        }))
                    }}/>
                    <input className='personal_input' value = {lname}  type = "text" placeholder='Last Name' onChange={async e => {
                        await editData("lname", e.target.value)
                        store.dispatch(editPersonal({
                            ...data
                        }))
                    }}/>
                </div>
                <div className = "names_div">
                    <input className='personal_input' value = {email} type = "text" placeholder='Email' onChange={async e => {
                        await editData("email", e.target.value)
                        store.dispatch(editPersonal({
                            ...data
                        }))
                    }}/>
                    <input className='personal_input' value = {phone}  type = "text" placeholder='Phone' onChange={async e => {
                        await editData("phone", e.target.value)
                        store.dispatch(editPersonal({
                            ...data
                        }))
                    }}/>
                </div>
            </div>
            <div className='next_button_div' style = {{ width: 'fit-content', margin:'auto'}}>
                <button className='back_button' onClick={() => {setCanvasComponent("Education")}}>
                    <ArrowForwardIcon style = {{fill : 'lightgrey'}} fontSize = 'large'/>
                </button>
            </div>
        </div>
    )
}

export default Personal;