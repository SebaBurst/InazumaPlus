import React, { useEffect, useState } from 'react'
import { getEpisode } from '../../services/Api';
import styles from '../../styles/player.module.css';
import { useNavigate } from 'react-router-dom';
import { getSeriesLogo } from '../../utils/Utils';
import { BiSolidVideos } from "react-icons/bi";
import { GrCaretNext } from "react-icons/gr";


function Player({ episode }) {
    const navigate = useNavigate();
    const modifiedString = episode.replace(/\d+$/, '');
    const [episodeVideo, setEpisodeVideo] = useState(null);
    const [hovered, setHovered] = useState(false);
    let logo = getSeriesLogo(modifiedString);

    useEffect(() => {
        const episodeSearch = getEpisode(modifiedString, episode);
        setEpisodeVideo(episodeSearch);
    }, [episode]);

    function goSeason(e, series) {
        e.preventDefault();
        navigate('/series/' + series);
    }

    function nextEpisode(e, next) {
        e.preventDefault();
        navigate('/episode/' + next);
    }

    return (
        <>
            {episodeVideo ? (
                <div className={styles.player_bg}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <iframe src={episodeVideo.idvideo} frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="100%" allowfullscreen='true'></iframe>

                    {hovered && (
                        <div className={styles.hoverOverlay}>
                            <div className={styles.hoverLogo}>
                                <img src={logo} alt="logo" />
                                <h1>{episodeVideo.nombre}</h1>
                                <a className={styles.playButton}
                                    onClick={(e) => nextEpisode(e, episodeVideo.next)}
                                >
                                    Siguiente Episodio  <GrCaretNext /></a>
                                <a className={styles.playButton}
                                    onClick={(e) => goSeason(e, modifiedString)}
                                ><BiSolidVideos /> Ver más episodios</a>
                            </div>

                        </div>
                    )}

                </div>



            ) : (
                <div>

                </div>
            )}

        </>
    )
}

export default Player