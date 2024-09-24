import React from 'react'
import styles from "../styles/hero.module.css"
import { FaBoltLightning } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import { useNavigate } from 'react-router-dom';


function Banner() {
  const navigate = useNavigate();
  function goHome(e) {
    e.preventDefault();
   navigate('/');
  }
  return (
    <div className={styles.banner_bg}>
      <h2 onClick={(e)=> goHome(e)}>INAZUMA  <FaBoltLightning style ={{color:'#e9ff0c'}}/> PLUS</h2>
      <section className={styles.banner_buttons}>
        <a href='https://www.youtube.com/@inazumaeleven-aresorion9860'> <FaYoutube/> Youtube</a>
        <a href='https://x.com/ielevenplus'><FaSquareXTwitter /> Redes Sociales</a>
        <a href='https://ko-fi.com/inazumaelevenplus'> <SiKofi/> Donar a la página</a>
      </section>
    </div>
  )
}

export default Banner