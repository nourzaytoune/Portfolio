'use client';

import { Mail, MapPin, Phone, Send, MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, email, subject, message } = formData;
  
    const text = `Hello Youssef 👋
  
  Name: ${name}
  Email: ${email}
  Subject: ${subject}
  
  Message:
  ${message}`;
  
    const encodedText = encodeURIComponent(text);
  
    const whatsappUrl = `https://wa.me/96170554775?text=${encodedText}`;
    const mailUrl = `mailto:nourzaytoune0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      window.location.href = mailUrl;
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-gold-600" size={24} />,
      title: 'Email',
      content: 'nourzaytoune0@gmail.com',
      link: 'mailto:nourzaytoune0@gmail.com',
    },
    {
      icon: <Phone className="text-gold-600" size={24} />,
      title: 'Phone',
      content: '+961 70 554 775',
      link: 'tel:+96170554775',
    },
    {
      icon: <MapPin className="text-gold-600" size={24} />,
      title: 'Location',
      content: 'Beirut, Lebanon',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gold-50 via-white to-gold-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold-300 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full mb-4 shadow-md border border-gold-200 dark:border-gold-800">
            <MessageCircle size={18} className="text-gold-600" />
            <span className="text-gold-700 dark:text-gold-400 font-semibold text-sm">Let&apos;s Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gold-600 dark:from-white dark:to-gold-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-gold-600" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out through any of these channels. I&apos;m always open to
              discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-100 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-600 hover:-translate-y-1"
                >
                  <div className="p-4 bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/30 dark:to-gold-800/20 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-gold-200 dark:border-gold-800">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border-2 border-gold-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <Send className="text-gold-600" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-5 py-3.5 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-5 py-3.5 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What&apos;s this about?"
                  className="w-full px-5 py-3.5 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={5}
  placeholder="Reach out..."
  className="w-full px-5 py-3.5 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 resize-none bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
  required
></textarea>
              </div>

              <button
  type="submit"
  className="group w-full px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-gold-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
>
  <MessageCircle size={20} />
  Chat on WhatsApp
</button>
<a
  href={`mailto:nourzaytoune0@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
    `Hello Youssef 👋

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
  )}`}
  className="group w-full px-8 py-4 border-2 border-gold-500 text-gold-600 rounded-xl font-bold text-lg hover:bg-gold-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
>
  <Mail size={20} />
  Send Email
</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
