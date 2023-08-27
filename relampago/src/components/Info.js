import React from 'react'
import '../css/plyr-custom.css' 
function goEpisode(e, idEpisode) {
    e.preventDefault();
    window.location = '/episode/'+idEpisode ;

  }
function Info({next, imagen, title, sinopsis}) {
    return (
        <div>
            <div className='information-section'>
                <div className='info-anime'>
                    <div className='serie-name'>
                        <p>Inazuma Eleven Ares</p>
                    </div>
                    <div className='cap-name'>
                        <h1>{title}</h1>
                    </div>
                    <div className='description'>
                        <p>{sinopsis}</p>
                    </div>
                </div>
                <div className='next-episode'  onClick={(e) => goEpisode(e, next)}>
                    <p>Siguiente Episodio</p>
                    <img src={imagen}></img>
                </div>
            </div>


        </div>
    )
}

export default Info