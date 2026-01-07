import React from 'react';
import './Programs.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import programsData from '../../data/programs.json';

const Programs = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleProgramClick = (programId) => {
    navigate(`/programs/${programId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className={`programs ${isDarkMode ? 'dark-mode' : ''}`}
      id="program"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {programsData.map((program) => (
        <motion.div
          key={program.id}
          className="program"
          variants={cardVariants}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleProgramClick(program.id)}
          style={{ cursor: 'pointer' }}
        >
          <motion.img
            src={program.image}
            alt={program.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="caption"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={program.icon}
              alt=""
              initial={{ scale: 0, rotate: -180 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <p>{program.type}</p>
            <span className="program-description">{program.description}</span>
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Programs;