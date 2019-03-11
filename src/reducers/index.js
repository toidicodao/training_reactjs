import NoteReducer from './note-reducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers(
    {
        notes: NoteReducer
    }
)

export default allReducers