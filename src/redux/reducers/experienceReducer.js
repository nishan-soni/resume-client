import * as actionTypes from '../actions/actionTypes'

const initialState = []

export default function experienceReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
        case actionTypes.ADD_EXPERIENCE:
            return [...state,action.payload]

        case actionTypes.EDIT_EXPERIENCE:
            let newState = [...state]
            const index = newState.findIndex(element => element.id === action.payload.id)
            newState[index] = action.payload
            return newState
        
        case actionTypes.REMOVE_EXPERIENCE:
            return state.filter(element => element.id !== action.payload.id)
    }
}