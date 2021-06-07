import styles from '../styles/Home.module.scss'
import Link from 'next/link'


export default function Navbar() {
    return (
        <header className={styles.header} id="inicio">
            <div className={styles.logo}>
                <h1>Mario Vidal</h1>
            </div>

            <nav className={styles.menu}>
                <ul>
                    <li>
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <Link href="#proyectos">
                            <a>Proyectos</a>
                        </Link>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
