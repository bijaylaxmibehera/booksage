import {useContext} from "react";
import { CartContext } from "../../";
import "./OrderSummary.css"

export function OrderSummary () {
    const {cartState}=useContext(CartContext);
    const cartItems=cartState.items;
    // console.log(cartItems);
    const deliveryCharges=200;
    const totalItems=cartItems.reduce((noOfItems,currItem)=>noOfItems+=currItem.quantity,0);
    const totalPrice=cartItems.reduce((total,currItem)=>total+=currItem.price*currItem.quantity,0)
    const totalDiscount=cartItems.reduce((total,currItem)=>total+=currItem.originalPrice*currItem.quantity,0)
    const totalAmount=totalDiscount+deliveryCharges;

  return (
    <>
      <div>
        <p>Price Details</p>
        <hr/>
        <p>Price ({totalItems} items): ₹{totalPrice}</p>
        <p>Discount: -₹{totalDiscount}</p>
        <p>Delivery charges: ₹{deliveryCharges}</p>
        <hr/>
        <p>Total Amount ₹{totalAmount}</p>
        <p>You will save ₹{totalDiscount} on this order.</p>
        <button>Place Order</button>
      </div>
    </>
  )
}
