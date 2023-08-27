import React from 'react'
import '../../css/home.css';
import Ares from '../../assets/ares.png'
import Ares_Hover from '../../assets/ares-hover.png'
import orion from '../../assets/orion.png'
import orion_Hover from '../../assets/orion-hover.png'
import go from '../../assets/go.png'
import go_Hover from '../../assets/go-hover.png'

import og from '../../assets/og.png'
import og_Hover from '../../assets/og-hover.png'

import outer from '../../assets/outer.png'
import outer_Hover from '../../assets/outer-hover.png'
import '../../css/series.css'
function goSeason(e, series) {
  e.preventDefault();
  window.location = '/series/'+series;

}
function GridSeries() {
  return (
    <div>
      <div className='grid-container-series'>
        <div>
          <div className='card-image' onClick={(e) => goSeason(e, "Ares")}>
            <img src={Ares}></img>
            <div className='hover-image'>
              <img src={Ares_Hover}></img>
            </div>
          </div>
        </div>
        <div>
          <div className='card-image' onClick={(e) => goSeason(e, "Orion")}>
            <img src={orion}></img>
            <div className='hover-image'>
              <img src={orion_Hover}></img>
            </div>
          </div>
        </div>

        <div>
          <div className='card-image' onClick={(e) => goSeason(e, "Go")}>
            <img src={go}></img>
            <div className='hover-image'>
              <img src={go_Hover}></img>
            </div>
          </div>
        </div>


        <div>
          <div className='card-image' onClick={(e) => goSeason(e, "Original")}>
            <img src={og}></img>
            <div className='hover-image'>
              <img src={og_Hover}></img>
            </div>
          </div>
        </div>


        <div>
          <div className='card-image' onClick={(e) => goSeason(e, "Outer")}>
            <img src={outer}></img>
            <div className='hover-image'>
              <img src={outer_Hover}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridSeries