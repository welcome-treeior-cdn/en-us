import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Settings, Lock, Wallet, ChevronDown, ExternalLink, GitBranch, Database } from 'lucide-react';

function App() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-background"></div>
        <nav className="container mx-auto px-6 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold neon-text"
            >
              Trėzor.io/start®
            </motion.div>
            <div className="hidden md:flex space-x-12">
              {['Features', 'Security', 'Install', 'FAQ'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="cyber-button px-8 py-3 rounded-full text-green-400 glowing"
              >
                Launch App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="cyber-button px-8 py-3 rounded-full bg-transparent"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </nav>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 py-32 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 neon-text">
                The Future of Crypto Management
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Experience unparalleled security and seamless control over your digital assets
                with our next-generation platform.
              </p>
              <div className="flex space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="cyber-button px-10 py-4 rounded-full text-green-400 glowing"
                >
                  Get Started
                </motion.button>
                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400"
                >
                  <span>Explore Features</span>
                  <ChevronDown />
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl"></div>
                <div className="relative floating">
                  <Shield className="w-64 h-64 mx-auto text-green-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* Features */}
      <main className="relative">
        <div className="absolute inset-0 grid-background"></div>
        
        <motion.section
          id="features"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-32 relative"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-20 neon-text">
            Revolutionary Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-12 h-12 text-green-400" />,
                title: "Military-Grade Security",
                description: "Advanced encryption protocols and multi-signature support keep your assets protected."
              },
              {
                icon: <Wallet className="w-12 h-12 text-green-400" />,
                title: "Smart Portfolio",
                description: "Real-time tracking and automated portfolio rebalancing for optimal performance."
              },
              {
                icon: <Database className="w-12 h-12 text-green-400" />,
                title: "Cross-Chain Integration",
                description: "Seamlessly manage assets across multiple blockchain networks."
              },
              {
                icon: <GitBranch className="w-12 h-12 text-green-400" />,
                title: "DeFi Integration",
                description: "Direct access to decentralized finance protocols and yield opportunities."
              },
              {
                icon: <Cpu className="w-12 h-12 text-green-400" />,
                title: "AI-Powered Analytics",
                description: "Advanced market analysis and predictive insights for informed decisions."
              },
              {
                icon: <Settings className="w-12 h-12 text-green-400" />,
                title: "Custom Automation",
                description: "Create personalized trading strategies and automated responses."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="feature-card p-8 rounded-2xl"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-32 relative"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-20 neon-text">
            Frequently Asked Questions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What makes Trėzor.io/start unique?",
                answer: "Our platform combines military-grade security with an intuitive interface, offering advanced features like AI-powered analytics and cross-chain integration."
              },
              {
                question: "How secure is my crypto?",
                answer: "We implement industry-leading security measures including multi-signature support, hardware security modules, and regular security audits."
              },
              {
                question: "Can I access my assets on mobile?",
                answer: "Yes, Trėzor.io/start is fully responsive and available on all devices with real-time synchronization."
              },
              {
                question: "What cryptocurrencies are supported?",
                answer: "We support a wide range of cryptocurrencies across multiple blockchain networks, with new assets added regularly."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="feature-card p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Disclaimer */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 pb-32 relative"
        >
          <motion.div
            variants={itemVariants}
            className="feature-card p-8 rounded-2xl max-w-3xl mx-auto text-center"
          >
            <h2 className="text-xl font-bold mb-4">Important Notice</h2>
            <p className="text-gray-400">
              Cryptocurrency investments involve significant risks. Always conduct thorough research
              and never invest more than you can afford to lose. Trėzor.io/start is a platform
              for cryptocurrency management and does not provide financial advice.
            </p>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="hero-gradient relative">
        <div className="absolute inset-0 grid-background"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 neon-text">Trėzor.io/start</h3>
              <p className="text-gray-400">
                Revolutionizing cryptocurrency management with advanced security and intuitive controls.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#features" className="text-gray-400 hover:text-green-400">Features</a></li>
                <li><a href="#security" className="text-gray-400 hover:text-green-400">Security</a></li>
                <li><a href="#roadmap" className="text-gray-400 hover:text-green-400">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-green-400">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-green-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2024 Trėzor.io/start. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;