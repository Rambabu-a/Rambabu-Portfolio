import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Blogs from './containers/Blogs';
import Contact from './containers/Contact';
import Snippets from './containers/Snippets';
import Publications from './containers/Publications';
import Resume from './containers/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/snippets" element={<Snippets />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;