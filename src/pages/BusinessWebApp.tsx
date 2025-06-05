import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessWebApp = () => {
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
            5 Signs Your Business Needs a Web App
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Identifying when it's time to move from manual processes to automated software solutions.
          </p>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              The Digital Transformation Journey
            </h2>
            <p className="text-slate-600 mb-6">
              In today's fast-paced business environment, staying competitive often means embracing digital solutions. 
              A custom web application can be the key to unlocking new levels of efficiency and growth. 
              Here are five clear indicators that your business might be ready for this transformation.
            </p>

            <div className="space-y-8 mb-12">
              {/* Sign 1 */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Manual Processes Are Taking Too Much Time
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  If your team is spending excessive time on repetitive tasks like data entry, 
                  report generation, or customer communication, it's a clear sign that automation 
                  could significantly improve your operations.
                </p>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Warning Signs:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Employees working overtime to complete routine tasks
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Increased error rates in manual data entry
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Delays in processing customer requests
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sign 2 */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Data Management Is Becoming Unwieldy
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  When spreadsheets and paper files can no longer handle your growing data needs, 
                  it's time to consider a more robust solution. A web app can provide centralized, 
                  secure, and easily accessible data management.
                </p>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Warning Signs:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Difficulty in finding and accessing information
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Multiple versions of the same data
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Concerns about data security and backup
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sign 3 */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Customer Experience Needs Improvement
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  If your customers are experiencing delays or frustration with your current processes, 
                  a web app can provide a more streamlined and user-friendly experience.
                </p>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Warning Signs:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Long response times to customer inquiries
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Difficulty in tracking customer interactions
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Limited self-service options for customers
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sign 4 */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Business Growth Is Being Hindered
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  When your current systems can't keep up with your business growth, it's time to 
                  invest in scalable solutions that can grow with you.
                </p>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Warning Signs:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Systems becoming slower with increased usage
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Difficulty in adding new features or services
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Inability to handle increased customer volume
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sign 5 */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-developer-teal rounded-full flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    Remote Work and Collaboration Challenges
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  In today's hybrid work environment, having a centralized web application can 
                  significantly improve team collaboration and productivity.
                </p>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Warning Signs:</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Difficulty in sharing and accessing files
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Communication gaps between team members
                    </li>
                    <li className="flex items-center">
                      <span className="text-developer-teal mr-2">•</span>
                      Inconsistent work processes across locations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-developer-teal/10 rounded-xl p-6 border border-developer-teal/20">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-slate-600 mb-4">
                Let's discuss how a custom web application can help streamline your operations 
                and drive business growth.
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

export default BusinessWebApp; 