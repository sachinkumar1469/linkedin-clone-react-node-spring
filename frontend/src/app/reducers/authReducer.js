
// Local imports
import { LOGOUT,LOGIN_SUCCESS, authInitialState } from '../actions/authActions';

export function authReducer(state=authInitialState,action){
    console.log("Auth reducer called. Value of state is:",state);
    switch(action.type){
      case LOGIN_SUCCESS:
        localStorage.setItem('token',action.payload.token);
        return {...state,token:action.payload.token,user:action.payload.user,isAuthenticated:true}
      case LOGOUT:
        localStorage.removeItem('token');
        return {...state,token:null,user:null,isAuthenticated:false}
      default:
        return state;
    }
  }