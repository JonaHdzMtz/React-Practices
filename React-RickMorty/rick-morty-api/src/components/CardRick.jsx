import React from 'react'
import styles from './CardRick.module.css'
export default function CardRick(props) {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={props.img} alt="" />
            <div className={styles.data}>
                <h2 className={styles.h2}>{props.name}</h2>
                <div className={styles.stateCharacter}>
                <div style={{
                    backgroundColor : props.status === 'Alive' ? 'green' :  'red' 
                }} className={styles.symbol}></div>
                <p>{`${props.status} - ${props.species}`}</p>
                </div>
                <div className={styles.dataForm}>
                <div>
                <p className={styles.label}>Last Known location:</p>
                <p className={styles.text}>{props.location}</p>
                </div>
                <div>
                <p className={styles.label}>First seen in:</p>
                <p className={styles.text}>{props.seen}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
