import React from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`Video-Player ${playState ? '' : 'hide'}`}>
      <video 
        src={video} 
        autoPlay 
        muted 
        controls 
        className="video-element"
      ></video>
    </div>
  );
};

export default VideoPlayer;
