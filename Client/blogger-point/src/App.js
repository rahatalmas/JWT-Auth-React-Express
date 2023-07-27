import { useContext } from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Home from './Components/Home';
import AuthContext from './Context/UserAuthContext';

function App() {
  
  const {auth} = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path:"/",
      element: auth.accessToken == null?<Register/>:<Home/>
    }
  ]);

  return ( 
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
