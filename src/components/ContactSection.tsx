
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    budget: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      projectDetails: '',
      budget: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 gradient-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your project and 
            create a solution that drives real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Start Your Project</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-white/30 text-white rounded-md px-3 py-2"
                    required
                  >
                    <option value="" className="text-gray-900">Select budget range</option>
                    <option value="5k-10k" className="text-gray-900">$5,000 - $10,000</option>
                    <option value="10k-25k" className="text-gray-900">$10,000 - $25,000</option>
                    <option value="25k-50k" className="text-gray-900">$25,000 - $50,000</option>
                    <option value="50k+" className="text-gray-900">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-developer-teal hover:bg-developer-teal/90 text-white font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-300 mb-6">
                  I'm always excited to discuss new projects and opportunities. 
                  Whether you need a complete system or want to improve an existing one, 
                  let's talk about how I can help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-developer-teal-light" />
                    <span className="text-gray-300">developer@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-developer-teal-light" />
                    <span className="text-gray-300">github.com/developer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-developer-teal-light" />
                    <span className="text-gray-300">linkedin.com/in/developer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-developer-teal/20 border-developer-teal-light/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Free Consultation</h3>
                <p className="text-gray-300 mb-4">
                  Not sure where to start? I offer a free 30-minute consultation to discuss 
                  your project requirements and provide initial recommendations.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>📋 Project scope assessment</div>
                  <div>⚡ Technology recommendations</div>
                  <div>📊 Timeline and budget estimation</div>
                  <div>🎯 Success metrics definition</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
                <p className="text-gray-300">
                  I pride myself on quick, personal responses. When you reach out, 
                  you're talking directly to me - no account managers or chatbots. 
                  Expect a detailed response within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
