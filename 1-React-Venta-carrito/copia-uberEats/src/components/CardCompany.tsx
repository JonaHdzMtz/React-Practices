import styles from './CardCompany.module.css'

interface CardCompanyProps {
    title :string;
    img:string;
}
export function CardCompany(props: CardCompanyProps) {
    return (
        <>
        <div className={styles.card}>
            <img src={props.img} alt="img" className={styles.img}/>
            <div className={styles.container}>
                <h1>{props.title}</h1>
            </div>
        </div>
        </>
    )
}