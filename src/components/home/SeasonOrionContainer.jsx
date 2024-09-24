import React from 'react'
import styles from '../../styles/seasons.module.css'
import { FaBoltLightning } from "react-icons/fa6";
import Asuto from '../../assets/asuto.png'
import Ares from '../../assets/posters/ares.jpg'
import Orion from '../../assets/posters/orion.jpg'
import CardSeason from './CardSeason';

function SeasonOrionContainer() {
    return (
        <div className={styles.containerAres_bg}>
            <div className={styles.containerImage}>
                <section className={styles.hero_text} style={{ marginTop: '20px' }}>
                    <h1> <FaBoltLightning style={{ color: '#e9ff0c' }} /> Mira el viaje de Asuto para descubrir el fútbol más alla de la Isla Inakuni <FaBoltLightning style={{ color: '#e9ff0c' }} />
                    </h1>
                </section>
                <section className={styles.season_container}>
                <div className={styles.season_art}>
                        <img style={{ marginLeft: '10px', width:'39%' }} src={Asuto} alt="Asuto Inamori" />
                    </div>
                    <div  className={styles.seasonAres_grid}>
                        <CardSeason name ={'Ares'} cover={Ares} />
                        <CardSeason name ={'Orion'} cover={Orion} />
                        
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default SeasonOrionContainer