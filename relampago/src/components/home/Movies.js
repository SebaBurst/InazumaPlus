import React from 'react'
import Ova from '../../assets/posters/grifo.jpg'
import danball from '../../assets/posters/danball.jpg'
import ogre from '../../assets/posters/ogre.jpg'
function goSeason(e, series) {
    e.preventDefault();
    window.location = '/episode/'+series;

  }
function Movies() {
  return (
    <div>
      <div className='title-grid'>
            <h1>¡Es hora de una pelicula! ¡Las peliculas de Inazuma Eleven Subtituladas al Español!</h1>
        </div>
        <div className='grid-container-movies'>


        <div>
            <div className='card-image-movie' onClick={(e) => goSeason(e, "Movie01")}>
                <img src={ogre}></img>
            </div>
        </div>
        <div>
            <div className='card-image-movie' onClick={(e) => goSeason(e, "Movie02")}>
                <img src={Ova}></img>
            </div>
        </div>


        <div>
            <div className='card-image-movie' onClick={(e) => goSeason(e, "Movie03")}>
                <img src={danball}></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Movies