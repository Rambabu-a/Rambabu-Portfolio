import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Hash, Award, Calendar, MapPin } from 'lucide-react';
import SkillBadge from '../components/SkillBadge';

const About = () => {
  const skills = [
    { name: 'React.js' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'AI/ML' },
    { name: 'TensorFlow' },
    { name: 'PyTorch' },
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
    { name: 'AWS' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'Next.js' },
    { name: 'Express' },
    { name: 'GraphQL' }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechInnovate Solutions',
      period: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      description: 'Lead development of AI-powered web applications, mentoring junior developers, and architecting scalable solutions.',
      achievements: [
        'Built 5+ AI-integrated applications serving 10K+ users',
        'Reduced application load time by 40% through optimization',
        'Led a team of 4 developers on critical projects'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Dynamics',
      period: 'Jun 2021 - Dec 2022',
      location: 'Austin, TX',
      description: 'Developed and maintained multiple web applications using React, Node.js, and modern deployment practices.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Integrated third-party APIs and payment systems',
        'Improved code quality through test-driven development'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      period: 'Aug 2020 - May 2021',
      location: 'Remote',
      description: 'Started career focusing on frontend development and learning modern web technologies.',
      achievements: [
        'Built responsive websites using React and CSS frameworks',
        'Collaborated with design teams on UI/UX implementation',
        'Participated in agile development processes'
      ]
    }
  ];

  const achievements = [
    {
      title: 'AI Innovation Award',
      organization: 'TechConf 2024',
      date: 'Nov 2024',
      description: 'Recognized for outstanding contribution to AI-powered web development',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      title: 'Open Source Contributor',
      organization: 'React Community',
      date: 'Ongoing',
      description: 'Active contributor to React ecosystem with 500+ GitHub stars',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713'
    },
    {
      title: 'Tech Speaker',
      organization: 'DevConf 2024',
      date: 'Sep 2024',
      description: 'Speaker at major tech conference on "Future of AI in Web Development"',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate developer crafting the future of web applications through AI integration and innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                  alt="Alex Chen"
                  className="w-full max-w-lg mx-auto rounded-2xl border border-white/10 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-2xl" />
              </div>
              
              <div className="mt-8 text-center lg:text-left">
                <h2 className="text-2xl font-bold mb-4 text-white">Alex Chen</h2>
                <p className="text-green-400 font-semibold mb-4">AI-Focused Full Stack Developer</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} />
                    3+ Years Experience
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-start gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Twitter size={20} />
                  </a>
                  <a href="https://hashnode.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Hash size={20} />
                  </a>
                  <a href="mailto:alex@example.com" className="social-icon">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">My Journey</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate full-stack developer with a deep focus on artificial intelligence integration. 
                  My journey began with traditional web development, but I quickly became fascinated by the 
                  potential of AI to transform user experiences.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Over the past 3+ years, I've specialized in building modern web applications that seamlessly 
                  integrate AI capabilities, from chatbots and recommendation systems to computer vision and 
                  natural language processing features.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest AI research, contributing to open-source 
                  projects, or sharing knowledge through technical blogs and speaking engagements.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">What Drives Me</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>Creating innovative solutions that solve real-world problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>Bridging the gap between cutting-edge AI and practical applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>Mentoring others and contributing to the developer community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span>Continuous learning and staying ahead of technology trends</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              A comprehensive toolkit for building modern, AI-powered applications
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <SkillBadge key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-green-400/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
                
                <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-green-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-2 md:mt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl overflow-hidden hover:border-green-400/30 transition-all"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                    <Award size={14} />
                    {achievement.date}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{achievement.organization}</p>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;