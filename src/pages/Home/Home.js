import './Home.css'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext, FilterContext } from '../../'
export function Home () {
  const { categories } = useContext(DataContext)
  const { filters, dispatchFilters } = useContext(FilterContext)

  const setCategory = category => {
    dispatchFilters({ type: 'ADD_CATEGORY', payload: category })
  }

  return (
    <>
      <section className='responsive-grid category-card'>
        {categories.map(category => (
          <>
            <div key={category} className='category-card-overlay'>
              <button onClick={() => setCategory(category)}>
                <NavLink to='/products'>{category}</NavLink>
              </button>
            </div>
          </>
        ))}
      </section>
      <main>
        <div className='background-overlay'></div>
        <div className='main-text'>
          <p>Welcome to BookSage!</p>
          <h1>
            Discover a world of knowledge and inspiration through our vast
            collection of books.
          </h1>
          <button className='btn secondary shop-btn'>
            <NavLink to='/products'>
              Browse Collection
              <i class='fa fa-chevron-right' aria-hidden='true'></i>
            </NavLink>
          </button>
        </div>
      </main>
    </>
  )
}
