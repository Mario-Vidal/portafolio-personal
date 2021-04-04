import styles from '../styles/Home.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                Creado por: Mario Vidal
            </div>

            <div className={styles.logo}>
                Portafolio
            </div>
        </footer>
    )
}
