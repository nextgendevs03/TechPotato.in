import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1555DESIGN?text=Hi! I\'d like to get in touch about your design services.', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-7 h-7 text-amber-600" />,
      title: "Call Us",
      primary: "+1 (555) DESIGN",
      secondary: "Available Mon-Fri 9AM-6PM",
      action: () => window.open('tel:+1555DESIGN'),
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: <Mail className="w-7 h-7 text-amber-600" />,
      title: "Email Us",
      primary: "hello@auradesignhub.com",
      secondary: "We respond within 24 hours",
      action: () => window.open('mailto:hello@auradesignhub.com'),
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: <MapPin className="w-7 h-7 text-amber-600" />,
      title: "Visit Our Studio",
      primary: "123 Design Street",
      secondary: "Creative City, CA 90210",
      action: () => window.open('https://maps.google.com/?q=123+Design+Street,+Creative+City,+CA'),
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    },
    {
      icon: <Clock className="w-7 h-7 text-amber-600" />,
      title: "Business Hours",
      primary: "Mon - Fri: 9:00 AM - 6:00 PM",
      secondary: "Sat: 10:00 AM - 4:00 PM",
      action: null,
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Create Something
            <span className="block text-amber-600">Beautiful Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mb-16">
          {/* Contact Information Cards */}
          <div className="xl:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`${info.bgColor} p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 ${
                  info.action ? 'cursor-pointer hover:scale-105' : ''
                }`}
                onClick={info.action || undefined}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${info.iconBg} p-3 rounded-xl`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h4>
                    <p className="text-gray-800 font-medium mb-1">{info.primary}</p>
                    <p className="text-gray-600 text-sm">{info.secondary}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Instant Response</h4>
                  <p className="text-green-100">Chat with us on WhatsApp</p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-green-600 py-3 px-6 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Send className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Send Us a Message</h3>
              </div>
              
              {submitMessage && (
                <div className="bg-green-50 border-l-4 border-green-400 text-green-700 p-4 rounded-lg mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-medium">{submitMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-900"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="renovation">Home Renovation</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project vision, timeline, budget range, and any specific requirements you have in mind..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={22} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Design Journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Book a free consultation and let's discuss how we can transform your space into something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle size={22} />
                <span>Quick Chat on WhatsApp</span>
              </button>
              <button
                onClick={() => window.open('tel:+1555DESIGN')}
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <Calendar size={22} />
                <span>Schedule a Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;