// 'use client';

// import { ExternalLink, Github, Sparkles, Star } from 'lucide-react';

// export default function Projects() {
//   const projects = [
//     {
//       title: 'E-Commerce Mobile App',
//       description:
//         'A full-featured e-commerce application built with Flutter, featuring product browsing, cart management, and secure checkout.',
//       tech: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
//       gradient: 'from-gold-400 to-gold-600',
//     },
//     {
//       title: 'Social Media Dashboard',
//       description:
//         'Modern analytics dashboard built with React and Next.js, providing real-time insights and beautiful data visualizations.',
//       tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
//       gradient: 'from-gold-500 to-gold-700',
//     },
//     {
//       title: 'Task Management Platform',
//       description:
//         'Collaborative task management tool with real-time updates, built using React and Firebase for seamless team coordination.',
//       tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
//       gradient: 'from-gold-400 to-gold-600',
//     },
//     {
//       title: 'Portfolio Website Builder',
//       description:
//         'A drag-and-drop portfolio builder allowing users to create stunning websites without coding, built with Next.js.',
//       tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//       gradient: 'from-gold-500 to-gold-700',
//     },
//     {
//       title: 'Fitness Tracking App',
//       description:
//         'Cross-platform fitness app with workout tracking, progress charts, and personalized recommendations using Flutter.',
//       tech: ['Flutter', 'Dart', 'SQLite', 'Charts'],
//       gradient: 'from-gold-400 to-gold-600',
//     },
//     {
//       title: 'Real Estate Marketplace',
//       description:
//         'Property listing platform with advanced search, virtual tours, and real-time chat built with React and Next.js.',
//       tech: ['Next.js', 'React', 'PostgreSQL', 'WebRTC'],
//       gradient: 'from-gold-500 to-gold-700',
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gradient-to-b from-white via-gold-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl opacity-10"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300 rounded-full blur-3xl opacity-10"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 dark:bg-gold-900/30 rounded-full mb-4 border border-gold-200 dark:border-gold-800">
//             <Star size={18} className="text-gold-600" />
//             <span className="text-gold-700 dark:text-gold-400 font-semibold text-sm">Portfolio Showcase</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gold-600 dark:from-white dark:to-gold-400 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <div className="w-24 h-1.5 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mb-6 rounded-full"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             A selection of projects showcasing my expertise in frontend development
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gold-100 dark:border-gray-700 hover:-translate-y-3 hover:border-gold-300 dark:hover:border-gold-600"
//             >
//               <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-500"></div>
//                 {/* Animated gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                 {/* Sparkle effect on hover */}
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <Sparkles className="text-white" size={24} />
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-white text-7xl font-bold opacity-20 group-hover:scale-110 transition-transform duration-500">
//                     {index + 1}
//                   </div>
//                 </div>
//               </div>

//               <div className="p-7">
//                 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 leading-relaxed">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1.5 bg-gradient-to-r from-gold-100 to-gold-50 dark:from-gold-900/30 dark:to-gold-800/20 text-gold-700 dark:text-gold-400 text-sm rounded-full font-semibold border border-gold-200 dark:border-gold-800 hover:scale-105 transition-transform duration-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3 pt-4 border-t border-gold-100 dark:border-gray-700">
//                   <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-gold-100 hover:to-gold-50 dark:hover:from-gold-900/30 dark:hover:to-gold-800/20 hover:text-gold-700 dark:hover:text-gold-400 rounded-lg transition-all duration-300 font-semibold border border-gray-200 dark:border-gray-600 hover:border-gold-300 dark:hover:border-gold-700 hover:shadow-md">
//                     <Github size={18} />
//                     <span>Code</span>
//                   </button>
//                   <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105">
//                     <ExternalLink size={18} />
//                     <span>Demo</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }'use client';

import {
  Globe,
  ExternalLink,
  Lock,
  Figma,
  Sparkles,
  ArrowUpRight,
  MonitorSmartphone,
  Briefcase,
  Palette,
  Bell,
  BarChart3,
  Layers3,
} from 'lucide-react';

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  demo?: string;
  design?: string;
  confidential?: boolean;
  note?: string;
  highlights?: string[];
  image?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Arrow Trade FX',
      category: 'Business Website',
      description:
        'A polished business website focused on professional presentation, clear structure, responsive layout, and a premium digital presence.',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      demo: 'http://arrowtradefx.com/',
      note: 'Live production website.',
      highlights: [
        'Responsive business website',
        'Professional UI presentation',
        'Structured content layout',
        'Modern user experience',
      ],
    },
    {
      title: 'Sohah Hassoun',
      category: 'Personal / Brand Website',
      description:
        'A modern brand-focused website crafted with elegant visuals, responsive sections, and a refined user experience.',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      demo: 'https://sohahassoun.com/',
      note: 'Live production website.',
      highlights: [
        'Elegant responsive design',
        'Brand-focused presentation',
        'Clean section hierarchy',
        'Modern UI styling',
      ],
    },
    {
      title: 'Ons Jabeur Foundation',
      category: 'Foundation Website',
      description:
        'A clean and meaningful web experience designed to highlight mission, impact, accessibility, and clarity across devices.',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      demo: 'https://onsjabeurfoundation.com',
      note: 'Live production website.',
      highlights: [
        'Mission-driven website experience',
        'Accessible responsive layout',
        'Content-focused interface',
        'Professional front-end implementation',
      ],
    },
    {
      title: 'Digital Wedding Invitation',
      category: 'Interactive Invitation Card',
      description:
        'A creative digital invitation experience with elegant presentation, event details, and a smooth responsive layout.',
      tech: ['React', 'Tailwind CSS', 'Netlify'],
      demo: 'https://simon-romi-wedding-card-4.netlify.app',
      note: 'Hosted on Netlify.',
      highlights: [
        'Interactive digital invitation',
        'Elegant event presentation',
        'Responsive front-end design',
        'Creative visual experience',
      ],
    },
    {
      title: 'UI/UX Design Concept',
      category: 'Figma Design',
      description:
        'A UI/UX concept showcasing design thinking, layout exploration, visual hierarchy, and interface presentation.',
      tech: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping'],
      design:
        'https://www.figma.com/design/ZhymZLsDlwxYr4GZX0pVsi/Untitled?node-id=0-1&t=Xuz8dvWDOPcrgBEM-1',
      note: 'Design project available through Figma. You can also replace this with screenshots later.',
      highlights: [
        'UI/UX exploration',
        'Visual hierarchy design',
        'Wireframing and prototyping',
        'Creative interface thinking',
      ],
    },
    {
      title: 'App Tracking System',
      category: 'Internal Dashboard',
      description:
        'An internal company dashboard built to improve workflow visibility, tracking, and operational organization for internal teams.',
      tech: ['Flutter', 'Dashboard UI', 'Internal APIs'],
      confidential: true,
      note: 'Confidential internal company system. Public demo and source code are not available.',
      highlights: [
        'Internal workflow tracking',
        'Operational visibility',
        'Dashboard organization',
        'Confidential company system',
      ],
    },
    {
      title: 'Trading Dashboard System',
      category: 'Internal Fintech Dashboard',
      description:
        'A secure internal dashboard built for monitoring trading activity in real time, integrated with MetaTrader data feeds and designed for efficient analysis and workflow management.',
      tech: ['Dashboard UI', 'MetaTrader Integration', 'Search', 'Sorting'],
      confidential: true,
      note: 'Confidential financial system. Full implementation, business logic, and data access are restricted.',
      highlights: [
        'MetaTrader data integration',
        'Search and sorting functionality',
        'First trade and last trade insights',
        'Real-time trading activity monitoring',
      ],
    },
    {
      title: 'Payment Tracking System',
      category: 'Fintech Dashboard + Mobile App',
      description:
        'A complete internal system for tracking upcoming payments and financial activity, combined with a mobile application for real-time payment notifications and alerts.',
      tech: [
        'Flutter',
        'Dashboard UI',
        'Push Notifications',
        'REST APIs',
      ],
      confidential: true,
      note: 'Internal company system. Public access, implementation details, and source code are restricted.',
      highlights: [
        'Dashboard for tracking payments',
        'Sorting, filtering, and search',
        'Mobile app for notifications',
        'Upcoming payment alerts',
      ],
    },
  ];

  const getIcon = (category: string, confidential?: boolean, design?: string) => {
    if (confidential) {
      if (category.includes('Fintech')) return <BarChart3 className="text-gold-600" size={20} />;
      if (category.includes('Mobile')) return <Bell className="text-gold-600" size={20} />;
      return <Briefcase className="text-gold-600" size={20} />;
    }

    if (design) return <Figma className="text-gold-600" size={20} />;
    if (category.includes('Invitation')) return <Sparkles className="text-gold-600" size={20} />;
    return <Globe className="text-gold-600" size={20} />;
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gold-50 to-white py-20 transition-colors duration-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-gold-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white px-4 py-2 shadow-md dark:border-gold-800 dark:bg-gray-800">
            <Sparkles size={18} className="text-gold-600" />
            <span className="text-sm font-semibold text-gold-700 dark:text-gold-400">
              Selected Work
            </span>
          </div>

          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gold-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gold-400 md:text-5xl">
            Projects & Case Studies
          </h2>

          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold-600 to-gold-400" />

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A curated selection of public websites, UI/UX work, and professional internal systems
            I contributed to across web, dashboard, and mobile products.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white px-4 py-2 text-sm font-medium text-gold-700 shadow-sm dark:border-gold-800 dark:bg-gray-800 dark:text-gold-400">
            <Globe size={16} />
            Live Projects
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white px-4 py-2 text-sm font-medium text-gold-700 shadow-sm dark:border-gold-800 dark:bg-gray-800 dark:text-gold-400">
            <Palette size={16} />
            UI/UX Design
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white px-4 py-2 text-sm font-medium text-gold-700 shadow-sm dark:border-gold-800 dark:bg-gray-800 dark:text-gold-400">
            <Lock size={16} />
            Confidential Systems
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden rounded-3xl border border-gold-100 bg-white/90 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/90"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600" />

              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700 dark:bg-gold-900/20 dark:text-gold-400">
                    {project.category.includes('Figma') ? (
                      <Palette size={14} />
                    ) : project.category.includes('Mobile') ? (
                      <Bell size={14} />
                    ) : project.category.includes('Dashboard') ||
                      project.category.includes('Fintech') ? (
                      <Layers3 size={14} />
                    ) : (
                      <MonitorSmartphone size={14} />
                    )}
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">
                    {project.title}
                  </h3>
                </div>

                <div className="rounded-2xl border border-gold-200 bg-gradient-to-br from-gold-100 to-gold-50 p-3 dark:border-gold-800 dark:from-gold-900/30 dark:to-gold-800/20">
                  {getIcon(project.category, project.confidential, project.design)}
                </div>
              </div>

              <p className="mb-5 min-h-[110px] leading-relaxed text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {project.highlights && (
                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold-200 bg-gold-50 px-3 py-1 text-xs font-medium text-gold-700 dark:border-gold-900 dark:bg-gold-900/20 dark:text-gold-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {project.note && (
                <div className="mb-6 rounded-2xl border border-gold-100 bg-gradient-to-r from-gold-50 to-white p-4 text-sm text-gray-700 dark:border-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-gray-300">
                  {project.note}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-gold-500/30"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}

                {project.design && (
                  <a
                    href={project.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-gold-300 bg-white px-5 py-3 font-semibold text-gold-700 transition-all duration-300 hover:bg-gold-50 dark:border-gold-700 dark:bg-gray-800 dark:text-gold-400 dark:hover:bg-gray-700"
                  >
                    View Design
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.confidential && (
                  <div className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-100 px-5 py-3 font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Private Project
                    <Lock size={16} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}