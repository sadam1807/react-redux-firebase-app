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

        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
         
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup succes');
            return{
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
        }    
        default:
            return state;   
     }
}

export default authReducer;