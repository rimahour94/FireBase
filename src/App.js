import Home from './Pages/Home';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import "./Styles/Login.css"
import Login from './Pages/Login';
import {Provider} from 'react-redux' 
import store from './Redux/Store';
import PrivateRoute from './Routing/PrivateRoute';
import "./Styles/Menu.css"
import ImageUpload from './ImageUploader/ImageUpload';
toast.configure()


export const isAuth=()=>{
let isAuthenticated=localStorage.getItem('user')?true:false
   return isAuthenticated
}

function App() {


  return (
    <>
     <BrowserRouter>
    <Switch>
     <Route path="/" exact component={Login}/>
      <Route path="/signup" exact component={SignUp}/>
      <Provider store={store}>
      <PrivateRoute path="/home">
            <Home/>
        </PrivateRoute>
     </Provider>
 </Switch>
  </BrowserRouter>
  {/* <ImageUpload/> */}
    </>

  );
}

export default App;
