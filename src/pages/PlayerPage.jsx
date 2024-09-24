import React from 'react'
import { useParams } from 'react-router-dom';
import Player from '../components/player/Player';

function PlayerPage() {
  const { episode } = useParams();
  return (
    <>
    <Player episode={episode} />
    </>
  )
}

export default PlayerPage