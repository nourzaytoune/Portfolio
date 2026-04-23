'use client';

import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gold-100 dark:border-gold-900 py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Code2 className="text-gold-600" size={24} />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                Frontend Developer
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
              Crafting beautiful digital experiences with Flutter, React & Next.js
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 font-medium text-sm">
              Home
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 font-medium text-sm">
              About
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 font-medium text-sm">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 font-medium text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 font-medium text-sm">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold-100 dark:hover:bg-gold-900/30 hover:text-gold-600 dark:hover:text-gold-400 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold-100 dark:hover:bg-gold-900/30 hover:text-gold-600 dark:hover:text-gold-400 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:noiurzaytoune0@gmail.com"
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold-100 dark:hover:bg-gold-900/30 hover:text-gold-600 dark:hover:text-gold-400 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gold-100 dark:border-gold-900">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              Made with <Heart className="text-gold-500 dark:text-gold-400" size={14} fill="currentColor" /> by a passionate developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
