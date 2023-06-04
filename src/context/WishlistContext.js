import { createContext,  useReducer} from 'react'


export const WishlistContext = createContext()

export function WishlistProvider ({ children }) {
 

  const wishlistReducer = (state, action) => {
    switch (action.type) {
      // case 'SET_WISHLIST':
      //     return { ...state, wishlists: action.payload }
  
      case 'ADD_TO_WISHLIST':
        if (!state.wishlists.find(item => item.id === action.payload.id)) {
          return {
            ...state,
            wishlists: [...state.wishlists, action.payload]
          }
        }
        return state
      case 'REMOVE_FROM_WISHLIST':
        return {
          ...state,
          wishlists: state.wishlists.filter(item => item.id !== action.payload.id)
        }
      default:
        return state
    }
  }
  
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlists: []
  })

  return (
    <>
      <WishlistContext.Provider value={{wishlistState,wishlistDispatch}}>{children}</WishlistContext.Provider>
    </>
  )
}
