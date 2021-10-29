import React,{useState} from 'react'
import fireDB from '../Firebase'
import "bootstrap/dist/css/bootstrap.min.css"
import Inputs from './Inputs/Inputs'
import ImageUpload from '../ImageUploader/ImageUpload'
import { Card,CardTitle,CardBody, CardText,Button} from 'reactstrap'
import {toast} from "react-toastify"
import { Link,useHistory} from 'react-router-dom'
import { useFormik } from 'formik'
import { TextField } from '@material-ui/core'

const SignUp = () => {
    const history=useHistory()

    // const [users, setUsers] = useState(initialState)

    // const{name,email,password,phone}=users
    const initialValues={
        name:'',
        email:'',
        password:'',
        phone:''
    }

    const formik=useFormik({
      initialValues:initialValues,
      onSubmit:values=>{
        console.log(values)
      if(!values.name || !values.email || !values.password || !values.phone){
          console.log()
          toast.error('Please fill the inputs first')
      }
      else{
        fireDB.child('users').push(values,(err)=>{
            if(err){
                toast.error(err)
            }
            else{
                toast.success("Details Submitted Successfully")
                // setUsers(initialState)
                history.push("/home")

            }
        })
      }

    
      },
      validate:values=>{
        let error={}
       let phoneInt=parseInt(values.phone)
       console.log(phoneInt)
if(!values.name){
 error.name="required"
}
if(!values.email){
 error.email="required"
}
if(!values.password){
  error.password="required"
}
else if(values.password.length<=4){
  error.password="password is too short"
}
if(!values.phone){
  error.phone="required"
}
else if(Number.isNaN(phoneInt)){

  error.phone="invalid format"
}
 return error
   }


    })


      
    return (
     <>

     <Card className="cardd">
            <CardTitle>
             <CardText>Sign Up</CardText>
                </CardTitle>
                <CardBody>
                <form action="" className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
                   <ImageUpload/>
                <TextField
       type="text"
     name="name"
    label="Enter Name"
    onBlur={formik.handleBlur}
    onChange={formik.handleChange}
    // handleChange={handleChange}
    value={formik.values.name} 

    />
    
    <div style={{color:"red"}}>
      {formik.errors.name&&formik.touched.name?formik.errors.name:null}
    </div>
     <br/>
     <TextField
       type="email"
     name="email"
    placeholder="Enter Email"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    // handleChange={handleChange}
    value={formik.values.email} 
   
    /> 
    <div style={{color:"red"}}>
      {formik.errors.email&&formik.touched.email?formik.errors.email:null}
    </div>
    <br/>
     <TextField
        type="password"
        name="password"
       placeholder="Enter Password"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
    //    handleChange={handleChange}
       value={formik.values.password}
     
     />
     <div style={{color:"red"}}>
      {formik.errors.password&&formik.touched.password?formik.errors.password:null}
    </div>
      <br/>

<TextField
       type="tel"
     name="phone"
    placeholder="Enter phone"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    // handleChange={handleChange}
    value={formik.values.phone} 

    />
    
    <div style={{color:"red"}}>
      {formik.errors.phone&&formik.touched.phone?formik.errors.phone:null}
    </div>
     <br/>
       <Button className="btnSecondary" type="submit" color="secondary">Sign Up</Button><br />
   <span>if you have already registered <Link to="/">login</Link> </span>
    </form>
        </CardBody>
        
            </Card>     
       
     </>
    )
}

export default SignUp
