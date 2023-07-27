import { NavLink,Outlet } from "react-router-dom";

const Nav = () =>{
    return(
       <>
          <div className="nav-container">
              <section>
                <img alt="DP"/>
              </section>
              <section>
                 <NavLink to="/" className="nav-item">Blogs</NavLink>
                 <NavLink to="/profile" className="nav-item">Profile</NavLink>
                 <NavLink to="/about" className="nav-item">About</NavLink>
              </section>
          </div>
          <Outlet/>
       </>
    );
}
export default Nav;