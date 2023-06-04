import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext, WishlistContext } from '../../'
import { CalculateDiscount } from '../../utils/CalculateDiscount'

export function Wishlist () {
  const { cartState, cartDispatch } = useContext(CartContext)
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext)

  const wishlistItems = wishlistState.wishlists
  // console.log(wishlistItems);

  const handleRemoveFromWishlist = item => {
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
  }

  const handleMoveToCart = item => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item })
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })
  }

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>
        My wishlist({wishlistItems.length})
      </h3>
      {wishlistItems.length === 0 ? (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh", fontWeight:"var(--font-semiBold)", fontSize:"1.2rem"}}>
        <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className='responsive-grid'>
          {wishlistItems.map(item => {
            const {
              _id: id,
              img,
              name,
              author,
              price,
              originalPrice,
              isBestSeller,
              rating
            } = item
            return (
              <div key={id} className='card'>
                <img className='card-img' src={img} alt={name} />
                {isBestSeller && (
                  <span className='card-badge'>Best Seller</span>
                )}
                <span
                  role='button'
                  className='wishlist-icon'
                  onClick={() => handleRemoveFromWishlist(item)}
                  style={{ color: 'var(--danger)' }}
                >
                  <i className='fa fa-heart' aria-hidden='true'></i>
                </span>
                <div className='card-info'>
                  <div className=''>
                    <div className='card-title'>
                      <h3 className='card-title-header' title={name}>
                        {name}
                      </h3>
                      <div className='card-star'>
                        <p>{rating}</p>
                        <i class='fa fa-star' aria-hidden='true'></i>
                      </div>
                    </div>
                    <p className='card-description'>{author}</p>
                  </div>
                  <div className='price'>
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
                </div>
                {cartState.items.find(cartItem => cartItem.id === item.id) ? (
                  <NavLink to='/cart'>
                    <button
                      className='btn default add-cart'
                      style={{ backgroundColor: 'var(--link)' }}
                    >
                      Already in cart
                    </button>
                  </NavLink>
                ) : (
                  <button
                    className='btn default add-cart'
                    onClick={() => handleMoveToCart(item)}
                  >
                    Move to cart
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
