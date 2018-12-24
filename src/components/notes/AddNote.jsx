import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../store/action/noteAction';
import { Redirect } from 'react-router-dom';

class AddNote extends Component {
  
  state = {
    title: '',
    content: ''
  }
  
  handleChange = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    //console.log(this.state)
    this.props.addNote(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a new Note</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Note Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create Note</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addNote: (note) => dispatch(addNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)