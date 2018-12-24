export const addNote = (note)=>{
  return (dispatch, getState, {getFirebase, getFirestore})=>{
    // make async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('notes').add({
      ...note,
      authorFirstName: 'Drake',
      authorLastName: 'Lloyd',
      authorId: 12377,
      createdAt: new Date()
    }).then(()=> {
      dispatch({type: 'CREATE_NOTE', note});
    }).catch((err)=>{
      dispatch({type: 'CREATE_NOTE_ERROR', err});
    })
  }
}; 