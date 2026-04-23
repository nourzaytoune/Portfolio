'use client';

import { Code2, Sparkles, Zap, GraduationCap, Briefcase, Award } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="text-gold-600" size={32} />,
      title: 'Full-Stack Mobile & Web',
      description: 'Expert in Flutter, React, and Next.js with RESTful API integration',
    },
    {
      icon: <Sparkles className="text-gold-600" size={32} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive designs and managing projects from concept to deployment',
    },
    {
      icon: <Award className="text-gold-600" size={32} />,
      title: 'Strategic Planning',
      description: 'Business planning and project management using Asana, Slack, and modern tools',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gold-600 dark:from-white dark:to-gold-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE (same design, just replaced icon) */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  
                  <Image
                    src="/profile.jpeg"
                    alt="Nour Zeytouneh"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />

                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-bold">1.7+ Years</p>
                  <p className="text-sm">Experience</p>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Frontend Developer
                </h3>
                <p className="text-gold-600 font-semibold text-lg mb-4">
                  Flutter • React • Next.js Specialist
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate frontend developer with{' '}
                <span className="font-semibold text-gold-600">1.7+ years of experience</span>{' '}
                building cross-platform mobile and web applications.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Experienced in <span className="font-semibold">AdMob integration</span>,{' '}
                <span className="font-semibold">OneSignal push notifications</span> for Android & iOS, and managing complete app deployment cycles including APK releases and TestFlight distribution.
                Proficient in <span className="font-semibold">RESTful APIs</span>,{' '}
                <span className="font-semibold">EmailJS</span>, and{' '}
                <span className="font-semibold">CRM customization</span>.
              </p>

              <div className="flex items-start gap-3 bg-gold-50 dark:bg-gold-900/20 p-4 rounded-lg border border-gold-200 dark:border-gold-800">
                <GraduationCap className="text-gold-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Bachelor&apos;s Degree in Computer Science
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Beirut Arab University • 2021 - 2024
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gold-50 dark:bg-gold-900/20 p-4 rounded-lg border border-gold-200 dark:border-gold-800">
                <Briefcase className="text-gold-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Additional Expertise
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    UI/UX Design • Strategic Business Planning • Project Management (Asana, Slack)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gold-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gold-100 dark:border-gray-700"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}