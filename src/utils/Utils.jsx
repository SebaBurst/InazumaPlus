import HeroOriginal from "../assets/heros/Original.png";
import HeroExplosivo from "../assets/heros/Explosivo.png";
import HeroAres from "../assets/heros/Ares.png";
import HeroOrion from "../assets/heros/orion.png";
import HeroGalaxy from "../assets/heros/galaxy.jpg";
import HeroChrono from "../assets/heros/chrono.jpg";
import HeroGo from "../assets/heros/go.png";
import HeroVentisca from "../assets/heros/ventisca.jpg";
import HeroFuego from "../assets/heros/fuego.jpg";
import HeroRayo from "../assets/heros/rayo.jpg";
import HeroOuter from "../assets/heros/outer.jpg";

import LogoAres from "../assets/logos/ares.png";
import LogoOriginal from "../assets/logos/oglogo.png";
import LogoOrion from "../assets/logos/orion.png";
import LogoGalaxy from "../assets/logos/galaxy.png";
import LogoChrono from "../assets/logos/chrono.png";
import LogoGo from "../assets/logos/go.png";
import LogoExplosivo from "../assets/logos/explosivo.png";
import LogoVentisca from "../assets/logos/ventisca.png";
import LogoFuego from "../assets/logos/fuego.png";
import LogoRayo from "../assets/logos/rayo.png";
import LogoOuter from "../assets/logos/outer.png";

export function getSeriesHero(serie) {
  let HeroImage = '';
  if (serie === 'Outer') {
    HeroImage = HeroOuter;
  }

  if (serie === 'Rayo') {
    HeroImage = HeroRayo;
  }
  if (serie === 'Fuego') {
    HeroImage = HeroFuego;
  }
  if (serie === 'Go') {
    HeroImage = HeroGo;
  }
  if (serie === 'Explosivo') {
    HeroImage = HeroExplosivo;
  }
  if (serie === 'Original') {
    HeroImage = HeroOriginal
  }
  if (serie === 'Orion') {
    HeroImage = HeroOrion
  }

  if (serie === 'Ares') {
    HeroImage = HeroAres
  }
  if (serie === 'Galaxy') {
    HeroImage = HeroGalaxy
  }
  if (serie === 'Chrono') {
    HeroImage = HeroChrono
  }
  if (serie === 'Ventisca') {
    HeroImage = HeroVentisca
  }
  return HeroImage;
}

export function getSeriesColor(serie) {
  let color = '#ea7e26';

  if (serie === 'Outer') {
    color = 'rgb(46 142 200)';
  }

  if (serie === 'Rayo') {
    color = 'rgb(97 196 80)'
  }
  if (serie === 'Original') {
    color = '#ea7e26'
  }
  if (serie === 'Fuego') {
    color = 'rgb(192 115 226)'
  }

  if (serie === 'Ventisca') {
    color = 'rgb(255 43 89)'
  }
  if (serie === 'Orion') {
    color = '#0e1d80'
  }
  if (serie === 'Go') {
    color = '#64bafe'
  }
  if (serie === 'Explosivo') {
    color = '#1a6a6b'
  }

  if (serie === 'Ares') {
    color = '#d39e07'
  }
  if (serie === 'Galaxy') {
    color = '#000f4d'
  }
  if (serie === 'Chrono') {
    color = '#45aa66'
  }
  return color;
}

export function getSeriesLogo(serie) {
  let LogoImage = '';
  if (serie === 'Outer') {
    LogoImage = LogoOuter;
  }
  if (serie === 'Original') {
    LogoImage = LogoOriginal
  }
  if (serie === 'Orion') {
    LogoImage = LogoOrion
  }
  if (serie === 'Go') {
    LogoImage = LogoGo
  }
  if (serie === 'Explosivo') {
    LogoImage = LogoExplosivo
  }
  if (serie === 'Ventisca') {
    LogoImage = LogoVentisca
  }

  if (serie === 'Ares') {
    LogoImage = LogoAres
  }
  if (serie === 'Galaxy') {
    LogoImage = LogoGalaxy
  }
  if (serie === 'Chrono') {
    LogoImage = LogoChrono
  }

  if (serie === 'Fuego') {
    LogoImage = LogoFuego
  }

  if(serie === 'Rayo'){
    LogoImage = LogoRayo
  }

  return LogoImage;
}
