'use client';

import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gold-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15),transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gold-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gold-200 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Badge with Icon */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-100 to-gold-50 dark:from-gold-900/30 dark:to-gold-800/20 text-gold-700 dark:text-gold-400 rounded-full text-sm font-semibold shadow-lg border border-gold-200 dark:border-gold-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles size={18} className="text-gold-600" />
              <span>Frontend Developer</span>
              <Sparkles size={18} className="text-gold-600" />
            </div>
          </div>

          {/* Main Heading with Enhanced Styling */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-gold-600 to-gray-900 dark:from-white dark:via-gold-400 dark:to-white bg-clip-text text-transparent animate-gradient">
              Crafting Beautiful
            </span>
            <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 dark:from-gold-400 dark:via-gold-300 dark:to-gold-400 bg-clip-text text-transparent mt-2">
              Digital Experiences
            </span>
          </h1>

          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Specialized in{' '}
              <span className="inline-flex items-center gap-1 text-gold-600 font-bold">
                <Code2 size={20} className="inline" />
                Flutter
              </span>,{' '}
              <span className="text-gold-600 font-bold">React</span>, and{' '}
              <span className="text-gold-600 font-bold">Next.js</span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Building responsive, performant, and elegant applications
              <br className="hidden md:block" />
              <span className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-gold-50 dark:bg-gold-900/30 rounded-full text-gold-700 dark:text-gold-400 font-semibold">
                <Zap size={18} />
                1.7+ Years of Experience
              </span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
            <a
              href="#projects"
              className="group relative px-10 py-5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-gold-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group px-10 py-5 bg-white text-gold-600 border-3 border-gold-600 rounded-xl font-bold text-lg shadow-xl hover:bg-gradient-to-r hover:from-gold-50 hover:to-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <Mail size={20} className="group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-white to-gold-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gold-300/50 hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 border border-gold-100 dark:border-gray-700"
            >
              <Github size={26} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-white to-gold-50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gold-300/50 hover:scale-110 transition-all duration-300 text-gray-700 hover:text-gold-600 border border-gold-100"
            >
              <Linkedin size={26} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="mailto:nourzaytoune0@gmail.com"
              className="group p-4 bg-gradient-to-br from-white to-gold-50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gold-300/50 hover:scale-110 transition-all duration-300 text-gray-700 hover:text-gold-600 border border-gold-100"
            >
              <Mail size={26} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-gold-600 dark:text-gold-400 text-sm font-semibold animate-pulse">Scroll Down</span>
        <div className="p-3 bg-gradient-to-br from-gold-100 to-white dark:from-gray-800 dark:to-gray-700 rounded-full shadow-lg border-2 border-gold-300 dark:border-gold-800 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 animate-bounce">
          <ArrowDown className="text-gold-600 dark:text-gold-400" size={28} />
        </div>
      </a>
    </section>
  );
}
