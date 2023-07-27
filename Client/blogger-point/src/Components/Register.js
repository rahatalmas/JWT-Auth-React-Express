import {useRef,useState,useEffect} from 'react';

const Register = () => {

    const firstInput = useRef();
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    /*(useEffect(()=>{
        firstInput.current.focus();
    })*/

    const RegisterFormSubmit = (e) =>{
        e.preventDefault();
        let user = {
            username
            ,email
            ,password
        }
        console.log(user);
        setUserName('');
        setEmail('');
        setPassword('');
    }
    
    return(
        <>
        <section>
            <h1 style={{color:"black",fontSize:"50px"}}>Welcome, <span style={{color:"purple",fontSize:"45px"}}>Curious Mind</span></h1>
            <div className='registerAndlogin-form' style={{width:"50%",margin:"auto"}}>
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
                    <button type='submit' >Register</button>
                </form>
            </div>
        </section>
        </>
    );
}

export default Register;