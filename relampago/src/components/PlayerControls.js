import React from "react";
import Slider from '@mui/material/Slider'
import {Button, Tooltip, Popover, Grid} from '@mui/material'
import { FastForward, FastRewind, Pause, PlayArrow, SkipNext, VolumeUp, VolumeOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';





const PlayerControls= ({
  onPlayPause,
  playing,
  onRewind,
  onForward,
  played,
  onSeek,
  onSeekMouseUp,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  volume,
  mute,
  onMute,
  duration,
  currentTime,
  onMouseSeekDown,
  controlRef
}) => {


  return (
    
    <div className="control_Container" ref ={controlRef}>
      <div className="top_container">
        <h2>Video PLayer</h2>
      </div>
      <div className="mid__container">
        <div className="icon__btn" onDoubleClick={onRewind}>
          <FastRewind fontSize="medium" />
        </div>

        <div className="icon__btn" onClick={onPlayPause}>
          {playing ? (
            <Pause fontSize="medium" />
          ) : (
            <PlayArrow fontSize="medium" />
          )}{" "}
        </div>

        <div className="icon__btn">
          <FastForward fontSize="medium" onDoubleClick={onForward} />
        </div>
      </div>
      <div className="bottom__container">
        <div className="slider__container">
    
        </div>
        <div className="control__box">
          <div className="inner__controls">
            <div className="icon__btn" onClick={onPlayPause}>
              {playing ? (
                <Pause fontSize="medium" />
              ) : (
                <PlayArrow fontSize="medium" />
              )}{" "}
            </div>

            <div className="icon__btn">
              <SkipNext fontSize="medium" />
            </div>

            <div className="icon__btn" onClick={onMute}>
            {mute ? (
                  <VolumeOff fontSize="medium" />
                ) : (
                  <VolumeUp fontSize="medium" />
                )}
            </div>

            <Slider
              onChange={onVolumeChangeHandler}
              value={volume * 100}
              onChangeCommitted={onVolumeSeekUp}
            />

            <span>{ currentTime} : {duration}</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default PlayerControls