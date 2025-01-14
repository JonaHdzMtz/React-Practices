
import { useEffect, useState } from 'react';
import { getCompanies } from '../../services/companyService.js';
import { getAllProducts } from '../../services/productService.js';
import { CardCompany } from '../../components/CardCompany';
import styles from './MenuPage.module.css';
import stylesHeader from '../MainPage/MainPage.module.css';
import { Link } from 'react-router-dom';

export function MenuPage() {
    const [data, setData] = useState<object>([]);
    useEffect(() => {
        getCompanies().then((data) => {
            console.log(data);
            setData(data);
        });
    }, []);

    const handleAllCompanies = () => {
        getAllProducts
            .then(

        )
    }

    return (
        <div className={stylesHeader.containerMenu}>
            {/* HEADER */}
            <aside className={stylesHeader.header}>
                <p className={stylesHeader.title}>Uber <strong>Eats</strong></p>
                <div className={styles.containerButtons}>
                    <Link to={"/login"}>
                        <button className={styles.loginButton} > Inicar sesion</button>
                    </Link>
                    <Link to={"/register"}>
                        <button className={styles.registerButton}>Registrate</button>
                    </Link>

                </div>
            </aside>
            {/* SECCION DE OPCIONES */}
            {/* SECCION DE EMPRESAS */}
            <aside>
                <ul className={styles.companiesSection}>
                    <li className={styles.li} onClick={handleAllCompanies}>
                        <CardCompany title="Todas las empresas" img="https://media.istockphoto.com/id/688550958/es/vector/signo-de-negro-s%C3%ADmbolo-positivo.jpg?s=612x612&w=0&k=20&c=LyVTdpQ0VUUnhYVyY6Emy6CXx96dUOU9O7GXmEN_Vxo=" />
                    </li>
                    {data.map((item) => (
                        <li className={styles.li} key={item.idcompany}>
                            <CardCompany title={item.nameCompany} img={item.logoCompany} />
                        </li>
                    ))}
                </ul>
            </aside>


        </div>
    )
}