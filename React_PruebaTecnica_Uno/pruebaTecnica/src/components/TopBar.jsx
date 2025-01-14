import styles from './topBar.module.css';

export default function TopBar() {
    return (
        <>
            <section className={styles.topBar}>
                <p className={styles.p}><strong>DEMO Streaming</strong></p>
                <div className={styles.childrenTopBar}>
                    <a className={styles.a} href="">
                        <p className={styles.p}>Log In</p>
                    </a>
                    <button className={styles.button}>Start your free trial</button>
                </div>
            </section>
            <section className={styles.containerTitle}>
            <p>Popular Titles</p>
            </section>
        </>

    );
}