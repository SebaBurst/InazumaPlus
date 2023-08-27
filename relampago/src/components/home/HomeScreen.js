import React from 'react'
import Banner from '../banner/Banner'
import Home from './Home'
import GridSeries from './GridSeries'
import Seasons from './Seasons'
import Movies from './Movies'
import Footer from '../Footer'
import BannerHide from '../banner/BannerHide'
import Specials from './Specials'

function HomeScreen() {
  return (
    <div>
        <Banner/>
        <BannerHide/>
        <Home/>
        <GridSeries/>
        <Seasons/>
        <Movies/>
        <Specials/>
        <Footer/>
    </div>
  )
}

export default HomeScreen