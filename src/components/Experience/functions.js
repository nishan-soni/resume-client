import store from '../../redux/store/store'
import { addItem as create, editItem as edit, removeItem as remove} from '../../redux/actions/actions'
import * as actionTypes from '../../redux/actions/actionTypes'

export const addItem = () => {
    store.dispatch(create({
        id : Date.now(),
        title : "Location",
        subtitle : "Job",
        start : null,
        end : null,
        notes : "",
        currentChecked : false
    }, actionTypes.ADD_EXPERIENCE))
    console.log(store.getState())
}

export const removeItem = (payload) => {
    store.dispatch(remove({
        ...payload
    }, actionTypes.REMOVE_EXPERIENCE))
    console.log(store.getState())
}

export const editItem = (payload) => {
    store.dispatch(edit({
        ...payload
    }, actionTypes.EDIT_EXPERIENCE))
    console.log(store.getState())
}