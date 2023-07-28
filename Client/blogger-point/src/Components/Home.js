import { useContext,useEffect, useState} from "react";
import AuthContext from "../Context/UserAuthContext";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Home = () =>{
    const {auth,setAuth} = useContext(AuthContext);
    const [blogs,setBlogs] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:5000/api/blogs",
            {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${auth.accessToken}`
                },
                //withCredentials:true
            }
          ).then(response=>{
            console.log(response.data);
            setBlogs(response.data);
          }).catch(err=>{
            console.log(err.response.status)
            if(err.response.status === 401){
                setAuth({});
                localStorage.clear();
                navigate("/login");
            }
          })
    },[])

    return(
        <>
            <h1 style={{color:"black",fontSize:"50px"}}>Welcome, <span style={{color:"purple",fontSize:"45px"}}>Curious Mind</span></h1>
           <section>
              <h2>user Info:</h2>
              <div>
                  <h3>username: {auth.username}</h3>
                  <p>token: {auth.accessToken}</p>
              </div>
           </section>
           <section>
               <h1>knowledges For You :</h1>
               {
                 blogs.blog
               }
           </section>
        </>
    );
}

export default Home;