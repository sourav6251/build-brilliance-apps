
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const techStack = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python/Django", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS/Azure", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "TypeScript", category: "Language" },
    { name: "MongoDB", category: "Database" }
  ];

  const whyWorkWithMe = [
    "✅ 100% client satisfaction rate",
    "✅ End-to-end ownership (design to deployment)",
    "✅ Maintenance & support included",
    "✅ GDPR & security compliance",
    "✅ Regular progress updates",
    "✅ Post-launch optimization"
  ];

  return (
    <section id="about" className="py-20 bg-developer-gray-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-developer-navy mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating software that makes a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-developer-teal to-developer-teal/80 rounded-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-developer-teal-light mb-4">
                I've been obsessed with clean code since building my first application at 15. 
                What started as curiosity has evolved into a passion for creating software that 
                solves real-world problems.
              </p>
              <p className="text-developer-teal-light mb-4">
                Over the years, I've specialized in educational technology and business automation, 
                helping institutions and companies streamline their operations through custom software solutions.
              </p>
              <p className="text-developer-teal-light">
                Every project is an opportunity to make someone's work life easier and more efficient. 
                That's what drives me to deliver exceptional results, every time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-developer-navy mb-4">Why Work With Me?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyWorkWithMe.map((point, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg p-6 shadow-md mb-8">
              <h4 className="font-semibold text-developer-navy mb-6">Tech Stack & Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-medium text-developer-navy">{tech.name}</span>
                    <span className="text-sm text-developer-teal">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-developer-navy text-white">
              <CardContent className="p-6">
                <h4 className="font-semibold text-developer-teal-light mb-4">Personal Touch</h4>
                <p className="text-gray-300 mb-4">
                  "I reply within 24 hours—no robots, just me! When you reach out, 
                  you're talking directly to the person who will be building your solution."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-developer-teal rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Software Developer</div>
                    <div className="text-developer-teal-light text-sm">Full-Stack Specialist</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-developer-navy text-center mb-8">
            Knowledge Sharing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-developer-navy mb-2">
                Custom Software for Educational Institutions
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                How modern software solutions can revolutionize administrative workflows in schools and universities.
              </p>
              <span className="text-developer-teal text-sm font-medium">Read More →</span>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-developer-navy mb-2">
                5 Signs Your Business Needs a Web App
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Identifying when it's time to move from manual processes to automated software solutions.
              </p>
              <span className="text-developer-teal text-sm font-medium">Read More →</span>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-developer-navy mb-2">
                Building Scalable SaaS Applications
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Best practices for creating software that grows with your business needs.
              </p>
              <span className="text-developer-teal text-sm font-medium">Read More →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
