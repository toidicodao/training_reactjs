import React, { Component } from 'react';
import { connect } from 'react-redux'

const pStyle = {
    fontSize: '15px',
    width: '300px'
  };
class NoteList extends Component {

    ShowNote(){
        return this.props.notes.map((value, index) => 
            <tr key={index}>
                <td style={{width: '50px'}}>{index + 1}</td>
                <td style={pStyle}>{value.name}</td>
                <td style={pStyle}>{value.age}</td>
                <td style={pStyle}>{value.status ? 'active': 'unActive'}</td>
                <td style={pStyle}>
                    <a>edit</a>
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

let NoteContainer = connect(mapStateToProps)(NoteList)
export default NoteContainer;