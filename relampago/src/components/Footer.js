import React from 'react'
import '../css/footer.css'
import Logo from '../assets/logo.png'
function Footer() {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className='footer-bottom'>
          <div className='logos-footer'>
            <img class="mr-lg-5" src="https://www.inazuma.jp/victory-road/assets/img/shared/img_logo_l5_f.svg" style={{width: "5%", userSelect:'none'}} />
            <img class="mr-lg-5" src={Logo} alt="" style={{
              width: '8%',
              height: '130px',
              userSelect:'none'
            }} />



          </div>
        </div>
        <div className='footer-top'>
          <p>Copyright © 2023 Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}


export default Footer