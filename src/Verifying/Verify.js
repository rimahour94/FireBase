import React from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react/cjs/react.development'



const Verify = (arr,userDetails) => {
const userData= arr.filter((user)=>user.email===userDetails.email && user.password===userDetails.password)
 
     return userData
}

export default Verify
