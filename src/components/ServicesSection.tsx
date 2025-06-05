import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, FileText, User, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [{
    icon: <Code className="h-12 w-12 text-developer-teal" />,
    title: "Custom Web Applications",
    description: "Full-stack web applications built with modern technologies like React, Node.js, and cloud infrastructure. From simple business tools to complex SaaS platforms.",
    features: ["Responsive Design", "API Integration", "Database Design", "Cloud Deployment"]
  }, {
    icon: <FileText className="h-12 w-12 text-developer-teal" />,
    title: "Educational Software",
    description: "Specialized management systems for educational institutions. Student portals, attendance tracking, grade management, and administrative workflows.",
    features: ["Student Management", "Attendance Systems", "Grade Tracking", "Faculty Portals"]
  }, {
    icon: <User className="h-12 w-12 text-developer-teal" />,
    title: "Business Solutions",
    description: "Custom software solutions for startups and SMEs. Inventory management, CRM systems, workflow automation, and process optimization.",
    features: ["Process Automation", "Data Analytics", "System Integration", "Performance Optimization"]
  }];

  const processSteps = [{
    step: "01",
    title: "Discovery",
    description: "Understanding your needs and requirements"
  }, {
    step: "02",
    title: "Design",
    description: "Creating wireframes and system architecture"
  }, {
    step: "03",
    title: "Build",
    description: "Developing with regular progress updates"
  }, {
    step: "04",
    title: "Launch",
    description: "Deployment with ongoing support"
  }];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-developer-gray-warm to-white relative overflow-hidden">
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
            <span className="text-developer-teal text-sm font-medium">What I Offer</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-developer-navy mb-6"
          >
            Services That Drive Results
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            I specialize in creating custom software solutions that streamline operations, 
            improve efficiency, and drive business growth across various industries.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <CardHeader className="text-center pb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex justify-center mb-4 transform transition-transform duration-300"
                >
                  {service.icon}
                </motion.div>
                <CardTitle className="text-xl font-semibold text-developer-navy group-hover:text-developer-teal transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.5 }}
                        className="w-2 h-2 bg-developer-teal rounded-full mr-3 transition-transform"
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-developer-navy text-center mb-8"
          >
            How It Works
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-developer-teal/20 group-hover:bg-developer-teal transition-colors origin-left"
                  />
                )}
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-developer-teal to-developer-teal/80 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                  >
                    {step.step}
                  </motion.div>
                  <h4 className="font-semibold text-developer-navy mb-2 group-hover:text-developer-teal transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;