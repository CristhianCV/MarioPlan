import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_ERROR,
} from "../types/projectTypes";

export const createProjectRequest = () => {
  return {
    type: CREATE_PROJECT_REQUEST,
  };
};

export const createProjectSuccess = () => {
  return {
    type: CREATE_PROJECT_SUCCESS,
  };
};

export const createProjectFailure = (error) => {
  return {
    type: CREATE_PROJECT_ERROR,
    payload: error,
  };
};

export const deleteProjectRequest = () => {
  return {
    type: DELETE_PROJECT_REQUEST,
  };
};

export const deleteProjectSuccess = () => {
  return {
    type: DELETE_PROJECT_SUCCESS,
  };
};

export const deleteProjectFailure = (error) => {
  return {
    type: DELETE_PROJECT_ERROR,
    payload: error,
  };
};

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    dispatch(createProjectRequest());
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then((response) => {
        dispatch(createProjectSuccess());
      })
      .catch((error) => {
        dispatch(createProjectFailure(error.message));
      });
  };
};

export const deleteProject = (projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    dispatch(deleteProjectRequest());
    firestore
      .collection("projects")
      .doc(projectId)
      .delete()
      .then((response) => {
        dispatch(deleteProjectSuccess());
      })
      .catch((error) => {
        dispatch(deleteProjectFailure(error.message));
      });
  };
};
