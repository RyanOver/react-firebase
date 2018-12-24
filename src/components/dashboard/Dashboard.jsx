import React, { Component } from 'react';
import Notifications from './Notifications';
import NoteList from '../notes/NoteList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  state = {  }
  render() {
    //console.log(this.props) 
    const { notes, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    
    return ( 
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <NoteList notes={ notes } />
          </div>
          <div className="col s12 m5 offset-m1"><Notifications/></div>
        </div>
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(Dashboard)