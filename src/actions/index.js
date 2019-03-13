
import {SELECT_NOTE} from '../constants'

export const SelectNote = note => {
    return {
        type: SELECT_NOTE,
        data_load: note
    }
}