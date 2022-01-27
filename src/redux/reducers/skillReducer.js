import * as actionTypes from '../actions/actionTypes'

const initialState = []

export default function skillReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
        case actionTypes.ADD_SKILL:
            const duplicate = state.find(skill => skill === action.payload)
            if (duplicate === undefined) {
                return [...state, action.payload]
            }
            else {
                return state
            }
        case actionTypes.REMOVE_SKILL:
            return state.filter(skill => skill !== action.payload)
    }
}