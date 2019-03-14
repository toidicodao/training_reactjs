
import {ADD_NOTE} from '../constants'
export default (state = {}, action) => {
    switch (action.type){
        case ADD_NOTE:
            return [
                ...state,
                {
                    id: 4,
                    name: 'kun4',
                    age: 10,
                    status: true,
                }
            ]
        default:
            return {}
    }
    return {}
}