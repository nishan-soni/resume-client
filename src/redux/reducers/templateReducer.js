import * as actionTypes from '../actions/actionTypes'

const initialState = {name: 'Professional', color : 'black'}

export default function templateReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
        case actionTypes.EDIT_SELECTED_TEMPLATE:
            return {...action.payload}
    }
}