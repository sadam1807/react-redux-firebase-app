export const createProject = (project) =>{
    return (dispatch, getState) => {
        //make asyn call
        dispatch({ type: 'CREATE_PROJECT', project });
    }
}