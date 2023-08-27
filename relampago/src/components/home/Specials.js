import React from 'react'
import ova from '../../assets/posters/ova.jpg'
import outer from '../../assets/posters/outer.jpg'
function goSeason(e, series) {
    e.preventDefault();
    window.location = '/episodes/'+series;

  }
function Specials() {
    return (
        <div>
            <div className='title-grid'>
                <h1>¡Episodios especiales!</h1>
            </div>
            <div className='grid-container-seasons'>
                <div>
                    <div className='card-image-poster' onClick={(e) => goSeason(e, "ova01")}>
                        <img src={ova}></img>
                    </div>
                </div>
                <div>
                    <div className='card-image-poster' onClick={(e) => goSeason(e, "Orion")}>
                        <img src={outer}></img>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Specials