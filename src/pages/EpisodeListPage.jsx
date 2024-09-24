import React from 'react'
import Banner from '../components/Banner'
import GridEpisodes from '../components/episodes/GridEpisodes'
import { useParams } from 'react-router-dom';
import HeroEpisode from '../components/episodes/HeroEpisode';
import Footer from '../components/Footer';

function EpisodeListPage() {
  const { serie } = useParams(); 
  return (
    <div>
        <Banner />
        <HeroEpisode serie={serie}/>
        <GridEpisodes serie={serie}/>
        <Footer />
    </div>
  )
}

export default EpisodeListPage