

import {SELECT_NOTE} from '../constants'
export default (state = {}, action) => {
    switch (action.type){
        case SELECT_NOTE:
            return action.data_load
        default:
            return {}
    }
    return {}
}