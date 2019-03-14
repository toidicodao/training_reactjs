import React, { Component } from 'react';
import RowNote from '../../containers/note-list'
import NoteDetail from '../../containers/note-detail'
import NoteAdd from '../../containers/note-add'

class ListNote extends Component {
    render() {
        return (
            <div>
                <NoteAdd />
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <RowNote />
                </table>
                -----------------
                <NoteDetail />
            </div>
        );
    }
}

export default ListNote;