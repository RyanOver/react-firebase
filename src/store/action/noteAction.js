import { database } from "firebase";
import firebase from '../../config/firebase_config';

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

export const removeNote = (id)=>{
  return (dispatch)=>{

    //const firestore = getFirestore();
    console.log(id['id']);
    id = id['id']
    firebase.firestore().collection('notes').doc(id).delete()
    .then(()=>{
      dispatch({type: 'REMOVE_NOTE', id});
      console.log('note removed!!');
    }).catch((err)=>{
      //dispatch({type: 'REMOVE_NOTE_ERROR', err});
      console.log('note NOT removed!!');
    });

  }
};