export const signIn = (credentials)=>{
  return (dispatch, getState, {getFirebase})=>{
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(()=>{
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err)=>{
      dispatch({type: 'LOGIN_ERROR', err})
    })
  }
}

export const signOut = ()=>{
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(()=>{
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });  
  }
}

export const signUp = (new_user)=>{
  return (dispatch, getState, {getFirebase, getFirestore})=>{
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      new_user.email,
      new_user.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstname: new_user.firstname,
        lastname: new_user.lastname,
        initials: new_user.firstname[0] + new_user.lastname[0]
      });
    }).then(()=>{
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_FAILED', err});
    });
  }
}