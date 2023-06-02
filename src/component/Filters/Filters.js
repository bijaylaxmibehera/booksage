import { useContext } from 'react'
import { FilterContext, DataContext } from '../../'

export function Filters () {
  const { filters, dispatchFilters } = useContext(FilterContext)
  const { categories } = useContext(DataContext);
  const stars=[1,2,3,4];

  const handleClearFilter=()=>{
    dispatchFilters({type:'CLEAR_ALL_FILTERS'})
  }
 const handleSearch=(e)=>{
    const userInput=e.target.value;
    dispatchFilters({type: 'ADD_SEARCH',payload:userInput});
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
      {/*SEARCH PRODUCTS */}
      <div className='seach-products'>
          <input type='text'  name="" id="" placeholder='search products' onChange={handleSearch}/>
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
