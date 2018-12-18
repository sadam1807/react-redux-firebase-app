export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        //make asyn call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
           ...project,
           authorFirstname: profile.firstName,
           authorLastname: profile.lastName,
           authorId: authorId,
           createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
}