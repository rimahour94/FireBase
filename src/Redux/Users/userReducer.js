
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userActionTypes";

const userState={
    loading:false,
    users:[],
    error:''
}
export const userReducer=(state=userState,action)=>{
    console.log(userState,"userState")
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return{
                
                loading:true
                }
          
        case FETCH_USER_SUCCESS:
            return{
                
                loading:false,
                users:action.payload,
                error:''
            }
        
        case FETCH_USER_FAILURE:
            return{
                
                loading:false,
                users:[],
                error:action.payload
                
            }
    
        default:
            return state
    }
}
