import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Thank you for your message!");
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-tp-light text-tp-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tp-accent mb-4">Get In Touch</h2>
          <p className="text-lg text-tp-muted">Let’s build something meaningful together.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="bg-tp-accent text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} />
                <span>contact@techpotato.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={20} />
                <span>Mon - Fri: 10AM - 6PM</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-3xl shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-tp-muted rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tp-btn"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-tp-muted rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tp-btn"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full border border-tp-muted rounded-lg px-4 py-3"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-tp-muted rounded-lg px-4 py-3"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-tp-muted rounded-lg px-4 py-3 text-gray-700"
                >
                  <option value="">Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="app">Mobile App</option>
                  <option value="uiux">UI/UX Design</option>
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full border border-tp-muted rounded-lg px-4 py-3 text-gray-700"
                >
                  <option value="">Select Budget</option>
                  <option value="under-25k">Under ₹25,000</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="above-50k">Above ₹50,000</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full border border-tp-muted rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-tp-btn"
              />

              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-tp-btn hover:bg-tp-btn-hover text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-spin h-5 w-5 border-2 border-white rounded-full border-b-transparent"></span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;