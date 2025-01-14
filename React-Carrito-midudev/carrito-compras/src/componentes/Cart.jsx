import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './Icons.jsx';
import './Cart.css';
import { useCart } from '../hooks/useCart.jsx';
export function Cart() {

    const cardCheckboxId = useId();
    const { cart, clearCart, addCart } = useCart();

    function CartItem({ thumbnail, title, price, quantity, addToCart }) {
        return (
            <li>
                <img src={thumbnail} alt={title} />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>
                <footer>
                    <small>Qty: {quantity}</small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        )
    }
    return (
        <>
            <label className='cart-button' htmlFor={cardCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cardCheckboxId} hidden />
            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            thumbnail="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519"
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                            addToCart={() => {
                                console.log("añadiendo a carrito")
                                addCart(product)
                            }}
                        />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}