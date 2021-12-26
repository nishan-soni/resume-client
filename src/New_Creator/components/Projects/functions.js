import store from '../../../Redux/store/store'
import { addItem as create, editItem as edit, removeItem as remove} from '../../../Redux/actions/actions'
import * as actionTypes from '../../../Redux/actions/actionTypes'

export const addItem = () => {
    store.dispatch(create({
        id : Date.now(),
        title : "Project",
        subtitle : "Subtitle",
        start : null,
        end : null,
        notes : "",
        currentChecked : false
    }, actionTypes.ADD_PROJECT))
    console.log(store.getState())
}

export const removeItem = (payload) => {
    store.dispatch(remove({
        ...payload
    }, actionTypes.REMOVE_PROJECT))
    console.log(store.getState())
}

export const editItem = (payload) => {
    store.dispatch(edit({
        ...payload
    }, actionTypes.EDIT_PROJECT))
    console.log(store.getState())
}