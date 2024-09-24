import React from 'react'
import styles from '../styles/hero.module.css'

function Footer() {
  return (
    <footer className={styles.footer_bg}>
        <div className={styles.footer_container}>
            <div className={styles.footer_bottom}>
                <div className={styles.logos_footer}>
                    <img className={styles.mr_lg_5} src="https://www.inazuma.jp/victory-road/assets/img/shared/img_logo_l5_f.svg" style={{width: "25%", userSelect:'none'}} />
                </div>
            </div>
            <div className={styles.footer_top}>
                <p>Copyright © 2023 - 2024 Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer