import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux'; 
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const NoteDetails = (props) => {
  const { note, auth } = props;

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
          <div>{moment(note.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
    )
  } else {
  return (
    <div className="container center">
      <p>Loading Notes...</p>
    </div>
  )
}
}

const mapStateToProps = (state, ownProps)=>{
  const id = ownProps.match.params.id;
  const notes = state.firestore.data.notes;
  const note = notes ? notes[id] : null;
  return{
    note: note,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(NoteDetails)
