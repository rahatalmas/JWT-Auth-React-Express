import {useRef,useState,useEffect,useContext} from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Context/UserAuthContext';

const Register = () => {

    const firstInput = useRef();
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {setAuth} = useContext(AuthContext);

    useEffect(()=>{
        firstInput.current.focus();
    },[]);

    const RegisterFormSubmit = async (e) =>{
        e.preventDefault();
        let user = {
            username
            ,email
            ,password
        }
        let response = await fetch(
            "http://localhost:5000/user/register",
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
        //console.log(userData)
        //console.log(user);
        setUserName('');
        setEmail('');
        setPassword('');
    }
    
    return(
        <>
        <section>
            <div className='registerAndlogin-form' >
                <h3 style={{textAlign:"center",color:"darkblue",fontSize:"20px"}}>Signup & Explore</h3>
                <form onSubmit={RegisterFormSubmit}>
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
                    <label htmlFor="email">Enter an Email: </label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder='enter an email'
                        onChange={(e)=>setEmail(e.target.value)}
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
                    <button className='form-button' type='submit' >SignUp</button>
                </form>
                <p style={{fontSize:"20px",textAlign:"center"}}>Already Have Account?
                    <span style={{marginLeft:"5px",fontSize:"25px",cursor:"pointer"}}>
                        <NavLink to="/login">Login</NavLink>
                    </span>
                </p>
            </div>
        </section>
        </>
    );
}

export default Register;