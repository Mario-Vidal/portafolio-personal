import styles from '../styles/Home.module.scss'
import Link from 'next/link'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                Creado por: Mario Vidal
            </div>

            <div className={styles.logo}>
                <Link href="#inicio">
                    <a>Regresar al inicio</a>
                </Link>                  
            </div>
        </footer>
    )
}
