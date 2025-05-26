
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center gradient-navy text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turning Ideas into 
            <span className="text-developer-teal-light"> Scalable</span>,
            <br />
            <span className="text-developer-teal-light">User-Friendly</span> Software
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            I craft custom web apps and software solutions that solve real-world problems. 
            From concept to deployment, I deliver systems that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-developer-teal hover:bg-developer-teal/90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Let's Build Your Vision
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="border-developer-teal-light text-developer-teal-light hover:bg-developer-teal-light hover:text-developer-navy px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-developer-teal-light mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-developer-teal-light mb-2">60%</div>
              <div className="text-gray-300">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-developer-teal-light mb-2">24h</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-developer-teal-light hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
