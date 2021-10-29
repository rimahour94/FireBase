import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuth } from '../App'

const PrivateRoute = ({children}) => {
console.log(children)
     let isAuthenticated= isAuth()
    return (
       <Route
        render={()=>(
            isAuthenticated?
            (
              children
            ):
            <Redirect 
            to={{
                pathname:"/"
            }}/>
        )}
       />
    )
}

export default PrivateRoute
