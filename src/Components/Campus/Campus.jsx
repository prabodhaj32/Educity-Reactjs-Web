import React from 'react';
import './Campus.css';
import { motion } from 'framer-motion';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';
import { useTheme } from '../../context/ThemeContext';

const Campus = () => {
  const { isDarkMode } = useTheme();
  const images = [gallery_1, gallery_2, gallery_3, gallery_4];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className={`campus ${isDarkMode ? 'dark-mode' : ''}`}
      id="campus"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="gallery">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Campus gallery ${index + 1}`}
            variants={imageVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="gallery-image"
          />
        ))}
      </div>
      <motion.button
        className="btn dark-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        onClick={() => {
          // Scroll to gallery section or could navigate to a dedicated gallery page
          const gallerySection = document.getElementById('campus');
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="View more campus photos"
      >
        See more here <img src={white_arrow} alt="" aria-hidden="true" />
      </motion.button>
    </motion.section>
  );
};

export default Campus;