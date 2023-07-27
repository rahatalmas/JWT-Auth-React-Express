import { useContext } from 'react';
import './App.css';
import Register from './Components/Register';
import Home from './Components/Home';
import AuthContext from './Context/UserAuthContext';
function App() {
  
  const {auth} = useContext(AuthContext);

  return (
    <div className="App">
      {
        auth.accessToken == null?<Register/>:<Home/>
      }
    </div>
  );
}

export default App;
