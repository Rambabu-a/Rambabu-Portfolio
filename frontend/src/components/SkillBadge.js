import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="skill-badge cursor-pointer"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;