import { Calendar, User, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useBlog } from '../hooks/useContent';
import type { BlogPost } from '../types/content';

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const blogPosts = useBlog();

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 gradient-bg-blog relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <span className="inline-block px-3 py-1.5 rounded-full glass border border-secondary/30 text-secondary text-xs font-medium mb-4">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            Tech trends, tutorials, and behind-the-scenes looks at how we build.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-background'
                  : 'glass border border-white/10 text-text-secondary hover:border-primary/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured + List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-8">
          {/* Featured Post */}
          {featuredPost && activeCategory === 'All' && (
            <motion.article
              variants={itemVariants}
              className="lg:col-span-3 group"
            >
              <div className="relative rounded-xl overflow-hidden glass border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-background text-[10px] font-bold flex items-center gap-1">
                      <Sparkles size={10} />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-primary text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  
                  <h3 className="text-lg font-display font-bold text-white mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(featuredPost.date)}
                      </span>
                    </div>
                    
                    <span className="text-primary text-xs font-medium flex items-center gap-1">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Side Posts List */}
          <div className={`${featuredPost && activeCategory === 'All' ? 'lg:col-span-2' : 'lg:col-span-5'} flex flex-col gap-3`}>
            {filteredPosts
              .filter(post => activeCategory !== 'All' || !post.featured)
              .slice(0, 3)
              .map((post: BlogPost, index: number) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex gap-3 p-3 rounded-lg glass border border-white/10 hover:border-primary/30 transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <span className="text-[10px] text-primary font-medium mb-1">
                        {post.category}
                      </span>
                      
                      <h4 className="font-bold text-white text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-[10px] text-text-muted">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <motion.div variants={itemVariants}>
          <div className="glass rounded-xl p-5 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base font-display font-bold text-white mb-1">
                  Stay in the Loop
                </h3>
                <p className="text-text-secondary text-xs">
                  Get the latest articles delivered to your inbox.
                </p>
              </div>
              
              <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 sm:w-48 px-3 py-2 rounded-lg glass border border-white/10 focus:border-primary/50 text-white placeholder-text-muted text-xs"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-electric px-4 py-2 text-xs"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </section>
  );
};

export default Blog;
