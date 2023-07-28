import { useContext, useEffect } from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Nav from './Navigations/Nav';
import Home from './Components/Home';
import AuthContext from './Context/UserAuthContext';

function App() {
  
  const {auth,setAuth} = useContext(AuthContext);

  useEffect(()=>{
     let username = localStorage.getItem('username');
     let accessToken = localStorage.getItem('userToken');
     setAuth({username,accessToken});
     console.log('hello app')
  },[])

  const router = createBrowserRouter([
    {
      path:"/",
      element: !auth.accessToken?<Register/>:<Nav/>,
      errorElement:<h1>Page Not found</h1>,
      children:[
        {
          index:true,
          element:<Home/>
        }
      ]
    },
    {
      path:"/login",
      element: !auth.accessToken?<Login/>:<Nav/>,
    }
  ]);

  return ( 
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
