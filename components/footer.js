import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import githubLogo from '../public/footer/icons/github.png'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <Image
                    src={githubLogo}
                    alt="image-alt-text"
                    width={40}
                    height={40}
                />
            </div>

            <div className={styles.logo}>
                <Link href="#inicio">
                    <a>Regresar al inicio</a>
                </Link>                  
            </div>
        </footer>
    )
}
