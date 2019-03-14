
import {SELECT_NOTE, DELETE_NOTE, ADD_NOTE} from '../constants'

export const SelectNote = note => {
    return {
        type: SELECT_NOTE,
        data_load: note
    }
}

export const AddNote = note => {
    return {
        type: ADD_NOTE,
        data_load: note
    }
}

export const DeleteNote = note => {
    return {
        type: DELETE_NOTE,
        data_load: note
    }
}