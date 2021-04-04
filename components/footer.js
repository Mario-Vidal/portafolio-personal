import styles from '../styles/Home.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                Portafolio
            </div>

            <div className={styles.info}>
                Creado por: Mario Vidal
            </div>
        </footer>
    )
}
