import "./Products.css"
import { AddToCartIcon } from "./Icons.jsx"
import { useCart } from "../hooks/useCart.jsx"
import { RemoveFromCartIcon } from "./Icons.jsx"
export function Products({ products }) {
    const { addCart, cart, removeFromCart } = useCart()

    const checkProduct = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {products.slice(0, 10).map((product) => {
                    const isProductInCart = checkProduct(product)
                    return (<li key={product.id}>
                        <img className="img" src={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519"} alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button style = {{backgroundColor: isProductInCart ? "red" : "green"}} onClick={() => 
                                {
                                    isProductInCart ?
                                    removeFromCart(product) :
                                    addCart(product)
                                }
                            }>
                                {
                                    isProductInCart ?
                                    <RemoveFromCartIcon/> :
                                    <AddToCartIcon />
                                }
                            </button>

                        </div>
                    </li>)
                })}
            </ul>
        </main>
    )
}