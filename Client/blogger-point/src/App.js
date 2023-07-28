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
    console.log('app component')
  },[])

  const router = createBrowserRouter([
    {
      path:"/",
      element: auth.accessToken == null?<Register/>:<Nav/>,
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
      element: auth.accessToken == null?<Login/>:<Nav/>,
    }
  ]);

  return ( 
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
