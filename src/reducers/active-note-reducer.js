
import {SELECT_NOTE, DELETE_NOTE, ADD_NOTE} from '../constants'

export default (state = {}, action) => {
    switch (action.type){
        case SELECT_NOTE:
            return action.data_load
        case DELETE_NOTE:
            var result = confirm("Want to delete?");
            if (result) {
                return []
            }
        case ADD_NOTE:
            const {name, age} = action.data_load
            return [
                ...state,
                {
                    id: 4,
                    name,
                    age
                }
            ]
        default:
            return {}
    }
    return {}
}