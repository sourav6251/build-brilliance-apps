import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const featuredProject = {
    title: "College Department Management System",
    client: "Regional University",
    description: "A comprehensive administrative system that streamlined operations for a college department with 2,000+ students and 50+ faculty members.",
    challenge: "The department was struggling with manual paperwork, inefficient student record management, and time-consuming administrative processes.",
    solution: "Built a full-stack web application with automated workflows, RFID-enabled attendance tracking, and integrated faculty portals.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "AWS", "Redis", "RFID Integration"],
    results: [
      { metric: "60%", description: "Reduction in administrative workload" },
      { metric: "70%", description: "Faster grievance resolution" },
      { metric: "100%", description: "GDPR compliance achieved" },
      { metric: "2,000+", description: "Students using the system daily" }
    ],
    testimonial: "This system completely transformed how our department operates. The elimination of paperwork chaos alone saved us countless hours every week!",
    features: [
      "Automated student record management",
      "RFID/Biometric attendance integration", 
      "Exam scheduling and grade management",
      "Faculty coordination portals",
      "Real-time analytics dashboard",
      "GDPR-compliant data handling"
    ]
  };

  const otherProjects = [
    {
      title: "E-commerce SaaS Platform",
      description: "Multi-tenant SaaS platform for small businesses to create online stores",
      tech: ["Django", "React", "Stripe API", "AWS"],
      result: "30% increase in client sales within 6 months"
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Real-time patient data visualization for medical professionals",
      tech: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      result: "25% improvement in patient care efficiency"
    },
    {
      title: "Inventory Management System",
      description: "Smart inventory tracking with predictive analytics for retail chains",
      tech: ["Angular", "Spring Boot", "MongoDB", "ML"],
      result: "40% reduction in inventory costs"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-developer-navy mb-6">
            Featured Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions that deliver measurable results for my clients
          </p>
        </div>

        {/* Featured Project */}
        <div className="bg-gradient-to-br from-developer-navy to-developer-navy-light rounded-lg p-8 text-white mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">{featuredProject.title}</h3>
              <p className="text-developer-teal-light mb-4">Client: {featuredProject.client}</p>
              <p className="text-gray-300 mb-6">{featuredProject.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-developer-teal-light mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-developer-teal-light rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-developer-teal-light mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-developer-teal/20 text-developer-teal-light px-3 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {featuredProject.results.map((result, index) => (
                  <div key={index} className="text-center bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-developer-teal-light mb-2">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-300">{result.description}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-semibold text-developer-teal-light mb-3">Client Testimonial</h4>
                <blockquote className="text-gray-300 italic">
                  "{featuredProject.testimonial}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-developer-navy text-center mb-12">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-developer-navy">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-developer-teal/10 text-developer-teal px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      📈 {project.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-developer-teal hover:bg-developer-teal/90"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
