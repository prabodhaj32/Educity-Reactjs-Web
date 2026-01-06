import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import dark_arrow from '../../assets/dark-arrow.png';
import play_icon from '../../assets/play-icon.png';

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      className="hero"
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating gradient shapes */}
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Background overlay layers */}
      <div className="hero-overlay" />
      
      {/* Content wrapper */}
      <div className="hero-content">
        {/* Glassmorphism content container */}
        <motion.div 
          className="hero-glass-container" 
          variants={itemVariants}
        >
          <div className="hero-text">
            <motion.h1 variants={itemVariants}>
              Empowering Minds.<br />
              <span className="gradient-text">Shaping the Future.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants}>
              World-class education for tomorrow's leaders. Join Edusity University and 
              unlock your potential in a dynamic, innovative learning environment.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div className="hero-cta-group" variants={itemVariants}>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link to="program" smooth={true} offset={-100} duration={500}>
                  <button className="btn hero-btn-primary" aria-label="Explore our programs">
                    Explore Programs
                    <img src={dark_arrow} alt="" aria-hidden="true" />
                  </button>
                </Link>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link to="about" smooth={true} offset={-100} duration={500}>
                  <button className="btn hero-btn-secondary" aria-label="Learn more about Edusity">
                    <img src={play_icon} alt="" aria-hidden="true" />
                    Watch Video
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="scroll-mouse"
            animate={{
              y: [0, 8, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="scroll-wheel" />
          </motion.div>
          <span className="scroll-text">Scroll to explore</span>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
