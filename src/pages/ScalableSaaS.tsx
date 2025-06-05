import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ScalableSaaS = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4 py-20">
        {/* Back button */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-600 hover:text-developer-teal transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Article Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-developer-teal/10 border border-developer-teal/20"
          >
            <span className="text-developer-teal text-sm font-medium">Knowledge Sharing</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Building Scalable SaaS Applications
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-slate-600 mb-8"
          >
            Best practices for creating software that grows with your business needs.
          </motion.p>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
        >
          <motion.div variants={itemVariants} className="prose prose-slate max-w-none">
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-slate-800 mb-4"
            >
              The Foundation of Scalable SaaS
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 mb-6"
            >
              Building a scalable SaaS application requires careful planning and implementation of 
              best practices from the ground up. Here's a comprehensive guide to creating software 
              that can grow with your business.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-8 mb-12">
              {/* Section 1 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4"
                  >
                    1
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Microservices Architecture
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Breaking down your application into smaller, independent services allows for 
                  better scalability and maintenance. Each service can be scaled independently 
                  based on its specific needs.
                </p>
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Independent scaling of services
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Easier maintenance and updates
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Better fault isolation
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Section 2 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4"
                  >
                    2
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Database Scalability
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Implementing the right database strategy is crucial for handling growing data 
                  volumes and maintaining performance.
                </p>
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Best Practices:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Implement database sharding
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Use read replicas for heavy read operations
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Implement caching strategies
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Section 3 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4"
                  >
                    3
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Load Balancing and Auto-scaling
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Distributing traffic across multiple servers and automatically scaling resources 
                  based on demand ensures optimal performance and cost efficiency.
                </p>
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Implementation Tips:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Use cloud provider's auto-scaling features
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Implement health checks
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Set up proper monitoring and alerts
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Section 4 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4"
                  >
                    4
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Security and Compliance
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  As your application grows, maintaining security and compliance becomes increasingly 
                  important. Implement robust security measures from the start.
                </p>
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Essential Measures:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Implement role-based access control
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Regular security audits
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Data encryption at rest and in transit
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Section 5 */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4"
                  >
                    5
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Monitoring and Analytics
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Comprehensive monitoring and analytics help you understand your application's 
                  performance and user behavior, enabling data-driven decisions for scaling.
                </p>
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg border border-slate-200"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Key Metrics to Track:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      System performance metrics
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      User engagement and behavior
                    </motion.li>
                    <motion.li 
                      variants={itemVariants}
                      className="flex items-center"
                    >
                      <span className="text-developer-teal mr-2">•</span>
                      Business KPIs and growth indicators
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-developer-teal/10 rounded-xl p-6 border border-developer-teal/20"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Ready to Build Your Scalable SaaS?
              </h3>
              <p className="text-slate-600 mb-4">
                Let's discuss how we can help you create a robust and scalable SaaS application 
                that grows with your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/#contact')}
                className="bg-developer-teal text-white px-6 py-3 rounded-lg hover:bg-developer-teal/90 transition-colors"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScalableSaaS; 