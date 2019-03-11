import React, { Component } from 'react';
import RowNote from '../../containers/note-list'


class ListNote extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default ListNote;