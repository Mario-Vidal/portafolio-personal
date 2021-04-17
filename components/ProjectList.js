import styles from '../styles/Home.module.scss'
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsList() {
        
    return (
        <main className={styles.main}>
            <div className={styles.projects}>
                {
                    projects.map( project => (
                        <ProjectCard
                            key={ project.id }
                            { ...project }
                        />
                    ))
                }
            </div>
        </main>
    )
}
