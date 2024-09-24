import React from 'react'
import VectorHero from "../../assets/hero_image.png"
import styles from "../../styles/hero.module.css"
import CardSeries from './CardSeries'
import OG from "../../assets/ogcard.png"
import Orion from "../../assets/orioncard.png"
import Outer from "../../assets/outercard.png"
import Go from "../../assets/gocard.png"
import Ares from "../../assets/hover_card.png"
import Heroes from "../../assets/heroescard.png"
import { FaBoltLightning } from "react-icons/fa6";

function Hero() {

  return (
    <>
        <section className={styles.hero_bg}>
            <img src={VectorHero} alt="hero" /> 
            <section className={styles.hero_text}>
              <h1> <FaBoltLightning style ={{color:'#e9ff0c'}}/> La plataforma de streaming del fútbol hiperdimensional <FaBoltLightning style ={{color:'#e9ff0c'}}/>
               </h1>
            </section>
            <section className={styles.hero_series_grid}>
              <CardSeries name ="Ares"  imgcard ={Ares}/>
              <CardSeries name ="Orion" imgcard = {Orion}/>
              <CardSeries name ="Original" imgcard ={OG} />
              <CardSeries name ="Go"  imgcard ={Go} />
              <CardSeries name ="Outer" imgcard ={Outer} />
              <CardSeries name ="Heroes" imgcard ={Heroes}/>
            </section>

        </section>
    </>
  )
}

export default Hero