import React, { useContext, useEffect } from 'react'
import { ProductCard } from '../../component/Product/ProductCard'
import { DataContext, FilterContext } from '../..'
import './Products.css'
import { Filters } from '../../component/Filters/Filters'

export function Products () {
  const { state } = useContext(DataContext)
  const { filters } = useContext(FilterContext)

  const filteredProducts = state.products.filter(
    item =>
      (filters.category.length === 0 ||
        filters.category.includes(item.category)) &&
        (item.rating >= filters.rating)&& (filters.search.length === 0 || item.name.toLowerCase().includes(filters.search))
  )
 

  return (
    <>
      <Filters />
      {filteredProducts.length > 0 ? (
        <div className='responsive-grid'>
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No product available</p>
      )}
    </>
  )
}
