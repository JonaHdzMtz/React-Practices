import styles from './MainPage.module.css';
import { Link } from 'react-router-dom';
import { CardCompany } from '../../components/CardCompany';

export function MainPage() {
    return (
        <div>
            <aside className={styles.header}>
                <p className={styles.title}>Uber <strong>Eats</strong></p>
                <div className={styles.containerButtons}>
                    <Link to={"/login"}>
                        <button className={styles.loginButton} > Inicar sesion</button>
                    </Link>
                    <Link to={"/register"}>
                        <button className={styles.registerButton}>Registrate</button>
                    </Link>

                </div>
            </aside>
            <div className={styles.container}>
                <img className={styles.img} src="https://fooddeliverynearme.wordpress.com/wp-content/uploads/2014/01/fastfood.jpg" alt="cover_main_page.jpg" />
            </div>

        </div>
    )
}