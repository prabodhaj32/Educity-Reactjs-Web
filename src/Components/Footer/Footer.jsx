import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.footer
      className={`footer ${isDarkMode ? 'dark-mode' : ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        © 2024 Edusity. All rights reserved
      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Terms of Services
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Privacy Policy
        </motion.li>
      </motion.ul>
    </motion.footer>
  );
};

export default Footer;