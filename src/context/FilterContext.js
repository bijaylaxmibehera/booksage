/* eslint-disable react/prop-types */
import { createContext,  useReducer } from 'react'


export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

  const handleFilters = (state, action) => {
    switch (action.type) {
      case 'ADD_CATEGORY':
        return { ...state, category: [...state.category, action.payload] }
      case 'REMOVE_CATEGORY':
        return {
          ...state,
          category: [
            ...state.category.filter(category => category !== action.payload)
          ]
        }
      case 'ADD_PRICE_SORT':
        return { ...state, priceSort: action.payload }
      case 'ADD_RATING':
        return { ...state, rating: action.payload }
      case 'ADD_SEARCH':
        return { ...state, search: action.payload.toLowerCase() }
      case 'CLEAR_ALL_FILTERS':
        return { category: [], priceSort: '', rating: 0, search: '' }
      default:
        return state
    }
  }

  const [filters, dispatchFilters] = useReducer(handleFilters, {
    category: [],
    priceSort: '',
    rating: 0,
    search: ''
  })

  return (
    <FilterContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
