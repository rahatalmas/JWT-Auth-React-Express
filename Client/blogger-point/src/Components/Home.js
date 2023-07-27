import { useContext } from "react";
import AuthContext from "../Context/UserAuthContext";

const Home = () =>{
    const {auth} = useContext(AuthContext);    
    return(
        <>
           <section>
              <h2>user Info:</h2>
              <div>
                  <h3>username: {auth.username}</h3>
                  <p>email: {auth.email}</p>
                  <p>token: {auth.accessToken}</p>
              </div>
           </section>
           <section>
               knowledges For You :
           </section>
        </>
    );
}

export default Home;