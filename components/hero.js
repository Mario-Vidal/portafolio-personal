import styles from '../styles/Home.module.scss'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.bio}>
                <div className={styles.description}>
                    <h1>¡Hola! Soy Mario Vidal.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo libero, malesuada sit amet semper vel, ultricies ut orci.</p>
                </div>

                {/* <div className={styles.img}>
                    <img src="/img_hero.svg" />
                </div> */}
            </div>
        </div>
    )
}
