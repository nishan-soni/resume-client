import { EDIT_PERSONAL, EDIT_SELECTED_TEMPLATE, ADD_SKILL, REMOVE_SKILL } from "./actionTypes";

export function addItem(payload, actionType) {
    return {
        type: actionType, 
        payload
    };
}

export function editItem(payload, actionType) {
    return {
        type: actionType, 
        payload
    };
}

export function removeItem(payload, actionType) {
    return {
        type: actionType,
        payload
    }
}

export function editPersonal(payload) {
    return {
        type: EDIT_PERSONAL,
        payload
    }
}

export function editSelectedTemplate(payload) {
    return {
        type: EDIT_SELECTED_TEMPLATE,
        payload
    }
}

export function addSkill(payload) {
    return {
        type: ADD_SKILL,
        payload
    }
}

export function removeSkill(payload) {
    return {
        type: REMOVE_SKILL,
        payload
    }
}
