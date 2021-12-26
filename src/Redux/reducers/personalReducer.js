import * as actionTypes from '../actions/actionTypes'

const initialState = {fname: '', lname: '', phone: '', email: ''}

export default function personalReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case actionTypes.EDIT_PERSONAL:
            return action.payload
    }
}
