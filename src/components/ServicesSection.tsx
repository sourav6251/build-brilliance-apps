
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, FileText, User } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-developer-teal" />,
      title: "Custom Web Applications",
      description: "Full-stack web applications built with modern technologies like React, Node.js, and cloud infrastructure. From simple business tools to complex SaaS platforms.",
      features: ["Responsive Design", "API Integration", "Database Design", "Cloud Deployment"]
    },
    {
      icon: <FileText className="h-12 w-12 text-developer-teal" />,
      title: "Educational Software",
      description: "Specialized management systems for educational institutions. Student portals, attendance tracking, grade management, and administrative workflows.",
      features: ["Student Management", "Attendance Systems", "Grade Tracking", "Faculty Portals"]
    },
    {
      icon: <User className="h-12 w-12 text-developer-teal" />,
      title: "Business Solutions",
      description: "Custom software solutions for startups and SMEs. Inventory management, CRM systems, workflow automation, and process optimization.",
      features: ["Process Automation", "Data Analytics", "System Integration", "Performance Optimization"]
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your needs and requirements" },
    { step: "02", title: "Design", description: "Creating wireframes and system architecture" },
    { step: "03", title: "Build", description: "Developing with regular progress updates" },
    { step: "04", title: "Launch", description: "Deployment with ongoing support" }
  ];

  return (
    <section id="services" className="py-20 bg-developer-gray-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-developer-navy mb-6">
            Services That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in creating custom software solutions that streamline operations, 
            improve efficiency, and drive business growth across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-developer-navy">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-developer-teal rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-developer-navy text-center mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-developer-teal text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-developer-navy mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
