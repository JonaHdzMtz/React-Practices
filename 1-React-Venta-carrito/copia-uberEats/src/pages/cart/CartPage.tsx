import styles from './CartPage.module.css';
import { useEffect, useState } from 'react';
import { getCartCustomer } from '../../services/customerService'
export function CartPage() {

    const [cart, setCart] = useState([])
    const [summary, setSummary] = useState({})


    useEffect(() => {
        let total = 0;
        const iva = 0.16;
        let subtotal = 0;
        cart.forEach((item) => {
            total += (item.quantity * item.foodAlias.price)

        });
        subtotal = (total + (total * iva))
        setSummary({
            total: total,
            subtotal: subtotal,
            iva: iva
        })

    }, [cart])

    useEffect(() => {
        console.log('recuperando carrito')
        getCartCustomer(2).then((data) => {
            setCart(data)
        })
    }, [])

    const handleSaveOrder = () => {
        
    }

    return (
        <div className={styles.container}>
            {/* header */}
            <aside className={styles.header}>
                <p className={styles.title}>Uber <strong>Eats</strong></p>
                <div className={styles.containerButtons}>
                    <img className={styles.icon} src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" alt="cart_icon" />
                    <img className={styles.icon} src="https://cdn.iconscout.com/icon/free/png-512/free-user-icon-download-in-svg-png-gif-file-formats--account-profile-ui-basic-needs-pack-interface-icons-528036.png?f=webp&w=256" alt="user_icon" />
                </div>
            </aside>
            {/* body */}
            <article className={styles.containerCart}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th>plato</th>
                            <th>precio</th>
                            <th>cantidad</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item) => (
                                <tr key={item.idCart}>
                                    <td>{item.foodAlias.nameFood}</td>
                                    <td>{"$ " + item.foodAlias.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><img className={styles.imgTable} src={item.foodAlias.imgFood} alt={item.foodAlias.imgFood} /></td>
                                </tr>
                            ))
                        }
                        {
                            cart.map((item) => (
                                <tr key={item.idCart}>
                                    <td>{item.foodAlias.nameFood}</td>
                                    <td>{"$ " + item.foodAlias.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><img className={styles.imgTable} src={item.foodAlias.imgFood} alt={item.foodAlias.imgFood} /></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <div className={styles.containerSummary}>
                    <article className={styles.summaryCard}>
                        <h2>resumen de carrito </h2>
                        <p>{"subtotal: " + summary.total} </p>
                        <p>{"iva: " + summary.iva * 100 + "%"} </p>
                        <p>{"total: $" + Number.parseFloat(summary.subtotal).toFixed(2)} </p>
                        <p>direccion de cliente: </p>
                    </article>
                    <button onClick={handleSaveOrder}>Ordenar pedido</button>
                </div>

            </article>
        </div>
    )
}
