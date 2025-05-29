import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="blog-card cursor-pointer"
    >
      <div className="w-1/3 md:w-1/4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 p-6">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
          <Calendar size={14} />
          {blog.date}
        </div>
        
        <h3 className="text-lg font-bold mb-2 text-white line-clamp-2">{blog.title}</h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">{blog.summary}</p>
        
        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
        >
          <span>Read Full Blog</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;