import NoteReducer from './note-reducer'
import {combineReducers} from 'redux'
import ActiveNote from './active-note-reducer'
const allReducers = combineReducers(
    {
        notes: NoteReducer,
        activeNote: ActiveNote,
    }
)

export default allReducers