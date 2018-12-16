export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        //make asyn call
        const firestore = getFirestore();
        firestore.collection('projects').add({
           ...project,
           authorFirst: 'Net',
           authorLastname: 'Ninja',
           authorId: 12345,
           createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
}