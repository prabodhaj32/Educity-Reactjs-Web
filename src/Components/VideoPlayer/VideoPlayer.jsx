import React, { useEffect, useRef } from 'react';
import './VideoPlayer.css';
import { motion, AnimatePresence } from 'framer-motion';
import video from '../../assets/college-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (playState && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [playState]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && playState) {
        setPlayState(false);
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setPlayState(false);
      }
    };

    if (playState) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [playState, setPlayState]);

  return (
    <AnimatePresence>
      {playState && (
        <motion.div
          className="Video-Player"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={modalRef}
            className="video-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="close-btn"
              onClick={() => setPlayState(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close video"
            >
              ×
            </motion.button>
            <video
              ref={videoRef}
              src={video}
              controls
              className="video-element"
              onEnded={() => setPlayState(false)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPlayer;
