import React, { useEffect, useState } from 'react'
import styles from "../../styles/episodes.module.css"
import { getEpisodesList } from '../../services/Api'
import CardEpisode from './CardEpisode';
import { FaBoltLightning } from "react-icons/fa6";
import { getSeriesColor } from '../../utils/Utils';

function GridEpisodes({ serie }) {
    const [episodes, setEpisodes] = useState([]);
    let color = getSeriesColor(serie);


    useEffect(() => {
       const getEpisodes = getEpisodesList(serie);
       setEpisodes(getEpisodes);
    }, [serie]);



    return (
        <div className={styles.containerEpisodes}>
            <div className={styles.containerEpisodes_bg}>
            <h1> <FaBoltLightning style ={{color:'#e9ff0c'}}/> Lista de episodios <FaBoltLightning style ={{color:'#e9ff0c'}}/> </h1>

                <div className={styles.episodes_grid} style={{ backgroundColor: `${color}` }} >
                    {episodes.map((episode) => (
                        <CardEpisode key={episode.id} title={episode.nombre} image={episode.imagen} id={episode.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GridEpisodes