import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userActionTypes"
import fireDB from "../../Firebase"
export const userFetchRequest=()=>{
    return{
         type:FETCH_USER_REQUEST
    }
}

export const userFetchSucces=users=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const userFetchFailure=errors=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:errors
    }
}


export const fetchUserData=()=>{

     return (dispatch)=>{
         dispatch(userFetchRequest)
        fireDB.child('users').on('value',async (snapshot)=>{
           try{
               let data =await {...snapshot.val()}
               let dataarr=Object.values(data)
               dispatch(userFetchSucces(dataarr))
           }
              
        catch(error){
                dispatch(userFetchFailure('Error Accured'))
            }
        })
     }
}