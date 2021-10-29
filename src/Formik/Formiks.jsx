import { useFormik } from "formik";

function Formiks(){
    let initialValues={
            name:'',
            email:'',
            password:'',
            phone:''
        
    }

    const onSubmit=(values)=>{
   
          console.log(values)
    }

    const validate=(values)=>{
          let error={}
          if(!values.name){
              error.name="Required"
          }
          if(!values.email){
              error.email="Required"
          }
          if(!values.password){
              error.password="Required"
          }
          else if(values.password.length<4){
            error.password="Password is too short"
          }
          if(!values.phone){
              error.phone="Required"
          }
          return error;
    }
    const formik=useFormik({
        initialValues:initialValues,
        onSubmit:onSubmit,
        validate:validate

    })

return(
    
    <form  onSubmit={formik.handleSubmit}>
          <input type="text" placeholder="Enter your name" onChange={formik.handleChange} name="name"
          value={formik.values.name} onBlur={formik.handleBlur} />
          <div>
              {formik.errors.name&&formik.touched.name?formik.errors.name:null}
          </div>
          <input type="email" placeholder="Enter your email" onChange={formik.handleChange} name="email"
          value={formik.values.email} onBlur={formik.handleBlur} />
          <div>
              {formik.errors.email&&formik.touched.email?formik.errors.email:null}
          </div>
          <input type="password" placeholder="Enter your password" onChange={formik.handleChange} 
          value={formik.values.password} name="password" onBlur={formik.handleBlur} />
          <div>
              {formik.errors.password&&formik.touched.password?formik.errors.password:null}
          </div>
          <input type="tel" placeholder="Enter phone" onChange={formik.handleChange} name="phone"
          value={formik.values.phone} onBlur={formik.handleBlur} />
          <div>
              {formik.errors.name&&formik.touched.name?formik.errors.name:null}
          </div>
          <button type="submit">Register</button>
    </form>
)
}

export default Formiks