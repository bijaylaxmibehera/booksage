import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter as Router } from 'react-router-dom'

import { DataContext, DataProvider } from './context/DataContext'
import { FilterContext, FilterProvider } from './context/FilterContext'
import { CartContext, CartProvider } from './context/CartContext'
import { WishlistContext, WishlistProvider } from './context/WishlistContext'
// Call make Server
makeServer()

export { DataContext, FilterContext, CartContext, WishlistContext }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <FilterProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </FilterProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
