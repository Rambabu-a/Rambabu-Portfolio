import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, FileText, ExternalLink, ArrowUp, Hash } from 'lucide-react';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const skills = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '📚' }
  ];

  const featuredProjects = [
    {
      title: 'AI Chat Assistant',
      description: 'A modern chat interface powered by GPT-4 with real-time responses and conversation memory.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
      skills: ['React', 'Node.js', 'OpenAI API', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Portfolio Dashboard',
      description: 'A comprehensive dashboard for tracking personal projects, skills, and career progress.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      skills: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Smart Task Manager',
      description: 'An intelligent task management system with AI-powered priority suggestions and time tracking.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      skills: ['Next.js', 'TensorFlow', 'PostgreSQL', 'Python'],
      github: 'https://github.com',
      demo: null
    }
  ];

  const featuredBlogs = [
    {
      title: 'Building Modern React Applications with AI Integration',
      summary: 'A comprehensive guide on integrating AI capabilities into React applications using modern APIs and best practices.',
      date: 'March 15, 2025',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      link: 'https://hashnode.com'
    },
    {
      title: 'The Future of Web Development: AI-Powered Development Tools',
      summary: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy web applications.',
      date: 'March 10, 2025',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      link: 'https://hashnode.com'
    },
    {
      title: 'Optimizing React Performance with Advanced Patterns',
      summary: 'Deep dive into advanced React patterns and optimization techniques for building high-performance applications.',
      date: 'March 5, 2025',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1',
      link: 'https://hashnode.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Flashlight Effect */}
      <section className="hero-section min-h-screen flex items-center justify-center relative pt-16">
        <div
          className="flashlight-effect"
          style={{
            '--mouse-x': `${mousePosition.x}%`,
            '--mouse-y': `${mousePosition.y}%`,
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Chen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              AI-Focused Full Stack Developer
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-8">
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
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/resume" className="glow-button">
                <FileText size={20} />
                Download Resume
              </Link>
              <Link to="/blogs" className="glow-button-secondary">
                <ExternalLink size={20} />
                View Blogs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                  alt="Profile"
                  className="w-full max-w-md mx-auto rounded-2xl border border-white/10 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-2xl" />
              </div>
              
              <div className="text-left">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  I'm a passionate full-stack developer specializing in AI integration and modern web technologies. 
                  With 3+ years of experience, I create innovative solutions that bridge the gap between 
                  cutting-edge AI capabilities and user-friendly interfaces.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Core Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {skills.map((skill, index) => (
                      <SkillBadge key={skill.name} {...skill} index={index} />
                    ))}
                  </div>
                </div>
                
                <Link to="/about" className="glow-button-secondary">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Here are some of my recent projects showcasing AI integration and modern web development
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
            
            <Link to="/projects" className="glow-button">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blogs Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Latest Blogs
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Sharing insights about AI development, web technologies, and industry trends
            </p>
            
            <div className="space-y-6 mb-12">
              {featuredBlogs.map((blog, index) => (
                <BlogCard key={blog.title} blog={blog} index={index} />
              ))}
            </div>
            
            <Link to="/blogs" className="glow-button">
              View All Blogs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
            
            <Link to="/contact" className="glow-button">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Alex Chen. Built with React & AI Magic ✨
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-to-top">
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Home;