import './Header.css'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext,WishlistContext } from '../../'
export function Header () {
 
   const {cartState}=useContext(CartContext);
   const {wishlistState}=useContext(WishlistContext)


  return (
    <>
      <nav>
        <div className='nav-left'>
          <h3>
            <NavLink to='/'>BookSage</NavLink>
          </h3>
        </div>
        <div className='nav-right'>
          <NavLink to='/' className='nav-list'>
          <i class="fa fa-home" aria-hidden="true"></i>
          </NavLink>
          {/* <NavLink to="/products" className="nav-list">Products</NavLink> */}
          <NavLink to='/wishlist' className='badge nav-list'>
            <div className='wishlist'>{wishlistState.wishlists.length}</div>
            <i className='fa fa-heart' aria-hidden='true'></i>
          </NavLink>
          <NavLink to='/cart' className='badge nav-list'>
            <div>{cartState.items.length}</div>
            <i class='fa fa-shopping-cart' aria-hidden='true'></i>
          </NavLink>
          <button className="login-button">
            <NavLink to='/login'>Login</NavLink>
          </button>
        </div>
      </nav>
    </>
  )
}
