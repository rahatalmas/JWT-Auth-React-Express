import {useRef,useState,useEffect,useContext} from 'react';
import AuthContext from '../Context/UserAuthContext';

const Login = () => {

    const firstInput = useRef();
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const {setAuth} = useContext(AuthContext);

    useEffect(()=>{
        firstInput.current.focus();
    },[]);

    const LoginFormSubmit = async (e) =>{
        e.preventDefault();
        let user = {
            username
            ,password
        }
        let response = await fetch(
            "http://localhost:5000/user/login",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }
        )
        let userData = await response.json();
        setAuth(userData);
        setUserName('');
        setPassword('');
    }
    
    return(
        <>
        <section>
            <div className='registerAndlogin-form' >
                <h3 style={{textAlign:"center",color:"darkblue",fontSize:"20px"}}>WelCome Back</h3>
                <form onSubmit={LoginFormSubmit}>
                    <label htmlFor="username">Enter Your Name: </label>
                    <input ref = {firstInput}
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder='enter your name'
                        onChange={(e)=>setUserName(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Enter a Password: </label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder='enter a password'
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    <button className='form-button' type='submit' >Login</button>
                </form>
            </div>
        </section>
        </>
    );
}

export default Login;