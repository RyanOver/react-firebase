import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux'; 
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { removeNote } from '../../store/action/noteAction';

const NoteDetails = (props) => {
  const { note, auth, id, dispatch } = props;

    if(!auth.uid) return <Redirect to='/signin' />

  if(note){
    return(
    <div className="container section note-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ note.title }</span>
          <p>{ note.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { note.authorFirstName } { note.authorLastName }</div>
          <div>{moment(note.createdAt.toDate()).calendar()}
          <button onClick={removeNote({id})} 
          className="btn-flat right red-text">Remove</button></div>
        </div>
      </div>
    </div>
    )
  } else {
  return (
    <Redirect to='/' />
  )
}
}

const mapStateToProps = (state, ownProps)=>{
  const id = ownProps.match.params.id;
  const notes = state.firestore.data.notes;
  const note = notes ? notes[id] : null;
  return{
    note: note,
    auth: state.firebase.auth,
    id: id
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeNote: (id) => dispatch(removeNote(id))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(NoteDetails)
