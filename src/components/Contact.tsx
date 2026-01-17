import React, { useState, useRef } from 'react';
import { Mail, Phone, Send, Clock, CheckCircle, AlertCircle, Loader2, MessageCircle, Briefcase } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useContact, useFAQ, useServices, useCareers } from '../hooks/useContent';

// Email to receive form submissions
const CONTACT_EMAIL = 'contact@techpotato.in';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const contactInfo = useContact();
  const faqData = useFAQ();
  const servicesData = useServices();
  const careersData = useCareers();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Using FormSubmit.co - free email service
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name}`,
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Failed to send. Please try again or email us directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // Contact details
  const phone = '+91 8530594294';
  const email = 'contact@techpotato.in';
  const whatsapp = '918530594294';

  const contactItems = [
    { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    { icon: Phone, label: 'Phone', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
    { icon: Clock, label: 'Hours', value: contactInfo.hours },
  ];

  return (
    <section id="contact" className="py-20 gradient-bg-contact relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full glass border border-primary/30 text-primary text-xs font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            Ready to start? Let's discuss your project. {contactInfo.responseTime}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
              <div className="relative p-5 h-full">
                <h3 className="text-lg font-display font-bold text-background mb-4">
                  Contact Info
                </h3>

                <div className="space-y-4 mb-6">
                  {contactItems.map((info, index) => (
                    <a
                      key={index}
                      href={info.href || '#'}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                        <info.icon size={16} className="text-background" />
                      </div>
                      <div>
                        <div className="text-[10px] text-background/70">{info.label}</div>
                        <div className="text-sm font-semibold text-background">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-background/20">
                  <span className="text-xs text-background/70 mb-2 block">Quick Connect</span>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${email}`}
                      className="w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
                    >
                      <Mail size={14} className="text-background" />
                    </a>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
                    >
                      <Phone size={14} className="text-background" />
                    </a>
                    <a
                      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi TechPotato! I'm interested in your services.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-green-500/80 flex items-center justify-center hover:bg-green-500 transition-colors"
                    >
                      <MessageCircle size={14} className="text-background" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="glass rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-display font-bold text-white mb-4">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 focus:border-primary/50 transition-colors text-sm placeholder-text-muted"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 focus:border-primary/50 transition-colors text-sm placeholder-text-muted"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 focus:border-primary/50 transition-colors text-sm placeholder-text-muted"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 focus:border-primary/50 transition-colors text-sm appearance-none cursor-pointer text-text-muted"
                  >
                    <option value="">Select Service</option>
                    {servicesData.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 focus:border-primary/50 transition-colors text-sm resize-none placeholder-text-muted"
                />

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <motion.button
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className={`btn-electric flex items-center gap-2 text-sm px-5 py-2.5 ${
                      status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-1.5 text-green-400 text-sm"
                    >
                      <CheckCircle size={16} />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-1.5 text-red-400 text-sm"
                    >
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-xl font-display font-bold text-white mb-4 text-center">
            <span className="gradient-text">FAQ</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqData.slice(0, 4).map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="glass rounded-lg p-4 border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="font-bold text-white text-sm mb-1.5">{faq.question}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hiring Banner */}
        {careersData.isHiring && (
          <motion.div variants={itemVariants}>
            <div className="glass rounded-xl p-4 border border-secondary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">
                    {careersData.headline}
                  </h4>
                  <p className="text-text-secondary text-xs">
                    {careersData.description}
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${careersData.email}`}
                className="btn-outline text-xs px-4 py-2 border-secondary text-secondary hover:bg-secondary/10 whitespace-nowrap"
              >
                Join Us →
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Contact;
