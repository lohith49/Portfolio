import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
          
          <div className="about-content">            <div className="about-text" data-aos="fade-right">
              <p>
                I'm Lohith Kumar, a B.Tech Computer Science Engineering student at IIT Roorkee. 
                I'm passionate about competitive programming, machine learning, 
                and software development with expertise in building innovative solutions.
              </p>
              <p>
                During my internship at VISA, I gained valuable experience in building scalable 
                systems and working with real-world applications. My competitive programming journey 
                includes achievements on platforms like Codeforces (lohi_49) and CodeChef (junkie_cheff), 
                which has strengthened my algorithmic thinking and problem-solving skills.
              </p>
              <p>
                I've secured JEE Advanced rank 1114 and received the KVPY fellowship, demonstrating 
                my strong foundation in mathematics and science. My projects span from mobile app 
                development using Flutter to machine learning applications and system design.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>JEE Rank</h3>
                  <p>1114 (Advanced)</p>
                </div>
                <div className="stat">
                  <h3>Experience</h3>
                  <p>VISA Intern</p>
                </div>
                <div className="stat">
                  <h3>Achievements</h3>
                  <p>KVPY Fellowship</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
