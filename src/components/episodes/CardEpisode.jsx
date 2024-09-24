import React, { useState } from 'react'
import styles from "../../styles/card.module.css"
import playIcon from '../../assets/play_icon.png'
import { useNavigate } from 'react-router-dom';


function CardEpisode({ title, image, id }) {
  const [isHovered, setIsHovered] = useState(false);


  const navigate = useNavigate();
  function goEpisode(e, episode) {
      e.preventDefault();
      navigate('/episode/'+episode);
  }

  
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <div className={`${styles.image_episode_single} ${isHovered ? styles.hovered : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={(e) => goEpisode(e, id)}
      >
        <img src={image} alt="card" />
        {isHovered && (
          <div className={styles.hover_overlayEpisode}>
            <img src={playIcon} alt="play" className={styles.play_icon} />
            <div className={styles.title_episode}>
              <a>{title}</a>
            </div>
            
          </div>
        )}
       
      </div>
    </>
  )
}

export default CardEpisode