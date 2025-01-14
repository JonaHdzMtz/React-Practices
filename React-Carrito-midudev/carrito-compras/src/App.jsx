import React, { useContext } from 'react'
import { products as initialProducts } from '../src/mocks/productos.json'
import { Products } from './componentes/Products.jsx'
import { useState } from 'react'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import { useFilters } from './hooks/useFilters.jsx'
import { Cart } from './componentes/Cart.jsx'

import { CartProvider } from './context/Card.jsx'
export default function App() {
  const [products] = useState(initialProducts)
  const { filterProductos, setFilters, filters } = useFilters()
  const filteredProducts = filterProductos(products)
  return (
    <CartProvider>
      <Header  />
      <Cart />
      <Products products={filteredProducts} />
     <Footer/>
    </CartProvider>

  )
}
