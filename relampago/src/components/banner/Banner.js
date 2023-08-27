import React from 'react'
import '../../css/banner.css'
import Logo from '../../assets/logotipo.png'


function goSeason(e) {
  e.preventDefault();
  window.location = '/';

}
function Banner() {
  return (
    <div className='banner-bg' onClick={goSeason}>
      <div class="logo">
        <img src={Logo}></img>

      </div>
      <div class="nav_items">
      
      </div>
    </div>
  )
}

export default Banner

