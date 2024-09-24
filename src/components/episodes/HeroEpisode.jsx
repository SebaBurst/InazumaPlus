import React, {useState, useEffect} from 'react'
import styles from '../../styles/episodes.module.css'
import { getSeries } from '../../services/Api'
import { IoFootball } from "react-icons/io5";
import { getSeriesHero, getSeriesLogo } from '../../utils/Utils';
import { useNavigate } from 'react-router-dom';


function HeroEpisode({ serie }) {
  const navigate = useNavigate();
  const [series, setSeries] = useState([]);
  let HeroImage = getSeriesHero(serie);
  let LogoImage = getSeriesLogo(serie);

  useEffect(() => {
    setSeries(getSeries(serie));
  }, [serie]);

  function goToFirstEpisode(e) {
    e.preventDefault();
    navigate('/episode/'+serie+"01");
  }


  return (
    <div className={styles.episode_hero_background}>
      <div className={styles.image_container}>
        <img src={HeroImage} alt="Imagen con borde difuminado" />
        <div className={styles.hero_blur}>
          <div className={styles.hero_text}>
            <img src={LogoImage} alt="Logo de Inazuma Eleven"  style={{width:'50%', marginLeft:'23%'}}/>
            <p>{series.sinopsis}</p>
            <a onClick={(e)=> goToFirstEpisode(e)}><IoFootball/> Mirar desde el episodio 1</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroEpisode