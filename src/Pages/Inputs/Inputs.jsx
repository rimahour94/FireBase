import { TextField } from '@material-ui/core'
import React from 'react'

const Inputs = (props) => {


 

    const handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value

         

        props.setUserDetails({...props.userDetails,[name]:value})

    }



    return (
        <div>
              <TextField
              variant="standard"
              label={props.placeholder} 
              type={props.type}
              name={props.name}  
              onChange={handleChange} 
              value={props.value} /> <br /> <br />
        </div>
    )
}

export default Inputs
