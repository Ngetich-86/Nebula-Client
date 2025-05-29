'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  const title = "Welcome to Nebula";
  const description = "Connect with friends, share your moments, and explore the world through our next-generation social media platform.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            >
              {title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: i * 0.1,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {description.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-1"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.5 + i * 0.05,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              className="flex space-x-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/feed" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/about" 
                  className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-32 h-32 bg-white/10 backdrop-blur-lg rounded-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Nebula?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Updates",
              description: "Stay connected with instant notifications and live updates from your network.",
              icon: "⚡"
            },
            {
              title: "Privacy First",
              description: "Your data is protected with state-of-the-art security measures.",
              icon: "🔒"
            },
            {
              title: "Rich Media",
              description: "Share photos, videos, and stories with stunning quality.",
              icon: "🎨"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Ready to Join Nebula?</h2>
        <Link 
          href="/feed"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
        >
          Start Your Journey
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero; 