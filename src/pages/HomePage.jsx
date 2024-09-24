import React from 'react'
import Hero from '../components/home/Hero'
import Banner from '../components/Banner'
import SeasonContainer from '../components/home/SeasonContainer'
import SeasonGoContainer from '../components/home/SeasonGoContainer'
import SeasonOrionContainer from '../components/home/SeasonOrionContainer'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div style={{backgroundColor:'#0a0e7a'}}>
        <Banner />
        <Hero />
        <SeasonContainer/>
        <SeasonGoContainer/>
        <SeasonOrionContainer/>
        <Footer />
    </div>
  )
}

export default HomePage