import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace with your actual credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // e.g., 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // e.g., 'xxxxxxxxxxxxxxx'

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

    try {
      // Check if EmailJS is configured
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Demo mode - simulate submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setStatus('success');
      } else {
        // Real EmailJS submission
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
          EMAILJS_PUBLIC_KEY
        );
        setStatus('success');
      }

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@techpotato.in',
      href: 'mailto:hello@techpotato.in',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Tech Street, Digital City',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      href: '#',
    },
  ];

  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Cybersecurity Services',
    'Data Analytics',
    'Digital Transformation',
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on complexity, but most projects are completed within 3-6 months. We provide detailed timeline estimates during consultation.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical support to ensure your systems run smoothly.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'We work with modern technologies including React, Node.js, Python, AWS, Azure, and many others. We choose the best tech stack for each project.',
    },
    {
      question: 'Can you work with our existing systems?',
      answer:
        'Absolutely! We specialize in system integration and can seamlessly connect new solutions with your existing infrastructure.',
    },
  ];

  return (
    <section id="contact" className="py-24 gradient-bg-contact relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
              <div className="relative p-8 h-full flex flex-col">
                <h3 className="text-2xl font-display font-bold text-background mb-4">
                  Contact Information
                </h3>
                <p className="text-background/80 mb-8">
                  We're here to help you every step of the way.
                </p>

                <div className="space-y-6 flex-grow">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-background/30 transition-colors">
                        <info.icon size={20} className="text-background" />
                      </div>
                      <div>
                        <div className="text-sm text-background/70">{info.label}</div>
                        <div className="font-semibold text-background">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-background/20">
                  <h4 className="font-semibold text-background mb-4">Quick Connect</h4>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="mailto:hello@techpotato.in"
                      className="w-10 h-10 rounded-lg bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors"
                    >
                      <Mail size={18} className="text-background" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="tel:+15551234567"
                      className="w-10 h-10 rounded-lg bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors"
                    >
                      <Phone size={18} className="text-background" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Send Us a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? '-top-2.5 text-xs text-primary bg-surface px-2'
                          : 'top-3.5 text-text-muted'
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? '-top-2.5 text-xs text-primary bg-surface px-2'
                          : 'top-3.5 text-text-muted'
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="relative">
                    <label
                      htmlFor="company"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'company' || formData.company
                          ? '-top-2.5 text-xs text-primary bg-surface px-2'
                          : 'top-3.5 text-text-muted'
                      }`}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'phone' || formData.phone
                          ? '-top-2.5 text-xs text-primary bg-surface px-2'
                          : 'top-3.5 text-text-muted'
                      }`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2.5 text-xs text-primary bg-surface px-2'
                        : 'top-3.5 text-text-muted'
                    }`}
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className={`btn-electric flex items-center gap-2 ${
                      status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-green-400"
                    >
                      <CheckCircle size={20} />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-red-400"
                    >
                      <AlertCircle size={20} />
                      <span>Failed to send. Please try again.</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h3>
            <p className="text-text-secondary">Quick answers to common questions about our services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="font-bold text-white mb-3">{faq.question}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Contact;
