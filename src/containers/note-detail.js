import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteDetail extends Component {
  render() {
    return (
      <div>
          {this.props.activeNote.name}
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        activeNote: state.activeNote
    }
}

let NoteDetailContainer = connect(mapStateToProps)(NoteDetail)
export default NoteDetailContainer;