
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-tp-bg text-tp-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Tech Potato Softwares</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We are a forward-thinking IT company dedicated to transforming businesses through innovative 
            technology solutions and digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between technology and business success, Tech Potato Softwares 
              has been at the forefront of digital innovation. We combine technical expertise with business acumen 
              to deliver solutions that not only meet current needs but also prepare our clients for future challenges.
            </p>
            <p className="mb-8 leading-relaxed">
              Our team of skilled developers, designers, and consultants work collaboratively to understand your 
              unique requirements and deliver customized solutions that drive measurable results.
            </p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-tp-primary hover:bg-tp-accent text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#F4EBD0] to-[#FFE5B4] p-8 rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team collaboration" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-tp-primary mb-1">200+</div>
                <div className="text-sm text-tp-text">Projects</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-tp-accent mb-1">98%</div>
                <div className="text-sm text-tp-text">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.'
            },
            {
              icon: Users,
              title: 'Our Team',
              description: 'A diverse group of talented professionals with expertise in cutting-edge technologies and a passion for solving complex business challenges.'
            },
            {
              icon: Award,
              title: 'Our Values',
              description: 'Excellence, integrity, innovation, and client success are at the core of everything we do, ensuring exceptional results every time.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-[#FFF8EE] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#D2691E]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="text-tp-accent" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;