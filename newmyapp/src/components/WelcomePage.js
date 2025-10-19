import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulated loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  // Features with icons
  const features = [
    {
      icon: "fas fa-robot",
      title: "AI-Powered Questions",
      description: "Get personalized questions based on your performance",
      color: "bg-purple-900 text-purple-300"
    },
    {
      icon: "fas fa-chart-line",
      title: "Performance Analytics",
      description: "Track your progress with detailed insights",
      color: "bg-blue-900 text-blue-300"
    },
    {
      icon: "fas fa-clock",
      title: "Flexible Timing",
      description: "Practice at your own pace",
      color: "bg-teal-900 text-teal-300"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100 overflow-hidden relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 opacity-50"></div>
      
      {/* Animated background dots/stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 20 + 's',
              animationName: 'float',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              animationDelay: Math.random() * 5 + 's',
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>

      <div className="flex flex-col h-screen justify-center items-center p-4 relative z-10">
        <motion.div 
          className="w-full max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 mb-4">
                AI Mock Test Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8">Your Smart Way to Practice and Excel</p>
            </motion.div>
          </motion.div>

          {/* Features section */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(79, 70, 229, 0.4)"
                }}
                className="feature-card bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-xl p-6 shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4 mx-auto`}>
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to action buttons */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            >
              Get Started
            </motion.button>
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              className="px-8 py-4 bg-gray-800 border border-gray-600 text-gray-100 font-medium rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Create Account
            </motion.button>
          </motion.div>
          
          {/* Footer login link */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center text-gray-400"
          >
            <p>Already have an account? <a href="/login" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Sign in</a></p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomePage;