import React, { useState, useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import '../css/plyr-custom.css'
import ReactPlayer from 'react-player'
import PlayerControls from './PlayerControls';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Video({ provedor, videoId }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0); // Estado para el progreso
  const [seeking, setSeeking] = useState(false); // Estado para controlar si se está buscando
  const [isFullscreen, setIsFullscreen] = useState(false); // Estado para pantalla completa
  const [duration, setDuration] = useState(0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const playerRef = useRef(null);
  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };
  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handlePauseButtonClick = () => {
    setIsPlaying(false);
  };


  const handleProgress = (progress) => {
    if (!seeking) {
      setPlayed(progress.played);
      setCurrentTime(progress.playedSeconds); // Actualiza el tiempo actual en segundos
    }
  };


  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const handleSliderChange = (value) => {
    setPlayed(value);
    playerRef.current.seekTo(value);
  };

  const handleSliderSeekStart = () => {
    setSeeking(true);
  };

  const handleSliderSeekEnd = (value) => {
    setSeeking(false);
    setPlayed(value);
    playerRef.current.seekTo(value);
  };


  const handleFullscreen = () => {
    const player = playerRef.current.getInternalPlayer();

    if (!isFullscreen) {
      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };
  const [volume, setVolume] = useState(1); // Estado del volumen

  const handleVolumeChange = (value) => {
    setVolume(value);
  };
  const handleVideoEnded = () => {
    setIsPlaying(false); // Detener la reproducción cuando el video llega al final
  };


  return (
    <div className='app'>
      <div className="video-container">
        <ReactPlayer
          onEnded={handleVideoEnded}

          ref={playerRef}
          url={videoId}
          playing={isPlaying}
          height='65vh'
          width='100%'
          loop={true}
          volume={volume}

          onDuration={handleDuration}

          onProgress={handleProgress}
          controls={false} // Deshabilitar los controles del reproductor por defecto
        />
        <div className="overlay2">
          {isPlaying ? (
            <button onClick={handlePauseButtonClick}><img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cdefs%3E%3Cstyle%3E.white%7Bfill%3A%23fff%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22white%22%20d%3D%22M14%2C2a2.074%2C2.074%2C0%2C0%2C1%2C2%2C2V16a2.074%2C2.074%2C0%2C0%2C1-2%2C2%2C2.074%2C2.074%2C0%2C0%2C1-2-2V4A2.074%2C2.074%2C0%2C0%2C1%2C14%2C2ZM6%2C2A2.074%2C2.074%2C0%2C0%2C1%2C8%2C4V16a2.074%2C2.074%2C0%2C0%2C1-2%2C2%2C2.074%2C2.074%2C0%2C0%2C1-2-2V4A2.074%2C2.074%2C0%2C0%2C1%2C6%2C2Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'></img></button>
          ) : (
            <button onClick={handlePlayButtonClick}><img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cdefs%3E%3Cstyle%3E.white%7Bfill%3A%23fff%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22white%22%20d%3D%22M3%2C4.606C3%2C2.253%2C4.636%2C1.324%2C6.641%2C2.524l8.853%2C5.3c2.011%2C1.2%2C2%2C3.157%2C0%2C4.357l-8.853%2C5.3C4.63%2C18.676%2C3%2C17.748%2C3%2C15.391Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'></img></button>
          )}
          <div className="slider-container-volume-overlay">
            <button onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
              <img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cdefs%3E%3Cstyle%3E.white%7Bfill%3A%23fff%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22white%22%20d%3D%22M10.012%2C12V8a2.275%2C2.275%2C0%2C0%2C1%2C2%2C1.986A2.3%2C2.3%2C0%2C0%2C1%2C10.012%2C12Zm-6-5%2C5-3V16l-5-3H2V6.969Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'></img>
            </button>
            {showVolumeSlider && (
              <div className="slider-container-volume">
                <Slider
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  width='50px'
                  onChange={handleVolumeChange}
                  trackStyle={{ backgroundColor: '#ffffff', height: 5, cursor: 'pointer' }}
                  handleStyle={{ backgroundColor: '#f47521', height: 15, width: 15, marginLeft: 0, marginTop: -5, cursor: 'pointer' }}
                  railStyle={{ backgroundColor: 'gray', height: 5, cursor: 'pointer' }}
                />
              </div>
            )}
          </div>

          <div className="slider-container">
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={played}
              onChange={handleSliderChange}
              onBeforeChange={handleSliderSeekStart}
              onAfterChange={handleSliderSeekEnd}
              trackStyle={{ backgroundColor: '#f47521', height: 10, cursor: 'pointer' }}
              handleStyle={{ borderColor: '#f47521', height: 20, width: 20, marginLeft: 0, marginTop: -5, cursor: 'pointer' }}
              railStyle={{ backgroundColor: 'gray', height: 10, cursor: 'pointer' }}
            />
          </div>

          <div className='time-slider'>
            <p>{formatTime(currentTime)}</p>
          </div>

          <button onClick={handleFullscreen}>
            {isFullscreen ? <img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cdefs%3E%3Cstyle%3E.white%7Bfill%3A%23fff%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22white%22%20d%3D%22M10%2C18H2V10H4.4v4l4-4L10%2C11.6l-4%2C4h4ZM10%2C2h8v8H15.6V6l-4%2C4L10%2C8.4l4-4H10Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'></img> : <img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cdefs%3E%3Cstyle%3E.white%7Bfill%3A%23fff%3Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22white%22%20d%3D%22M10%2C18H2V10H4.4v4l4-4L10%2C11.6l-4%2C4h4ZM10%2C2h8v8H15.6V6l-4%2C4L10%2C8.4l4-4H10Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'></img>}
          </button>
        </div>
      </div>

    </div >



  )
}

export default Video