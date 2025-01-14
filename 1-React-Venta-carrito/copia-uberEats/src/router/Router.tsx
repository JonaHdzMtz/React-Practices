
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MainPage} from '../pages/MainPage/MainPage'
import {RegisterPage} from '../pages/register/RegisterPage'
import {LoginPage} from '../pages/login/LoginPage'
import {MenuPage} from '../pages/menu/MenuPage'
import {ProductsPage} from '../pages/allProductsPage/ProductsPage'
import { CartPage } from '../pages/cart/CartPage'
export  function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element= {<MenuPage/>} />
        <Route path="/products" element= {<ProductsPage/>} />
        <Route path="/cart" element= {<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
