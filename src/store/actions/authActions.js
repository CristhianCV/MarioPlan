import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
} from "../types/authTypes";

export const signInRequest = () => {
  return {
    type: SIGNIN_REQUEST,
  };
};

export const signInSuccess = () => {
  return {
    type: SIGNIN_SUCCESS,
  };
};

export const signInFailure = (error) => {
  return {
    type: SIGNIN_ERROR,
    payload: error,
  };
};

export const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signUpFailure = (error) => {
  return {
    type: SIGNUP_ERROR,
    payload: error,
  };
};

export const signOutRequest = () => {
  return {
    type: SIGNOUT_REQUEST,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: SIGNOUT_ERROR,
    payload: error,
  };
};

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(signInRequest());
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((response) => {
        return dispatch(signInSuccess());
      })
      .catch((error) => {
        dispatch(signInFailure(error.message));
        return Promise.reject(error.message);
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch(signUpRequest());
    return firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        return firestore
          .collection("user")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then((response) => {
        return dispatch(signUpSuccess());
      })
      .catch((error) => {
        dispatch(signUpFailure(error.message));
        return Promise.reject(error.message);
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(signOutRequest());
    firebase
      .auth()
      .signOut()
      .then((response) => {
        dispatch(signOutSuccess());
      })
      .catch((error) => {
        dispatch(signOutFailure(error.message));
      });
  };
};
