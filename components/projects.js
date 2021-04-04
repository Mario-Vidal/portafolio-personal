import styles from '../styles/Home.module.scss'

export default function Projects() {
    return (
        <div className={styles.projects}>
            <article className={styles.project}>
                <div className={styles.img}>
                    <img src="http://placehold.jp/250x180.png" />
                </div>
                <div className={styles.info}>
                    <a href="#">Proyecto 1</a>
                    <p>Sitio web</p>
                    {/* <button>Ver</button> */}
                </div>
            </article>

            <article className={styles.project}>
                <div className={styles.img}>
                    <img src="http://placehold.jp/250x180.png" />
                </div>
                <div className={styles.info}>
                    <a href="#">Proyecto 2</a>
                    <p>Sitio web</p>
                </div>
            </article>

            <article className={styles.project}>
                <div className={styles.img}>
                    <img src="http://placehold.jp/250x180.png" />
                </div>
                <div className={styles.info}>
                    <a href="#">Proyecto 3</a>
                    <p>Sitio web</p>
                </div>
            </article>

            <article className={styles.project}>
                <div className={styles.img}>
                    <img src="http://placehold.jp/250x180.png" />
                </div>
                <div className={styles.info}>
                    <a href="#">Proyecto 4</a>
                    <p>Sitio web</p>
                </div>
            </article>

            <article className={styles.project}>
                <div className={styles.img}>
                    <img src="http://placehold.jp/250x180.png" />
                </div>
                <div className={styles.info}>
                    <a href="#">Proyecto 5</a>
                    <p>Sitio web</p>
                </div>
            </article>

            <article className={styles.project}>
                <div className={styles.img}>
                    <img src="http://placehold.jp/250x180.png" />
                </div>
                <div className={styles.info}>
                    <a href="#">Proyecto 6</a>
                    <p>Sitio web</p>
                </div>
            </article>
        </div>
    )
}
