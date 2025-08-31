import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { SiCodeforces, SiCodechef } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">          <div className="footer-section">
            <h3>Lohith Kumar</h3>
            <p>Computer Science Engineering student at IIT Roorkee. Passionate about competitive programming, machine learning, and building innovative software solutions.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Me</h4>            <div className="footer-social">
              <a href="https://github.com/lohith49" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
            </div>
          </div>
        </div>        <div className="footer-bottom">
          <p>
            © {currentYear} Lohith Kumar. Made with <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
