import store from '../../redux/store/store'
import { addItem as create, editItem as edit, removeItem as remove} from '../../redux/actions/actions'
import * as actionTypes from '../../redux/actions/actionTypes'

export const createEducation = () => {
    store.dispatch(create({
        id : Date.now(),
        title : "School",
        subtitle : "Degree",
        start : null,
        end : null,
        notes : "",
        currentChecked : false
    }, actionTypes.ADD_EDUCATION))
    console.log(store.getState())
}

export const removeEducation = (payload) => {
    store.dispatch(remove({
        ...payload
    }, actionTypes.REMOVE_EDUCATION))
}

export const editEducation = (payload) => {
    store.dispatch(edit({
        ...payload
    }, actionTypes.EDIT_EDUCATION))
    console.log(store.getState())
}