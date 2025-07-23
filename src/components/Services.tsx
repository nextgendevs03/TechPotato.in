
import { Code, Smartphone, Cloud, Shield, BarChart, Cog} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business needs and requirements.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['AWS Solutions', 'Azure Integration', 'Cloud Migration', 'DevOps Services']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets and sensitive data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Reporting']
    },
    {
      icon: Cog,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies to modernize your business operations.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </button>
               
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expert services can help you achieve your technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Free Consultation
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;