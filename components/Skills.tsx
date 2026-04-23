'use client';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Flutter & Dart', level: 95 },
        { name: 'AdMob Integration', level: 90 },
        { name: 'OneSignal (Push Notifications)', level: 88 },
        { name: 'APK & TestFlight Deployment', level: 85 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 92 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      category: 'APIs & Integration',
      skills: [
        { name: 'RESTful APIs', level: 95 },
        { name: 'EmailJS', level: 88 },
        { name: 'Firebase', level: 85 },
        { name: 'CRM Customization', level: 82 },
      ],
    },
    {
      category: 'Design & Management',
      skills: [
        { name: 'UI/UX Design', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Project Management (Asana, Slack)', level: 85 },
        { name: 'Strategic Business Planning', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gold-50 via-white to-gold-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gold-600 dark:from-white dark:to-gold-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-gold-400 pb-3">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gold-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-gold-600 to-gold-400 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
