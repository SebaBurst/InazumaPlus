import React, { useState } from 'react';
import '../../css/episodes.css'
function goEpisode(e, idEpisode) {
    e.preventDefault();
    window.location = '/episode/'+idEpisode ;

  }
  function EpisodeCard({ image, idEpisode, idvideo, provedor, titleEpisode }) {
    const [isHovered, setIsHovered] = useState(false);
  
    const toggleHover = () => {
      setIsHovered(!isHovered);
    };
  
    return (
      <div className='card-episode'>
        <div
          className={`image-episode ${isHovered ? 'hovered' : ''}`}
          onClick={(e) => goEpisode(e, idEpisode)}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <img src={image} alt="Episode" />
          {isHovered && (
            <div className='hover-overlay'>
              <img src='https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-15.png' alt='Play Icon' />
            </div>
          )}
        </div>
        <p>{titleEpisode}</p>
      </div>
    );
  }

export default EpisodeCard