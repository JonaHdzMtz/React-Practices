import React from 'react'
import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
export default function Footer() {

  const{cart} = useCart()
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {/* {
        JSON.stringify(filters, null, 2)
      } */}

      {
        // JSON.stringify(cart, null, 2)
      }
      {
        //  <h4>Prueba de react</h4>
        //  <span>xd</span>
        //  <h5>shopping card con useContext y useReducer</h5>
      }
    </footer>
  )
}
