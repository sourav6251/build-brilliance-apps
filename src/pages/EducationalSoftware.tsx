import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EducationalSoftware = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-20">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-600 hover:text-developer-teal transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-developer-teal/10 border border-developer-teal/20">
            <span className="text-developer-teal text-sm font-medium">Knowledge Sharing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Custom Software for Educational Institutions
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            How modern software solutions can revolutionize administrative workflows in schools and universities.
          </p>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              The Digital Transformation of Education
            </h2>
            <p className="text-slate-600 mb-6">
              Educational institutions are increasingly recognizing the need for digital transformation. 
              Custom software solutions are playing a pivotal role in modernizing administrative workflows, 
              enhancing student experiences, and improving overall operational efficiency.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Key Areas of Impact
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-developer-teal mr-3">•</span>
                <div>
                  <strong className="text-slate-800">Student Information Management</strong>
                  <p className="text-slate-600 mt-1">
                    Centralized systems for managing student records, attendance, grades, and academic progress.
                    Real-time updates and easy access to information for both staff and students.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-developer-teal mr-3">•</span>
                <div>
                  <strong className="text-slate-800">Administrative Workflow Automation</strong>
                  <p className="text-slate-600 mt-1">
                    Streamlined processes for admissions, course registration, and resource allocation.
                    Reduced manual paperwork and improved accuracy in administrative tasks.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-developer-teal mr-3">•</span>
                <div>
                  <strong className="text-slate-800">Communication and Collaboration</strong>
                  <p className="text-slate-600 mt-1">
                    Integrated platforms for seamless communication between students, faculty, and administration.
                    Enhanced collaboration through shared resources and real-time updates.
                  </p>
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Benefits of Custom Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Improved Efficiency</h4>
                <p className="text-slate-600 text-sm">
                  Automated workflows reduce manual tasks and processing time, allowing staff to focus on 
                  more important responsibilities.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Enhanced Data Security</h4>
                <p className="text-slate-600 text-sm">
                  Robust security measures protect sensitive student and institutional data while ensuring 
                  compliance with privacy regulations.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Better Decision Making</h4>
                <p className="text-slate-600 text-sm">
                  Comprehensive analytics and reporting tools provide valuable insights for 
                  informed decision-making.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Scalable Infrastructure</h4>
                <p className="text-slate-600 text-sm">
                  Flexible systems that can grow with your institution's needs and adapt to 
                  changing requirements.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Implementation Considerations
            </h3>
            <p className="text-slate-600 mb-6">
              When implementing custom software solutions in educational institutions, it's crucial to:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-600">
                <span className="text-developer-teal mr-3">✓</span>
                Involve all stakeholders in the planning process
              </li>
              <li className="flex items-center text-slate-600">
                <span className="text-developer-teal mr-3">✓</span>
                Ensure seamless integration with existing systems
              </li>
              <li className="flex items-center text-slate-600">
                <span className="text-developer-teal mr-3">✓</span>
                Provide comprehensive training for staff and users
              </li>
              <li className="flex items-center text-slate-600">
                <span className="text-developer-teal mr-3">✓</span>
                Plan for ongoing support and maintenance
              </li>
            </ul>

            <div className="bg-developer-teal/10 rounded-xl p-6 border border-developer-teal/20">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Ready to Transform Your Institution?
              </h3>
              <p className="text-slate-600 mb-4">
                Let's discuss how custom software solutions can help streamline your administrative 
                workflows and enhance the educational experience.
              </p>
              <button
                onClick={() => navigate('/#contact')}
                className="bg-developer-teal text-white px-6 py-3 rounded-lg hover:bg-developer-teal/90 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSoftware; 