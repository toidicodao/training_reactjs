import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { AddNote } from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class NoteAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: 18
        }
    }

    handleChange = event => {
        event.preventDefault()
        const target = event.target;
        let name = target.name
        this.setState({
            [name]: target.value
        });
    }

    render() {
        const { name, age } = this.state
        return (
            <div>
                <Input placeholder="Name" name="name" style={{ width: 200 }} defaultValue={name} onChange={
                    this.handleChange
                } />
                <Input placeholder="Age" name="age" style={{ width: 200 }} defaultValue={age} onChange={
                    this.handleChange
                } />
                <Button type="primary" onClick={() => {
                    this.props.AddNote(this.state)
                }}>Add note</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        AddNote: AddNote,
    }, dispatch)
}

let NoteContainer = connect('', mapDispatchToProps)(NoteAdd)
export default NoteContainer;