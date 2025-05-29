import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const blogs = [
    {
      title: 'Building Modern React Applications with AI Integration',
      summary: 'A comprehensive guide on integrating AI capabilities into React applications using modern APIs, best practices, and real-world examples. We explore OpenAI integration, streaming responses, and user experience optimization.',
      date: 'March 15, 2025',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      link: 'https://hashnode.com'
    },
    {
      title: 'The Future of Web Development: AI-Powered Development Tools',
      summary: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy web applications. From code generation to automated testing, AI is changing the developer workflow.',
      date: 'March 10, 2025',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      link: 'https://hashnode.com'
    },
    {
      title: 'Optimizing React Performance with Advanced Patterns',
      summary: 'Deep dive into advanced React patterns and optimization techniques for building high-performance applications. Learn about memoization, virtualization, and state management strategies.',
      date: 'March 5, 2025',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1',
      link: 'https://hashnode.com'
    },
    {
      title: 'Serverless Architecture: Building Scalable Applications',
      summary: 'Understanding serverless computing and how to build scalable, cost-effective applications using AWS Lambda, Vercel Functions, and other serverless platforms.',
      date: 'February 28, 2025',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
      link: 'https://hashnode.com'
    },
    {
      title: 'Machine Learning for Web Developers: Getting Started',
      summary: 'A beginner-friendly introduction to machine learning concepts for web developers. Learn how to integrate TensorFlow.js and build intelligent web applications.',
      date: 'February 20, 2025',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      link: 'https://hashnode.com'
    },
    {
      title: 'CSS Grid vs Flexbox: When to Use What',
      summary: 'A practical comparison of CSS Grid and Flexbox with real-world examples and use cases. Learn when to choose each layout method for maximum efficiency.',
      date: 'February 15, 2025',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      link: 'https://hashnode.com'
    },
    {
      title: 'Building Real-time Applications with WebSockets',
      summary: 'Complete guide to implementing real-time features in web applications using WebSockets, Socket.io, and modern patterns for handling real-time data.',
      date: 'February 10, 2025',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
      link: 'https://hashnode.com'
    },
    {
      title: 'TypeScript for React Developers: Advanced Patterns',
      summary: 'Advanced TypeScript patterns specifically for React development. Learn about generic components, conditional types, and creating type-safe applications.',
      date: 'February 5, 2025',
      image: 'https://images.pexels.com/photos/6804605/pexels-photo-6804605.jpeg',
      link: 'https://hashnode.com'
    },
    {
      title: 'Database Design for Modern Web Applications',
      summary: 'Best practices for designing databases for modern web applications, including NoSQL vs SQL considerations, normalization, and performance optimization.',
      date: 'January 30, 2025',
      image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be',
      link: 'https://hashnode.com'
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
              Tech Blogs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Sharing insights about AI development, web technologies, and industry trends
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <span>{blogs.length} Articles</span>
              <span>•</span>
              <span>Updated Weekly</span>
              <span>•</span>
              <span>5 min average read</span>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.title} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black/20 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-10 border border-white/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8">
              Get the latest articles and insights delivered directly to your inbox. No spam, just quality content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              />
              <button className="glow-button">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              Join 1,000+ developers who read my weekly newsletter
            </p>
          </motion.div>
        </div>
      </section>

      {/* Writing Platforms */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Find Me On
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://hashnode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  H
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Hashnode</h3>
                <p className="text-gray-400 text-sm">Primary blogging platform with interactive community</p>
              </a>
              
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all"
              >
                <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  M
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Medium</h3>
                <p className="text-gray-400 text-sm">In-depth technical articles and tutorials</p>
              </a>
              
              <a
                href="https://dev.to"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  DEV
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Dev.to</h3>
                <p className="text-gray-400 text-sm">Quick tips and community discussions</p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;