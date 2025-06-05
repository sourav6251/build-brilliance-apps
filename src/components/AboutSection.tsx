import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Database, Globe, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const navigate = useNavigate();
  
  const techStack = [
    { name: "Java", category: "Language", icon: <Code className="w-5 h-5" /> },
    { name: "JavaScript", category: "Language", icon: <Code className="w-5 h-5" /> },
    { name: "TypeScript", category: "Language", icon: <Code className="w-5 h-5" /> },
    { name: "Spring Boot", category: "Backend", icon: <Server className="w-5 h-5" /> },
    { name: "React", category: "Frontend", icon: <Globe className="w-5 h-5" /> },
    { name: "MySQL", category: "Database", icon: <Database className="w-5 h-5" /> },
    { name: "MongoDB", category: "Database", icon: <Database className="w-5 h-5" /> }
  ];

  const whyWorkWithMe = [
    "✅ 100% client satisfaction rate",
    "✅ End-to-end ownership (design to deployment)",
    "✅ Maintenance & support included",
    "✅ GDPR & security compliance",
    "✅ Regular progress updates",
    "✅ Post-launch optimization"
  ];

  const articles = [
    {
      title: "Custom Software for Educational Institutions",
      description: "How modern software solutions can revolutionize administrative workflows in schools and universities.",
      path: "/educational-software"
    },
    {
      title: "5 Signs Your Business Needs a Web App",
      description: "Identifying when it's time to move from manual processes to automated software solutions.",
      path: "/business-web-app"
    },
    {
      title: "Building Scalable SaaS Applications",
      description: "Best practices for creating software that grows with your business needs.",
      path: "/saas-applications"
    }
  ];

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
    <section id="about" className="py-20 bg-gradient-to-b border-0 from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-developer-teal/5 via-transparent to-transparent" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-developer-teal/10 border border-developer-teal/20"
          >
            <span className="text-developer-teal text-sm font-medium">Get to Know Me</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Passionate about creating software that makes a difference
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl transform transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                My Story
              </h3>
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-slate-300 leading-relaxed"
                >
                  I've been obsessed with clean code since building my first application at 15. 
                  What started as curiosity has evolved into a passion for creating software that 
                  solves real-world problems.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-slate-300 leading-relaxed"
                >
                  Over the years, I've specialized in educational technology and business automation, 
                  helping institutions and companies streamline their operations through custom software solutions.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-slate-300 leading-relaxed"
                >
                  Every project is an opportunity to make someone's work life easier and more efficient. 
                  That's what drives me to deliver exceptional results, every time.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 transform transition-all duration-300"
            >
              <h4 className="font-semibold text-slate-800 mb-4 text-lg">Why Work With Me?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyWorkWithMe.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-sm text-slate-600 flex items-center space-x-2 group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-developer-teal transition-transform"
                    >
                      ✅
                    </motion.span>
                    <span className="group-hover:text-slate-800 transition-colors">
                      {point.replace('✅ ', '')}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <Card className="border-0 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl transform transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="font-semibold text-slate-200 mb-4 text-lg">Personal Touch</h4>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-300 mb-6 leading-relaxed"
                  >
                    "I reply within 24 hours—no robots, just me! When you reach out, 
                    you're talking directly to the person who will be building your solution."
                  </motion.p>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 bg-slate-700/50 p-4 rounded-xl"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-developer-teal to-developer-teal/80 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-white font-bold text-lg">DS</span>
                    </motion.div>
                    <div>
                      <div className="font-semibold">Software Developer</div>
                      <div className="text-slate-300 text-sm">Full-Stack Specialist</div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 transform transition-all duration-300"
            >
              <h4 className="font-semibold text-slate-800 mb-4 text-lg">Tech Stack</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-developer-teal transition-transform"
                    >
                      {tech.icon}
                    </motion.span>
                    <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-slate-800 text-center mb-8"
          >
            Knowledge Sharing
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {articles.map((article, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate(article.path)}
              >
                <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-developer-teal transition-colors">
                  {article.title}
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  {article.description}
                </p>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center text-slate-700 text-sm font-medium group-hover:text-developer-teal transition-colors"
                >
                  Read More
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
