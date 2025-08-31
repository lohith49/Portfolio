import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
            Portfolio
          </a>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => handleLinkClick(e, 'home')}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={(e) => handleLinkClick(e, 'about')}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={(e) => handleLinkClick(e, 'skills')}>
            Skills
          </a>
          <a href="#projects" className="nav-link" onClick={(e) => handleLinkClick(e, 'projects')}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleLinkClick(e, 'contact')}>
            Contact
          </a>
        </div>

        <div className="nav-controls">
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
