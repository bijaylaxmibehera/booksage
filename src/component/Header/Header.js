import { NavLink } from "react-router-dom"
export function Header(){
    return (
       <>
       <nav>
        <div className="nav-left">
           <NavLink to="/">BookSage</NavLink>
        </div>
        <div className="nav-right">
             <NavLink to="/">Home</NavLink>
             <NavLink to="/products">Products</NavLink>
             <NavLink to="/wishlist">wishlist</NavLink>
             <NavLink to="/cart">Cart</NavLink>
             <button><NavLink to="/">Login</NavLink></button>
        </div>
       </nav>
       </>
    )
}