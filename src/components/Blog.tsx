import React from 'react';
import { Calendar, User, ArrowRight, MessageCircle } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and deploy software solutions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read'
    },
    {
      title: 'Cloud Migration: Best Practices for 2024',
      excerpt: 'Learn the essential strategies for successful cloud migration and digital transformation initiatives.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Davis',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '7 min read'
    },
    {
      title: 'Cybersecurity Trends Every Business Should Know',
      excerpt: 'Stay ahead of emerging cybersecurity threats with these essential security practices and technologies.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read'
    },
    {
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare different mobile development approaches to choose the best strategy for your business needs.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emily Chen',
      date: '2024-01-01',
      category: 'Mobile Development',
      readTime: '4 min read'
    },
    {
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Discover how modern data analytics can transform your business decision-making process.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Wilson',
      date: '2023-12-28',
      category: 'Data Science',
      readTime: '8 min read'
    },
    {
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn the architectural patterns and technologies needed to build applications that scale.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Lisa Zhang',
      date: '2023-12-25',
      category: 'Web Development',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Cybersecurity', 'Mobile Development', 'Data Science', 'Web Development'];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in software development and digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Featured Post
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>

              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                {blogPosts[0].category}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1 transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Tech Insights</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, insights, and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Join 5,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions About Our Insights?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is always happy to discuss technology trends and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Our Experts
              </button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
              >
                <MessageCircle size={20} />
                <span>Quick Discussion</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;