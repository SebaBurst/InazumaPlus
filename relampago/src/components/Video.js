import React from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import '../css/plyr-custom.css'



function Video({provedor, videoId}) {
    const videoSrc = {
        type: 'video',
        title: 'Example title',
        sources: [
          {
            src: videoId,
            type: 'video/mp4',
            size: 720,
          },
        ],
      
    };
    return (
        <div className='inazuma-player'>
            <Plyr source={videoSrc} />

        </div>
    )
}

export default Video