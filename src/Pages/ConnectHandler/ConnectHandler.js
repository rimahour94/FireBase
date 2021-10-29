import { connect } from "react-redux";

const mapPropsToState=(state)=>{
    console.log(state,"stateings")
   return{
       users:state.users
   }
}

const mapPropsToDispatch=(dispatch)=>{
     return{
        fetchUserData:()=>dispatch(fetchUserData())
     }
}

export default connect(mapPropsToState,mapPropsToDispatch)