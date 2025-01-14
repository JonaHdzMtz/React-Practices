import styles from './CardProduct.module.css';

export function CardProduct (props: {title: string, img: string, price: number, click: () => void}) {
    return (
        <div className={styles.card} onClick={props.click}>
            <img className={styles.img} src={props.img} alt={props.title} />
            <p>{props.title}</p>
            <p>{"$" + props.price + "MXN"}</p>
        </div>
    )

}