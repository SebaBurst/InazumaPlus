import React from 'react'
import styles from '../../styles/seasons.module.css'
import { FaBoltLightning } from "react-icons/fa6";
import Endou from '../../assets/endou.png'
import CardSeason from './CardSeason';
import Original from '../../assets/posters/og.jpg'
import Aliens from '../../assets/posters/ventisca.jpg'
import Fire from '../../assets/posters/fuego.jpg'
import Rayo from '../../assets/posters/rayo.jpg'
import Explosion from '../../assets/posters/explosivo.jpg'

function SeasonContainer() {
  return (
    <div className={styles.container_bg}>
      <div className={styles.containerImage}> 
         <section className={styles.hero_text} style={{marginTop:'20px'}}>
              <h1> <FaBoltLightning style ={{color:'#e9ff0c'}}/> Mira las temporadas que forman la leyenda de Endou Mamoru <FaBoltLightning style ={{color:'#e9ff0c'}}/>
               </h1>
            </section>
            <section className={styles.season_container}>
                <div className={styles.season_art}>
                  <img src={Endou} alt="Endou Mamoru" />  
                  </div>
                  <div className={styles.season_grid}>
                    <CardSeason name={'Original'} cover={Original}/>
                    <CardSeason name ={'Ventisca'} cover={Aliens}/>
                    <CardSeason name ={'Fuego'} cover={Fire}/>
                    <CardSeason name ={'Rayo'} cover={Rayo}/>
                    <CardSeason name ={'Explosivo'} cover={Explosion}/>
                    </div>

               </section>
               </div>

    </div>
    
  )
}

export default SeasonContainer