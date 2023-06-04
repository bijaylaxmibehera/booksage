import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext ,WishlistContext} from '../../';
import { CalculateDiscount } from '../../utils/CalculateDiscount';

import "./Cart.css";
import { OrderSummary } from '../../component/OrderSummary/OrderSummary';

export function Cart() {
  const { cartState, cartDispatch } = useContext(CartContext);
  const {wishlistState,wishlistDispatch}=useContext(WishlistContext);
  const cartItem = cartState.items;

  const handleRemoveFromCart = (item) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      cartDispatch({ type: 'DECREASE_QUANTITY', payload: item });
    }
  };

  const handleIncreaseQuantity = (item) => {
    cartDispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const handleMoveToWishlist=(item)=>{
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: item });
    wishlistDispatch({type:'ADD_TO_WISHLIST',payload:item})
  }

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>My Cart({cartItem.length})</h3>
      {cartItem.length === 0 ? (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh", fontWeight:"var(--font-semiBold)", fontSize:"1.2rem"}}>
        <p> Hey your cart looks empty. Please add some item...</p>
        </div>
        
       
      ) : (
        cartItem.map((item) => {
          const { _id: id, img, name, price, originalPrice, quantity } = item;
          return (
            <div key={id} className='product-card'>
              <div className='product-img'>
                <img src={img} alt={name} />
              </div>
              <div className='product-details'>
                <h3>{name}</h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: 'bold',
                    width: '100%',
                  }}
                >
                  <p className='disc-price'>₹{price}</p>
                  <p className='actual-price'>₹{originalPrice}</p>
                </div>
                <p className='price-percentage'>
                  <CalculateDiscount
                    price={price}
                    originalPrice={originalPrice}
                  />
                  % Off
                </p>
                <p className='product-quantity'>
                  Quantity:
                  <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                </p>
                <div className='product-manage-btn'>
                  <button onClick={() => handleRemoveFromCart(item)}>
                    Remove from cart
                  </button>
                  {wishlistState.wishlists.find((wishlistItem)=>wishlistItem.id===item.id)? (<NavLink to='/wishlist'>
                    <button
                      className='product-manage-btn'
                      style={{backgroundColor:"var(--link)"}}
                    >
                      Already in wishlist
                    </button>
                  </NavLink>
                ) : (
                  <button className='product-manage-btn' onClick={()=>handleMoveToWishlist(item)} >Move to wishlist</button>
                )}
                  {/* <button onClick={()=>handleMoveToWishlist(item)}>Move to wishlist</button> */}
                </div>
              </div>
            </div>
          );
        })
      )}
      {cartItem.length !== 0 && <OrderSummary />}
    </>
  );
}
