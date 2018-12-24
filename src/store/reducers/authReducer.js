const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('LOGIN SUCCESS');
      return{
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('sign up success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_FAILED':
      console.log('signup failed');
      return {
        ...state,
        authError: action.err.message
      }
    default:
    return state;
  }
}

export default authReducer;