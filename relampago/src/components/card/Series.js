import React from 'react'
import Ares from '../../assets/ares.png'
import Ares_Hover from '../../assets/ares-hover.png'
import '../../css/series.css'

function series({image}) {
    let imageCardHover ="../../assets/"+image+"-hover.png"
    let imageCard ='../../assets/'+image+'.png' 
    const imagen = 'public/assets/ares-hover.png'
    console.log(image)
    return (
        <div>
            <div className='card-image'>
                <img src={imagen}></img>
                <div className='hover-image'>
                    <img src={imageCardHover}></img>
                </div>
            </div>



        </div>
    )
}

export default series