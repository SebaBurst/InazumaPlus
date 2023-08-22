import React from 'react'
import lo from '../assets/lo.png'
import ball from '../assets/ball.gif'
import '../css/loading.css'

function LoadingScreen() {
  return (
    <div className='loadingBG'>
        <img src={lo}></img>
        <img src={ball}></img>
    </div>
  )
}

export default LoadingScreen