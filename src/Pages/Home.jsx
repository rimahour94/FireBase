import React,{useState,useEffect} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core"
import Menu from './Menu';
import { Loader } from 'rsuite'
import {   Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Button, Row,Col} from 'reactstrap';
import { BounceLoader,BarLoader,BeatLoader } from 'react-spinners';
// import 'rsuite/dist/rsuite.min.css'
// import 'rsuite/dist/styles/rsuite-default.css';
import { fetchUserData } from '../Redux';
import { connect } from 'react-redux';
import StyleTableCell from '../CustomStyling/StyleTableCell';
import "../Styles/Home.css"

const Home = (props) => {

const[date,setDate]=useState(new Date().toLocaleString())
const [isLoading, setisLoading] = useState(true)


useEffect(() => {

        try {
            props.fetchUserData()
            setTimeout(() => {
                setisLoading(!isLoading)
            }, 2000);
           
        
        } catch (error) {
            console.log(error)
        }
       
    
    },[])


    return (
        <div> 
<Menu/>
            {
            
            <Row>
                <Col sm="4">
            <Card>
              <CardImg top width="100%"  src="/images/1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary" >Add</Button>
                
              </CardBody>
            </Card>
            </Col>
            <Col sm="4">
            <Card>
              <CardImg top width="100%" src="/images/2.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">Add</Button>
              </CardBody>
            </Card>
            </Col>
            <Col sm="4">
            <Card>
              <CardImg top width="100%" src="/images/3.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">Add</Button>
              </CardBody>
            </Card>
            </Col>
            <Col sm="4">
            <Card>
              <CardImg top width="100%" src="/images/4.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">Add</Button>
              </CardBody>
            </Card>
            </Col>
            <Col sm="4">
            <Card>
              <CardImg top width="100%" src="/images/5.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">Add</Button>
              </CardBody>
            </Card>
            </Col>
            <Col sm="4">
            <Card>
              <CardImg top width="100%" src="/images/6.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">Add</Button>
              </CardBody>
            </Card>
            </Col>
          </Row> 

    
//            <Table>
//                 <TableHead>
//                     <StyleTableCell>S/N</StyleTableCell>
//                     <StyleTableCell>Name</StyleTableCell>
//                     <StyleTableCell>Email</StyleTableCell>
//                     <StyleTableCell>Password</StyleTableCell>
//                     <StyleTableCell>Phone</StyleTableCell>
//                     <StyleTableCell>Date</StyleTableCell>
//                 </TableHead>
                
//                 <TableBody>
//                     {
//                   isLoading?  <BeatLoader color="black"  loading/>:
//                     props.users.map((u,id)=>{
                          
//                             return(
//                                 <TableRow key={id}>
//                                 <TableCell>{id+1}</TableCell>
//                                 <TableCell>{u.name}</TableCell>
//                                 <TableCell>{u.email}</TableCell>
//                                 <TableCell>{u.password}</TableCell>
//                                 <TableCell>{u.phone}</TableCell>
//                                 <TableCell>{date}</TableCell>
//                                 </TableRow>
//                             )
//                         })
// }
//                 </TableBody>
  
//            </Table> 
         
  

            }
           

    </div>  
    
    )}

const mapPropsToState=(state)=>{
    console.log(state,"stateings")
   return{
       users:state.users,
  
   }
}

const mapPropsToDispatch=(dispatch)=>{
     return{
        fetchUserData:()=>dispatch(fetchUserData())
     }
}

export default connect(mapPropsToState,mapPropsToDispatch) (Home)
