import React, { useContext } from 'react'
import { ProductCard } from '../../component/Product/ProductCard'
import { DataContext, FilterContext } from '../..'
import './Products.css'

export function Products () {
  const { state } = useContext(DataContext)
  const { filters } = useContext(FilterContext)

  const filteredProducts = state.products
    .filter(
      item =>
        (filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
        (filters.search.length === 0 ||
          item.name.toLowerCase().includes(filters.search))
    )
    .sort((a, b) =>
      filters.priceSort === 'asc' ? a.price - b.price : b.price - a.price
    )

  return (
    <>
      <div className='responsive-grid'>
        {filteredProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}
