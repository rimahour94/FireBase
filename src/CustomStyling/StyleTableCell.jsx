import React from 'react'
import { withStyles } from '@material-ui/styles';
import { TableCell } from '@material-ui/core'
 const StyleTableCell= withStyles(()=>{
        return({
            head:{
                backgroundColor:"black",
                color:"white",

            }
        })
    })(TableCell)


 
export default StyleTableCell
