import { useContext, useState } from 'react'
import { FilterContext, DataContext } from '../../'

export function Filters () {
  const { filters, dispatchFilters } = useContext(FilterContext)
  const { categories } = useContext(DataContext)

  const stars = [1, 2, 3, 4]

  const handleClearFilter = () => {
    dispatchFilters({ type: 'CLEAR_ALL_FILTERS' })
  }

  const handlePriceChange = event => {
    const value = event.target.value
    dispatchFilters({ type: 'ADD_PRICE_RANGE', payload:value })
    
  }

  const handleSearch = e => {
    const userInput = e.target.value
    dispatchFilters({ type: 'ADD_SEARCH', payload: userInput })
  }
  const handleCategoryChange = itemCategory => {
    if (filters.category.includes(itemCategory)) {
      dispatchFilters({ type: 'REMOVE_CATEGORY', payload: itemCategory })
    } else {
      dispatchFilters({ type: 'ADD_CATEGORY', payload: itemCategory })
    }
  }

  const handleFilterByRaiting = rating => {
    dispatchFilters({ type: 'ADD_RATING', payload: rating })
  }

  // console.log(categories)

  return (
    <>
      <p>Filters</p>
      {/* CLEAR FILTER BUTTON */}
      <div>
        <button onClick={handleClearFilter}>Clear filters</button>
      </div>
      {/* PRICE RANGE SLIDER */}
      <div className='price-range-slider'>
        <label htmlFor='price'>Price Range:</label>
        <input
          type='range'
          id='price'
          min={0}
          max={500}
          value={filters.priceRange}
          onChange={handlePriceChange}
          className='price-input'
        />
        <p>{filters.priceRange}</p>
      </div>
      {/*SEARCH PRODUCTS */}
      <div className='seach-products'>
        <input
          type='text'
          name=''
          id=''
          placeholder='search products'
          onChange={handleSearch}
        />
      </div>
      {/* CATEGORY FILTER */}
      <div className='filter-by-category'>
        <p>Category</p>
        {categories.map(itemCategory => {
          return (
            <label>
              <input
                type='checkbox'
                value={itemCategory}
                checked={filters.category.includes(itemCategory)}
                onChange={() => handleCategoryChange(itemCategory)}
              />
              {itemCategory}
            </label>
          )
        })}
        {/* FILTER BY RATING */}
        {stars.map(rating => (
          <li>
            <label>
              <input
                type='radio'
                name='rating'
                value=''
                checked={filters.rating === rating}
                onChange={() => handleFilterByRaiting(rating)}
              />
              {rating} Star and above
            </label>
          </li>
        ))}
      </div>
    </>
  )
}
