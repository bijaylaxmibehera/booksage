import { createContext, useEffect, useReducer } from 'react'

export const DataContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }

    default:
      return state
  }
}

export function DataProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    products: []
  })

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('/api/products')
        const products = await res.json()
        dispatch({ type: 'SET_PRODUCTS', payload: products.products })
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  }, [])

  const categories = state.products.reduce((acc, currProd) => {
    if (!acc.includes(currProd.category)) {
      acc.push(currProd.category)
    }
    return acc
  }, [])

  return (
    <>
      <DataContext.Provider value={{ state, dispatch, categories }}>
        {children}
      </DataContext.Provider>
    </>
  )
}
