import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaDatabase,
  FaJava
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiExpress, 
  SiTailwindcss,
  SiNextdotjs,
  SiVite,  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSpringboot,
  SiCplusplus,
  SiFlutter,
  SiFirebase,
  SiCodeforces,
  SiCodechef
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {  const skills = [
    { icon: <SiCplusplus />, name: 'C++', level: 95 },
    { icon: <FaPython />, name: 'Python', level: 90 },
    { icon: <FaJava />, name: 'Java', level: 85 },
    { icon: <FaJsSquare />, name: 'JavaScript', level: 88 },
    { icon: <SiFlutter />, name: 'Flutter', level: 90 },
    { icon: <FaReact />, name: 'React', level: 85 },
    { icon: <SiFirebase />, name: 'Firebase', level: 88 },
    { icon: <FaDatabase />, name: 'Machine Learning', level: 85 },
    { icon: <SiMysql />, name: 'MySQL', level: 85 },
    { icon: <FaGitAlt />, name: 'Git', level: 90 },
    { icon: <SiCodeforces />, name: 'Competitive Programming', level: 88 }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Here are some of the technologies I work with
          </p>
          
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
