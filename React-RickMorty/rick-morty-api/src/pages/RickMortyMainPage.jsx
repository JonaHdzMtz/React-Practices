import styles from "../pages/RickMortyMainPage.module.css";
import CardRick from "../components/CardRick";
import RickApiService from "../data/RickApiService";
import {useState, useEffect} from 'react'

export default function RickMortyMainPage() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const data1 = RickApiService()
        .then((response) => setData(response.results))

    },[])
    return (
        <>
            <div className={styles.headerContainer}>
                <img className={styles.icon} src="https://img.icons8.com/plasticine/512/morty-smith.png" alt="icono" />
                <div className={styles.childHead}>
                    <p className={styles.p}><strong> Docs</strong></p>
                    <p className={styles.p}><strong>About</strong></p>
                    <button>SUPPORT US</button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.titleSpace}>
                    <h1 className={styles.h1Title}>The Rick and Morty API</h1>
                </div>
                <div>

                </div>
                <div className={styles.cardContainer}>
                {data.map((item)=>(
                    <CardRick key={item.id} img={item.image} name={item.name} location = {item.location.name} status={item.status} species= {item.species} seen={item.created}/>
                ))}
                </div>
                
            </div>
            
        </>
    )
}