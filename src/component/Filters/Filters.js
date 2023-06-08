import { useContext } from 'react'
import { FilterContext, DataContext } from '../../'
import './Filters.css'

export function Filters () {
  const { filters, dispatchFilters } = useContext(FilterContext)
  const { categories } = useContext(DataContext)

  const stars = [1, 2, 3, 4]

  const handleClearFilter = () => {
    dispatchFilters({ type: 'CLEAR_ALL_FILTERS' })
  }

  const handlePriceChange = event => {
    const value = event.target.value
    dispatchFilters({ type: 'ADD_PRICE_RANGE', payload: value })
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

  const handlePriceSort = sortType => {
    dispatchFilters({ type: 'ADD_PRICE_SORT', payload: sortType })
  }

  const handleFilterByRaiting = rating => {
    dispatchFilters({ type: 'ADD_RATING', payload: rating })
  }

  // console.log(categories)

  return (
    <>
      {/* CLEAR FILTER BUTTON */}
      <div className='filters'>
        <span className='filters-heading'>Filters</span>
        <button onClick={handleClearFilter} className='clear-btn'>Clear filters</button>
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
      {/* PRICE RANGE SLIDER */}
      <div className='price-range-slider'>
        <p className='price filter-type'>Price Range:</p>
        <div className='price-range'>
          <p>50</p>
          <p>500</p>
          <p>1000</p>
        </div>
        <input
          type='range'
          name='rangeInput'
          className='slider price-input'
          min='0'
          max='1000'
          value={filters.priceRange}
          onChange={handlePriceChange}
        />
      </div>
      
      {/* CATEGORY FILTER */}
      <div className='filter-by-category'>
        <p className='filter-type'>Category: </p>
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
      </div>
      {/* SORT PRODUCT BY PRICE */}
      <div className='sort-by-price'>
        <p className='filter-type'>Price:</p>
        <div>
          <label htmlFor='asc'>
            <input
              type='radio'
              id='asc'
              checked={filters.priceSort === 'asc'}
              onClick={() => handlePriceSort('asc')}
              name='sortbyprice'
            />
            Low to High
          </label>
          <label htmlFor='dsc'>
            <input
              type='radio'
              id='dsc'
              checked={filters.priceSort === 'dsc'}
              onClick={() => handlePriceSort('dsc')}
              name='sortbyprice'
            />
            High to Low
          </label>
        </div>
      </div>
      {/* FILTER BY RATING */}
      <div className='filter-by-rating'>
        <p className='filter-type'>Sort by rating:</p>
        <ul>
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
              {rating} <i class='fa fa-star' aria-hidden='true'></i> & above
            </label>
          </li>
        ))}
        </ul>
        
      </div>
    </>
  )
}
