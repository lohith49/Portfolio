import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaDownload } from 'react-icons/fa'
import { SiCodechef, SiCodeforces } from 'react-icons/si'
import './Hero.css'

const Hero = () => {  const handleDownloadResume = () => {
    // Download Lohith's resume
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Lohith_Kumar_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Lohith Kumar</span>          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Engineering Student | Competitive Programmer          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            B.Tech CSE student at IIT Roorkee with expertise in competitive programming, 
            machine learning, and software development. VISA intern with strong algorithmic 
            problem-solving skills and passion for building innovative solutions.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <button onClick={handleDownloadResume} className="btn btn-secondary">
              <FaDownload /> Download Resume
            </button>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >            <a href="https://github.com/lohith49" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lohith-kumar-vangapandu-44036b259/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://codeforces.com/profile/lohi_49" target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
              <SiCodeforces />
            </a>
            <a href="https://codechef.com/users/junkie_cheff" target="_blank" rel="noopener noreferrer" aria-label="CodeChef">
              <SiCodechef />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-avatar">
            <img src="/profile-image.jpg" alt="Profile" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
