'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-gold-100 dark:border-gold-900'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#home"
            className="group flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            <Sparkles size={24} className="text-gold-500 dark:text-gold-400 group-hover:rotate-12 transition-transform" />
            <span>Portfolio</span>
          </a>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 font-semibold group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gold-50 dark:bg-gold-900/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-600 to-gold-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 bg-gold-100 dark:bg-gray-800 text-gold-600 dark:text-gold-400 rounded-lg hover:bg-gold-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 bg-gold-100 dark:bg-gray-800 text-gold-600 dark:text-gold-400 rounded-lg hover:bg-gold-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gold-200 dark:border-gold-900 shadow-xl animate-slideDown">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 font-semibold border border-transparent hover:border-gold-200 dark:hover:border-gold-800"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
