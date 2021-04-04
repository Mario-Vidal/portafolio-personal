import styles from '../styles/Home.module.scss'

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Mario Vidal</h1>
            </div>

            <div className={styles.menu}>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Proyectos</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
