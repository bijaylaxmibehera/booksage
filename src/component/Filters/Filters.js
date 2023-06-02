import { useContext } from 'react'
import { FilterContext, DataContext } from '../../'

export function Filters () {
  const { filters, dispatchFilters } = useContext(FilterContext)
  const { categories } = useContext(DataContext);
  const stars=[1,2,3,4];

  const handleClearFilter=()=>{
    dispatchFilters({type:'CLEAR_ALL_FILTERS'})
  }

  const handleCategoryChange=(itemCategory)=>{
    if (filters.category.includes(itemCategory)) {
        dispatchFilters({ type: 'REMOVE_CATEGORY', payload: itemCategory});
      } else {
        dispatchFilters({ type: 'ADD_CATEGORY', payload:itemCategory});
      }
  }

  const handleFilterByRaiting = (rating) => {
    dispatchFilters({ type: 'ADD_RATING', payload: rating });
  };

  console.log(categories)
  return (
    <>
      <p>Filters</p>
      {/* CLEAR FILTER BUTTON */}
      <div>
        <button onClick={handleClearFilter}>Clear filters</button>
      </div>
      {/* CATEGORY FILTER */}
      <div className='filter-by-category'>
        <p>Category</p>
        {categories.map(itemCategory => {
          return (
            <label>
              <input type='checkbox' value={itemCategory} checked={filters.category.includes(itemCategory)} onChange={()=>handleCategoryChange(itemCategory)}/>
              {itemCategory}
            </label>
          )
        })}
        {/* FILTER BY RATING */}
        {stars.map((rating)=>(
            <li>
                <label>
                    <input
                    type='radio'
                    name='rating'
                    value=""
                    checked={filters.rating === rating}
                    onChange={()=>handleFilterByRaiting(rating)}
                    />
                    {rating} Star and above  
                </label>
            </li>
        ))}
      </div>
    </>
  )
}
