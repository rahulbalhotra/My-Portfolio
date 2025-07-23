import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DataIcon, MusicIcon, DesignIcon } from '../threejs/PersonaIcons';

const IconCanvas = ({ children }) => (
  <div className="h-32">
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        {children}
      </Suspense>
    </Canvas>
  </div>
);

const PersonaIcon = ({ active, IconComponent, title, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`cursor-pointer p-4 rounded-lg ${
      active ? 'bg-primary-light text-primary-dark' : 'bg-primary-medium hover:bg-primary-medium/80'
    }`}
  >
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <IconCanvas>
      <IconComponent />
    </IconCanvas>
  </motion.div>
);

const PersonaContent = ({ title, description, achievements }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="mt-8"
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-text-secondary mb-6">{description}</p>
    <div className="space-y-4">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start"
        >
          <span className="text-primary-light mr-2">•</span>
          <p>{achievement}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  const [activePersona, setActivePersona] = useState('data');

  const personas = {
    data: {
      title: "Data Scientist",
      description: "With over 3 years of experience in data science and AI, I specialize in developing scalable AI solutions and implementing advanced machine learning models.",
      achievements: [
        "Led customer segmentation project with 5M+ records achieving 90%+ accuracy",
        "Developed AI strategy identifying 100+ AI solutions for a Med-Tech company",
        "Created RAG-based contract assistant saving 40+ hrs/week",
        "Orchestrated digital transformation increasing operational efficiency by 26%"
      ]
    },
    music: {
      title: "Music Producer (Sinetist)",
      description: "As Sinetist, I create electronic music that blends complex rhythms with atmospheric soundscapes, pushing the boundaries of digital audio production.",
      achievements: [
        "Released original tracks on major streaming platforms",
        "Developed unique sound design techniques",
        "Collaborated with international artists",
        "Created custom sound libraries and presets"
      ]
    },
    design: {
      title: "Designer",
      description: "I specialize in creating visually striking music posters that capture the essence of sound through design, combining typography, imagery, and motion.",
      achievements: [
        "Designed promotional materials for music events",
        "Created album artwork for independent artists",
        "Developed unique visual style combining music and design",
        "Built a portfolio of dynamic music-inspired designs"
      ]
    }
  };

  return (
    <section id="about" className="min-h-screen bg-primary-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <PersonaIcon
            active={activePersona === 'data'}
            IconComponent={DataIcon}
            title="Data Scientist"
            onClick={() => setActivePersona('data')}
          />
          <PersonaIcon
            active={activePersona === 'music'}
            IconComponent={MusicIcon}
            title="Music Producer"
            onClick={() => setActivePersona('music')}
          />
          <PersonaIcon
            active={activePersona === 'design'}
            IconComponent={DesignIcon}
            title="Designer"
            onClick={() => setActivePersona('design')}
          />
        </div>

        <PersonaContent {...personas[activePersona]} />
      </div>
    </section>
  );
};

export default About; 