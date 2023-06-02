import "./Header.css"
import { NavLink } from "react-router-dom"
export function Header(){
    
    return (
       <>
       <nav>
        <div className="nav-left">
           <NavLink to="/">BookSage</NavLink>
        </div>
        <div className="nav-right">
             <NavLink to="/" className="nav-list">Home</NavLink>
             <NavLink to="/products" className="nav-list">Products</NavLink>
             <NavLink to="/wishlist" className="nav-list">wishlist</NavLink>
             <NavLink to="/cart" className="nav-list">Cart</NavLink>
             <button><NavLink to="/">Login</NavLink></button>
        </div>
       </nav>
       </>
    )
}