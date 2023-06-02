import { useContext } from 'react'
import { CartContext } from '../../'

import "./Cart.css"

export function Cart () {
  const { cartState, cartDispatch } = useContext(CartContext)
  const cartItem = cartState.items

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

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>My Cart({cartItem.length})</h3>
      {cartItem.map(item => {
        const { _id: id, img, name, price, originalPrice ,quantity} = item
        return (
          <div key={id} className='product-card'>
            <div className='product-img'>
              <img src={img} alt={name} />
            </div>
            <div className='product-details'>
              <h3>{name}</h3>
              <div style={{display:"flex",justifyContent:"space-evenly", fontWeight:"bold", width:"100%"}} >
              <p className='disc-price'>₹{price}</p>
              <p className='actual-price'>₹{originalPrice}</p>
              </div>
              <p className='product-quantity'>
                Quantity:
                <button onClick={()=>handleDecreaseQuantity(item)}>-</button>
                <span>{quantity}</span>
                <button onClick={()=>handleIncreaseQuantity(item)}>+</button>
              </p>
              <div className='product-manage-btn'>
              <button onClick={()=>handleRemoveFromCart(item)}>Remove from cart</button>
              <button>Move to wishlist</button>
              </div>
             
            </div>
          </div>
        )
      })}
    </>
  )
}
