import { useContext,useEffect, useState} from "react";
import AuthContext from "../Context/UserAuthContext";
import axios from 'axios';

const Home = () =>{
    const {auth} = useContext(AuthContext);
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/blogs",
            {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${auth.accessToken}`
                }
            }
        )
          .then(response=>{
            console.log(response.data)
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
               knowledges For You :
               {
                blogs.map(blog=>(
                    <div>
                        <h1>{blog.title}</h1>
                        <p>{blog.body}</p>
                    </div>
                ))
               }
           </section>
        </>
    );
}

export default Home;