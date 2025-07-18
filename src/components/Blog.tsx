import { Calendar, User, ArrowRight } from 'lucide-react';

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
    // ... other posts
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Cybersecurity', 'Mobile Development', 'Data Science', 'Web Development'];

  return (
    <section id="blog" className="py-20 bg-tp-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tp-text mb-6">Latest Insights</h2>
          <p className="text-xl text-tp-muted max-w-3xl mx-auto">
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
                  ? 'bg-tp-accent text-white'
                  : 'bg-tp-light text-tp-muted hover:bg-tp-btn-hover/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-tp-light rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-tp-btn/10 text-tp-btn px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Featured Post
              </div>
              <h3 className="text-3xl font-bold text-tp-text mb-4">{blogPosts[0].title}</h3>
              <p className="text-tp-muted mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>

              <div className="flex items-center space-x-6 text-sm text-tp-muted mb-6">
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
                <button className="bg-tp-btn hover:bg-tp-btn-hover text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-tp-muted">
                {blogPosts[0].category}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-tp-muted">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-tp-text mb-3 group-hover:text-tp-accent transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-tp-muted mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-tp-muted mb-4">
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
                  <button className="text-tp-accent hover:text-tp-btn-hover font-semibold flex items-center space-x-1 transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-tp-btn text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Tech Insights</h3>
          <p className="text-tp-light mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, insights, and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-tp-text focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-tp-btn hover:bg-tp-light px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-tp-light text-sm mt-4">
            Join 5,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-tp-light p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-tp-text mb-4">Have Questions About Our Insights?</h3>
            <p className="text-tp-muted mb-6 max-w-2xl mx-auto">
              Our team is always happy to discuss technology trends and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-tp-btn hover:bg-tp-btn-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;