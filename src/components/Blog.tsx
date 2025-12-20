import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and deploy software solutions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      featured: true,
    },
    {
      title: 'Cloud Migration: Best Practices for 2024',
      excerpt: 'Learn the essential strategies for successful cloud migration and digital transformation initiatives.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Davis',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '7 min read',
    },
    {
      title: 'Cybersecurity Trends Every Business Should Know',
      excerpt: 'Stay ahead of emerging cybersecurity threats with these essential security practices and technologies.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
    },
    {
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare different mobile development approaches to choose the best strategy for your business needs.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emily Chen',
      date: '2024-01-01',
      category: 'Mobile Development',
      readTime: '4 min read',
    },
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Cybersecurity', 'Mobile Development'];

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

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="py-24 gradient-bg-blog relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full glass border border-accent/30 text-accent text-sm font-medium mb-4">
            Our Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in software development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-background'
                  : 'glass border border-white/10 text-text-secondary hover:border-primary/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'All' && (
          <motion.div variants={itemVariants} className="mb-16">
            <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:from-transparent lg:via-transparent lg:to-background/80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-background text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-text-muted mb-6">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-2 text-primary font-semibold group/btn"
                  >
                    Read Article
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.filter(post => !post.featured || activeCategory !== 'All').map((post, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -8 }}
              className="glass rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full glass text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <button className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
          <div className="relative glass border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Stay Updated with Tech Insights
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest articles, insights, and technology trends delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 text-white placeholder-text-muted"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-electric whitespace-nowrap"
              >
                <span>Subscribe</span>
              </motion.button>
            </form>
            <p className="text-text-muted text-sm mt-4">
              Join 5,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default Blog;
