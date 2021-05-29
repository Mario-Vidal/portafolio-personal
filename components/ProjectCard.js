import styles from '../styles/Home.module.scss'

export default function ProjectCard ({ project_image, project_name, project_description }) {
    return (
        <article className={styles.project}>
            <div className={styles.img}>
                <img
                    src={ project_image }
                    layout="fill"
                    objectFit="cover"
                    alt={ project_name }
                />
            </div>
            <div className={styles.info}>
                <a href="#">{ project_name }</a>
                <p>{ project_description }</p>
            </div>
        </article>
    )
}
