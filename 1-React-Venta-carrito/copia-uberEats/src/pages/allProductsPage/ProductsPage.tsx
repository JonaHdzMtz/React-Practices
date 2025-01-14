import styles from './ProductsPage.module.css';
import { CardProduct } from '../../components/CardProduct';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { getAllProducts, addProductToCard } from '../../services/productService.js';
export function ProductsPage() {


    interface Product {
        idFood: number,
        nameFood: string,
        description: string,
        price: number,
        imgFood: string
    }

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => { setOpenModal(true) }
    const handleCloseModal = () => { setOpenModal(false) }
    const [products, setProducts] = useState<Product[]>([]);

    const [productSelected, setProductSelected] = useState<Product>(
        {
            idFood: 0,
            nameFood: '',
            description: '',
            price: 0,
            imgFood: ''
        }
    );

    const handleCLickProduct = (item: Product) => {
        console.log(item);
        if (item === undefined || item.nameFood === undefined && item.description === undefined && item.price === undefined && item.imgFood === undefined) return;
        setProductSelected(item);
        handleOpenModal();
    }

    useEffect(() => {
        getAllProducts().then((data: Product[]) => {
            setProducts(data);
        });
    }, []);

    const handleClickAddCard = async  () => {
            const item = {
                idUser : 2,
                idFood : productSelected.idFood,
                quantity : 1
            }
            const response = await addProductToCard(item);
            if(response === 200){
                handleCloseModal();
            }else
            {
                console.log("Error al agregar producto al carrito" + response.code);
            }
    }

    return (
        <>
            {/* HEADER */}
            {/* BARRA DE OPCIONES Y BUSQUEDA */}
            <aside className={styles.header}>
                <p className={styles.title}>Uber <strong>Eats</strong></p>
                <div className={styles.containerButtons}>
        
                    
                            <img className={styles.icon} src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" alt="cart_icon" />
                        
                  
                   
                        <img className={styles.icon} src="https://cdn.iconscout.com/icon/free/png-512/free-user-icon-download-in-svg-png-gif-file-formats--account-profile-ui-basic-needs-pack-interface-icons-528036.png?f=webp&w=256" alt="user_icon" />
                

                </div>
            </aside>
            {/* BODY */}
            <section className={styles.productsContainer}>
                {
                    products.map((item) => (
                        <CardProduct key={item.idFood} title={item.nameFood} img={item.imgFood} price={item.price} click={() => handleCLickProduct(item)} />
                    ))
                }
            </section>

            {/* <CardProduct title="Hamburguesa" img="https://patijinich.com/es/wp-content/uploads/sites/3/2019/08/804-tacos-campechanos-de-suadero-longaniza-y-chicharron-con-salsa-callejera.jpg" price={5} click={handleCLickProduct} /> */}
            <Modal
                className={styles.modalContainer}
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className={styles.modal}>
                    <img className={styles.imgModal} src="https://patijinich.com/es/wp-content/uploads/sites/3/2019/08/804-tacos-campechanos-de-suadero-longaniza-y-chicharron-con-salsa-callejera.jpg" alt="" />
                    <div className={styles.p}>
                        <p>Paltillo: {productSelected.nameFood}</p>
                        <p>Descripcion: {productSelected.description}</p>
                        <p>Precio: {productSelected.price}</p>
                        <button onClick={handleClickAddCard}>agregar a carrito</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}