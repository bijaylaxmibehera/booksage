import { useContext,useState } from 'react'
import { CalculateDiscount } from '../../utils/CalculateDiscount'
import AddToCart from '../Services/AddToCart'
import './ProductCard.css'
import { WishlistContext } from '../../'
export function ProductCard ({ product }) {
  const {wishlistState,wishlistDispatch}=useContext(WishlistContext)
  const {
    _id: id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    rating
  } = product
  
  const [isWishlistActive, setIsWishlistActive] = useState(
    wishlistState.wishlists.some((item) => item._id === id)
  );

  const handleWishlist = () => {
    if (isWishlistActive) {
      wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product});
    } else {
      wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
    setIsWishlistActive(!isWishlistActive);
  };
  return (
    <>
      <div key={id} className='card'>
        <img className='card-img' src={img} alt={name} />
        {isBestSeller && <span className='card-badge'>Best Seller</span>}
        <span role='button'  className={`wishlist-icon ${isWishlistActive ? 'active' : ''}`} onClick={handleWishlist}>
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
          <p className="price-percentage"><CalculateDiscount price={price} originalPrice={originalPrice}/>% Off</p>
        </div>
        <AddToCart product={product}/>
      </div>
    </>
  )
}
