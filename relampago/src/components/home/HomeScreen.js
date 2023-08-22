import React from 'react'
import Banner from '../banner/Banner'
import Home from './Home'
import GridSeries from './GridSeries'
import Seasons from './Seasons'
import Movies from './Movies'

function HomeScreen() {
  return (
    <div>
        <Banner/>
        <Home/>
        <GridSeries/>
        <Seasons/>
        <Movies/>
    </div>
  )
}

export default HomeScreen