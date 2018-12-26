export const addNote = (note)=>{
  return (dispatch, getState, {getFirebase, getFirestore})=>{
    // make async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('notes').add({
      ...note,
      authorFirstName: profile.firstname,
      authorLastName: profile.lastname,
      authorId: authorId,
      createdAt: new Date()
    }).then(()=> {
      dispatch({type: 'CREATE_NOTE', note});
    }).catch((err)=>{
      dispatch({type: 'CREATE_NOTE_ERROR', err});
    })
  }
}; 