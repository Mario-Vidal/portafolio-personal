import styles from '../styles/Home.module.scss'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.bio}>
                <div className={styles.description}>
                    <h1>¡Hola! Soy Mario Vidal.</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo libero, malesuada sit amet semper vel, ultricies ut orci. Nullam nec libero viverra, hendrerit libero nec, porta erat.</h2>
                </div>

                <div className={styles.img}>
                    {/* <img src="/img_hero.svg" /> */}
                </div>
            </div>
        </div>
    )
}
