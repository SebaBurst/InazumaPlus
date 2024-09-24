import React from 'react'
import styles from '../../styles/seasons.module.css'
import { FaBoltLightning } from "react-icons/fa6";
import Tennma from '../../assets/arion.png'
import Go from '../../assets/posters/go.jpg'
import Chrono from '../../assets/posters/chrono.jpg'
import Galaxy from '../../assets/posters/galaxy.jpg'
import CardSeason from './CardSeason';


function SeasonGoContainer() {
    return (
        <div className={styles.containergo_bg}>
            <div className={styles.containerImage}>
                <section className={styles.hero_text} style={{ marginTop: '20px' }}>
                    <h1> <FaBoltLightning style={{ color: '#e9ff0c' }} /> Mira el camino de Tenma para proteger y recuperar el fútbol <FaBoltLightning style={{ color: '#e9ff0c' }} />
                    </h1>
                </section>
                <section className={styles.season_container}>

                    <div className={styles.seasonGo_grid}>
                        <CardSeason name ={'Go'} cover={Go} />
                        <CardSeason name ={'Chrono'} cover={Chrono} />
                        <CardSeason name ={'Galaxy'} cover={Galaxy} />
                    </div>
                    <div className={styles.season_art}>
                        <img style={{ marginLeft: '10px' }} src={Tennma} alt="Tenma Matsukaze" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SeasonGoContainer