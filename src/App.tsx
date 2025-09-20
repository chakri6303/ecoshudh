import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WhatWeDoPage from './components/WhatWeDoPage';
import HyDWTSPage from './components/HyDWTSPage';
// import GalleryPage from './components/GalleryPage';
// import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 50,
      scale: 0.98
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0,
      y: -50,
      scale: 0.98,
      transition: {
        duration: 0.4
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'what-we-do':
        return <WhatWeDoPage />;
      case 'hy-dwts':
        return <HyDWTSPage />;
      // case 'gallery':
      //   return <GalleryPage />;
      // case 'careers':
      //   return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      
      <Footer onPageChange={setCurrentPage} />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }
        }}
      />
    </div>
  );
}
