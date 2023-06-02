import { useContext } from 'react'
import { FilterContext, DataContext } from '../../'

export function Filters () {
  const { filters, dispatchFilters } = useContext(FilterContext)
  const { categories } = useContext(DataContext);

  const handleCategoryChange=(itemCategory)=>{
    if (filters.category.includes(itemCategory)) {
        dispatchFilters({ type: 'REMOVE_CATEGORY', payload: itemCategory});
      } else {
        dispatchFilters({ type: 'ADD_CATEGORY', payload:itemCategory});
      }
  }

  console.log(categories)
  return (
    <>
      <p>Filters</p>
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
      </div>
    </>
  )
}
