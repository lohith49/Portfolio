import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJava, FaMobile } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiTailwindcss, SiSpringboot, SiPostgresql, SiDocker, SiFlutter, SiFirebase, SiTensorflow, SiDart, SiC } from 'react-icons/si'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'Voyager App',
      description: 'A comprehensive travel planning mobile application built with Flutter and Firebase. Features real-time location tracking, trip planning, expense management, and social sharing capabilities.',
      image: '/project1.jpg',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      category: 'mobile',
      github: 'https://github.com/lohith49/voyager-app',
      live: 'https://voyager-app-demo.com',
      icons: [<SiFlutter />, <SiDart />, <SiFirebase />]
    },
    {
      id: 2,
      title: 'Potato Disease Classifier',
      description: 'Machine learning project using CNN to classify potato plant diseases. Built with TensorFlow and deployed as a web application for farmers to identify crop diseases early.',
      image: '/project2.jpg',
      technologies: ['Python', 'TensorFlow', 'CNN', 'FastAPI'],
      category: 'ml',
      github: 'https://github.com/lohith49/potato-disease-classifier',
      live: 'https://potato-classifier-demo.com',
      icons: [<FaPython />, <SiTensorflow />]
    },
    {
      id: 3,
      title: 'DisCo App',
      description: 'A Discord-inspired communication platform with real-time messaging, voice channels, and community features. Built using modern web technologies with scalable architecture.',
      image: '/project3.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/lohith49/disco-app',
      live: 'https://disco-app-demo.com',
      icons: [<FaReact />, <FaNodeJs />, <SiMongodb />]
    },
    {
      id: 4,
      title: 'RISC-V Simulator',
      description: 'A complete RISC-V processor simulator implementing the instruction set architecture. Features pipeline simulation, memory management, and debugging capabilities for educational purposes.',
      image: '/project4.jpg',
      technologies: ['C++', 'Assembly', 'Computer Architecture'],
      category: 'systems',
      github: 'https://github.com/lohith49/riscv-simulator',
      live: 'https://riscv-simulator-demo.com',
      icons: [<SiC />]
    },    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite. Features dark/light mode, smooth animations, and contact form integration.',
      image: '/project2.jpg',
      technologies: ['React', 'Vite', 'Framer Motion', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com/lohith49/portfolio',
      live: 'https://lohith-kumar-portfolio.com',
      icons: [<FaReact />]
    }
  ]
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'systems', name: 'Systems' },
    { id: 'algorithms', name: 'Algorithms' },
    { id: 'frontend', name: 'Frontend' }

  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Here are some of my recent works
          </p>

          <div className="project-filters" data-aos="fade-up" data-aos-delay="200">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div 
            className="projects-grid"
            layout
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View source code"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    <div className="tech-icons">
                      {project.icons.map((icon, iconIndex) => (
                        <span key={iconIndex} className="tech-icon">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
