import { useContext } from 'react'
import { CartContext } from '../../'
import './OrderSummary.css'

export function OrderSummary () {
  const { cartState } = useContext(CartContext)
  const cartItems = cartState.items
  // console.log(cartItems);
  const deliveryCharges = 200
  const totalItems = cartItems.reduce(
    (noOfItems, currItem) => (noOfItems += currItem.quantity),
    0
  )
  const totalPrice = cartItems.reduce(
    (total, currItem) => (total += currItem.price * currItem.quantity),
    0
  )
  const totalDiscount = cartItems.reduce(
    (total, currItem) => (total += currItem.originalPrice * currItem.quantity),
    0
  )
  const totalAmount = totalDiscount + deliveryCharges

  return (
    <>
      <div className='order-summary'>
        <p className='div-heading'>Price Details</p>
        <hr />
        <div className='price-details'>
            <p>Price ({totalItems} items):</p>
            <p>₹{totalPrice}</p>
        </div>
        <div className='price-details'>
            <p>Discount:</p>
            <p>-₹{totalDiscount}</p>
        </div>
        <div className='price-details'>
            <p>Delivery charges:</p>
            <p>₹{deliveryCharges}</p>
        </div>
        <hr />
        <div className='price-details total-amount'>
            <p>Total Amount</p>
            <p>₹{totalAmount}</p>
        </div>
        <p>You will save ₹{totalDiscount} on this order.</p>
        <button className='order-btn'>Place Order</button>
      </div>
    </>
  )
}
