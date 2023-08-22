import React from 'react'
import '../../css/episodes.css'
function InfoSerie({logo, fondo, sinopsis}) {
    const divStyle = {
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
      };
    return (
        <div className='bg-serie' style={divStyle}>
            <div className='bg-info'>
                <div className='logo-serie'>
                    <img src={logo}></img>
                </div>
                <div className='info-serie-anime'>
                    <div className='resume-serie'>
                        <p>{sinopsis}</p>
                    </div>
                    <div className='container-serie'>
                        Comenzar a Ver.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoSerie