const initState = {
    authError: null
}

const authReducer = (state = initState, action ) => {
     switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'login failed'
            }

        case 'LOGIN_SUCSSES':
            console.log('login success');
            return {
                ...state,
                authError:null
            }
         
        case 'LOGOUT_SUCSSES':
            console.log('logout success');
            return {
                ...state,
                authError:null
            }    

        default:
         return state;   
     }
}

export default authReducer;