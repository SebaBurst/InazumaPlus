import React from 'react'
import '../../css/episodes.css'
function goEpisode(e, idEpisode) {
    e.preventDefault();
    window.location = '/episode/'+idEpisode ;

  }
function EpisodeCard({image, idEpisode, idvideo, provedor, titleEpisode}) {
  return (
    <div>
        <div className='image-episode' onClick={(e) => goEpisode(e, idEpisode)}>
            <img src={image}></img>
            <div className='hover-episode'>
              <p>{titleEpisode}</p>
            </div>
        </div>
    </div>
  )
}

export default EpisodeCard