import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Github, Linkedin, Twitter, Hash, Mail, Phone, MapPin } from 'lucide-react';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  const personalInfo = {
    name: 'Alex Chen',
    title: 'AI-Focused Full Stack Developer',
    email: 'alex.chen@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://alexchen.dev',
    github: 'https://github.com/alexchen',
    linkedin: 'https://linkedin.com/in/alexchen',
    twitter: 'https://twitter.com/alexchen',
    hashnode: 'https://hashnode.com/@alexchen'
  };

  const summary = `Passionate full-stack developer with 3+ years of experience specializing in AI integration and modern web technologies. Proven track record of building scalable applications that serve 10K+ users. Expert in React, Node.js, Python, and machine learning frameworks. Strong background in performance optimization, security best practices, and team leadership.`;

  const skills = {
    'Frontend': ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'D3.js'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'FastAPI', 'GraphQL', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'Mongoose'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Langchain'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions', 'Terraform'],
    'Tools & Others': ['Git', 'Jest', 'Cypress', 'Figma', 'Postman', 'VS Code']
  };

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechInnovate Solutions',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      achievements: [
        'Led development of 5+ AI-integrated applications serving 10K+ active users',
        'Architected microservices infrastructure reducing deployment time by 60%',
        'Mentored team of 4 junior developers, improving code quality by 40%',
        'Implemented CI/CD pipelines resulting in 90% reduction in deployment errors',
        'Built real-time chat system with WebSocket handling 1M+ messages daily'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Dynamics',
      location: 'Austin, TX',
      period: 'Jun 2021 - Dec 2022',
      achievements: [
        'Delivered 15+ client projects on time with 98% client satisfaction rate',
        'Integrated payment systems processing $2M+ in transactions annually',
        'Optimized application performance improving load times by 50%',
        'Developed responsive web applications using React and modern CSS',
        'Collaborated with design team to implement pixel-perfect UI/UX'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'Remote',
      period: 'Aug 2020 - May 2021',
      achievements: [
        'Built 10+ responsive websites using React and CSS frameworks',
        'Participated in agile development processes and daily standups',
        'Contributed to open-source projects gaining 500+ GitHub stars',
        'Learned modern web development best practices and design patterns',
        'Collaborated with cross-functional teams on feature development'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      period: '2016 - 2020',
      details: 'Summa Cum Laude, GPA: 3.9/4.0'
    },
    {
      degree: 'Machine Learning Specialization',
      school: 'Stanford University (Online)',
      period: '2022',
      details: 'Coursera Certificate with Honors'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Certified Kubernetes Administrator (CKA)'
  ];

  const achievements = [
    'AI Innovation Award - TechConf 2024',
    'Top 1% contributor on Stack Overflow (50K+ reputation)',
    'Published 5 research papers in peer-reviewed journals',
    'Speaker at 8 international tech conferences',
    'Open source contributor with 1000+ GitHub stars'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Download my complete resume or preview it below to learn more about my experience and skills.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href={personalInfo.hashnode} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Hash size={20} />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download="Alex_Chen_Resume.pdf"
                className="glow-button"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="glow-button-secondary"
              >
                <Eye size={20} />
                {showPreview ? 'Hide Preview' : 'Preview Resume'}
              </button>
            </div>
          </motion.div>

          {/* Resume Preview */}
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white text-black rounded-xl p-8 md:p-12 shadow-2xl"
            >
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{personalInfo.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Mail size={14} />
                    {personalInfo.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={14} />
                    {personalInfo.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{summary}</p>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                  Technical Skills
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{category}:</h3>
                      <p className="text-gray-700 text-sm">{skillList.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                  Professional Experience
                </h2>
                {experience.map((job, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company}, {job.location}</p>
                      </div>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">{job.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                  Education
                </h2>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.school}</p>
                        <p className="text-gray-600 text-sm">{edu.details}</p>
                      </div>
                      <span className="text-gray-600 text-sm mt-1 md:mt-0">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                  Certifications
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                  Key Achievements
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Work Together?
            </h2>
            <p className="text-gray-300 mb-8">
              I'm currently open to new opportunities and exciting projects. Let's discuss how I can contribute to your team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="glow-button"
              >
                Contact Me
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-secondary"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;