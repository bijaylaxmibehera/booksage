import { createContext, useEffect, useReducer } from 'react'

export const DataContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'SET_CART':
      return { ...state, cart: action.payload }
    case 'SET_WISHLIST':
      return { ...state, wishlist: action.payload }
    default:
      return state
  }
}

export function DataProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
    wishlist: []
  })
  
  useEffect(()=>{
   const getProducts=async()=>{
    try{
        const res = await fetch("/api/products")
        const products = await res.json()
        dispatch({type:"SET_PRODUCTS", payload: products.products})
    }catch(err){
        console.error(err)
    }
   }
  getProducts();
  },[])
  return (
    <>
      <DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>
    </>
  )
}
