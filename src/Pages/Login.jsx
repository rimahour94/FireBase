import React,{useEffect,useState} from 'react'
import { toast } from 'react-toastify'
import { Card,CardTitle,CardBody, CardText,Button} from 'reactstrap'
import fireDB from "../Firebase"
import Inputs from './Inputs/Inputs'
import { Link,useHistory} from 'react-router-dom'
import Verify from '../Verifying/Verify'
import { TextField } from '@material-ui/core'
import { useFormik } from "formik";
import { isAuth } from '../App'



const Login = () => {

    const [user, setUser] = useState([])
    const[userData,setUserData]=useState({})
    const[userDetails,setUserDetails]=useState({})
    const history=useHistory()
      const formik=useFormik({
          initialValues:{email:'',password:''},
          onSubmit:async(values)=>{
         if(values.email!=='' && values.password!=='')
            {
                try{
            const userData=  await Verify(user,values)
            if(userData.length===0){
                setUserDetails({email:'',password:''})
                toast.error("Incorrect Email Password")
                
              
            }
            else{
                toast.success("Login Success")
                localStorage.setItem('user',JSON.stringify(userData[0]))
                isAuth()
                
                setUserData(userData[0])
                setUserDetails({email:'',password:''})
            
                history.push("/home")
            }
             
           }
          
          catch(error){
                 toast.error("un expected error")
                
            }
        }
        else{
            toast.warn("Please fill The Details")
        }
          
       
    
        },
          validate:values=>{
               let error={}
              
    if(!values.email){
        error.email="required"
    }
    if(!values.password){
        error.password="required"
    }
    else if(values.password.length<=4){
         error.password="password is too short"
    }
        return error
          }
      })
  

   
    


    useEffect(() => {
        fireDB.child('users').on('value',(snapshot)=>{
            if(snapshot.val()!==null){
               let data ={...snapshot.val()}
               let dataarr=Object.values(data)
               setUser(dataarr)
            }else{
                setUser([])
            }
        })
        return ()=>{
            setUser([])
        }
    }, [])

  

    return (
        <>
         <Card className="cardd">
            <CardTitle>
             <CardText>Login Page</CardText>
                </CardTitle>
                <CardBody>
                <form action="" onSubmit={formik.handleSubmit}>
     <TextField
    variant="standard"
    label="Enter Email"
    type="email"
    name="email"  
    onChange={formik.handleChange}
    onBlur={formik.handleBlur} 
    value={formik.values.email} 

    />
    <div  style={{color:"red"}}>
        {formik.errors.email&&formik.touched.email?formik.errors.email:null}
    </div>
    <br/>
     <TextField 
       variant="standard"
        type="password"
        name="password"
       label="Enter Password"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.password}
      />
        <div style={{color:"red"}}>
        {formik.errors.password&&formik.touched.password?formik.errors.password:null}
    </div>
      <br/>
     <Button className='btnSecondary' type="submit" color="secondary">Login</Button> <br />
                        <span>if you haven't registered <Link to="/signup">SignUp</Link></span>
       </form>
        </CardBody>
            </Card>   

             
        </>
    )
}

export default Login
