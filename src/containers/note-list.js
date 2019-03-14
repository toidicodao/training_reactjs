import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {SelectNote, DeleteNote} from '../actions/index'

const pStyle = {
    fontSize: '15px',
    width: '300px'
  };
class NoteList extends Component {
    ShowNote(){
        return this.props.notes.map((value, index) => 
            <tr key={index}>
                <td style={{width: '50px'}}>{index + 1}</td>
                <td onClick={
                    () => {
                        this.props.SelectNote(value)
                    }
                } 
                    style={pStyle}>{value.name}
                </td>
                <td style={pStyle}>{value.age}</td>
                <td style={pStyle}>{value.status ? 'active': 'unActive'}</td>
                <td style={pStyle}>
                    <a onClick={
                        () => {
                            this.props.DeleteNote(value)
                        }
                    }>Delete</a>
                </td>
            </tr>
        );
    }
    render() {
        return (
           <tbody>
               {this.ShowNote()}
           </tbody>
        );
    }
}

function mapStateToProps(state){
    return {
        notes: state.notes
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        SelectNote: SelectNote,
        DeleteNote: DeleteNote
    }, dispatch)
}
let NoteContainer = connect(mapStateToProps, mapDispatchToProps)(NoteList)
export default NoteContainer;