import React, { useState } from 'react'
import styles from '../../styles/card.module.css'
import playIcon from '../../assets/play_icon.png'
import { useNavigate } from 'react-router-dom';

function CardSeason({ name, cover }) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    function goSeason(e, series) {
        e.preventDefault();
        navigate('/series/'+series);
    }   
    const toggleHover = () => {
        setIsHovered(!isHovered);
    };
    return (
        <>
            <div className={`${styles.image_episode} ${isHovered ? styles.hovered : ''}`}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                onClick={(e) => goSeason(e, name)}
                >
                <img src={cover} alt="card" />
                {isHovered && (
                    <div className={styles.hover_overlay}>
                        <img src={playIcon} alt="play" className={styles.play_icon} />
                    </div>
                )}
            </div>
        </>
    )
}

export default CardSeason