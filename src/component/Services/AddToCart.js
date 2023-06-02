import React, { useContext } from 'react';
import { CartContext } from '../..';
import { NavLink } from 'react-router-dom';

const AddToCart = ({ product }) => {
  const { cartState, cartDispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };



  const itemInCart = cartState.items.find((item) => item.id === product.id);

  return (
    <div>
      {itemInCart ? (
        <NavLink to="/cart"><button className='btn default add-cart' style={{backgroundColor:"var(--link)"}}>Go to cart</button></NavLink>
      ) : (
        <button className='btn default add-cart' onClick={handleAddToCart}>Add to cart</button>
      )}
    </div>
  );
};

export default AddToCart;
