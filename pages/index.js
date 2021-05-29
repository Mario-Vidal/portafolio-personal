import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import ProjectsList from '../components/ProjectList'
import Footer from '../components/footer'


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mario Vidal - Portafolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <Hero />

            <ProjectsList />

            <Footer />
        </div>
    )
}
