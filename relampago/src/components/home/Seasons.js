import React from 'react'
import Orion from '../../assets/posters/orion.jpg'
import Ares from '../../assets/posters/ares.jpg'
import ventisca from '../../assets/posters/ventisca.jpg'
import og from '../../assets/posters/og.jpg'
import fuego from '../../assets/posters/fuego.jpg'
import rayo from '../../assets/posters/rayo.jpg'
import go from '../../assets/posters/go.jpg'
import chrono from '../../assets/posters/chrono.jpg'
import galaxy from '../../assets/posters/galaxy.jpg'
import explosivo from '../../assets/posters/explosivo.jpg'

function goSeason(e, series) {
    e.preventDefault();
    window.location = '/series/'+series;

  }
function Seasons() {
  return (
    <div>
        <div className='title-grid'>
            <h1>¡La saga completa de Inazuma Eleven Subtitulada al Español!</h1>
        </div>
        <div className='grid-container-seasons'>
        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Ares")}>
                <img src={Ares}></img>
            </div>
        </div>
        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Orion")}>
                <img src={Orion}></img>
            </div>
        </div>

        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Original")}>
                <img src={og}></img>
            </div>
        </div>

        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Ventisca")}>
                <img src={ventisca}></img>
            </div>
        </div>

        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Fuego")}>
                <img src={fuego}></img>
            </div>
        </div>


        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Rayo")}>
                <img src={rayo}></img>
            </div>
        </div>

        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Explosivo")}>
                <img src={explosivo}></img>
            </div>
        </div>

        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Go")}>
                <img src={go}></img>
            </div>
        </div>

        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Chrono")}>
                <img src={chrono}></img>
            </div>
        </div>
        <div>
            <div className='card-image-poster' onClick={(e) => goSeason(e, "Galaxy")}>
                <img src={galaxy}></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Seasons