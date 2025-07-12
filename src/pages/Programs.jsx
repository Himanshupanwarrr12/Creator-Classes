import React from 'react';
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Class 6–10 Foundation",
      description: "Strong fundamentals for middle school students. Builds conceptual clarity in Math and Science.",
      icon: "📚"
    },
    {
      id: 2,
      title: "Class 11–12 Commerce",
      description: "Comprehensive coverage of Accountancy, Business Studies and Economics. CBSE and State Boards.",
      icon: "💼"
    },
    {
      id: 3,
      title: "Class 11–12 Science",
      description: "In-depth Physics, Chemistry, Biology & Mathematics. Prepares students for higher education.",
      icon: "🔬"
    },
    {
      id: 4,
      title: "JEE Mains & Advanced",
      description: "Targeted coaching with expert faculty. Includes test series, doubt sessions and mock interviews.",
      icon: "🧪"
    },
    {
      id: 5,
      title: "NEET Preparation",
      description: "Medical entrance exam focus with NCERT-based learning. Regular practice tests and analysis.",
      icon: "⚕️"
    },
    {
      id: 6,
      title: "Olympiad Training",
      description: "Specialized program for SOF, NSO, IMO etc. Enhances problem-solving and analytical skills.",
      icon: "🏅"
    },
    {
      id: 7,
      title: "Board Exam Crash Course",
      description: "Last-minute revision and important questions. Time management strategies and practice papers.",
      icon: "📝"
    },
    {
      id: 8,
      title: "NDA Preparation",
      description: "Comprehensive training for National Defence Academy entrance. Covers Mathematics and General Ability.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-700/50 mb-8">
            <GraduationCap className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-300 text-sm font-medium">
              Transforming Students into Scholars Since 2014
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Our Academic <span className="bg-gradient-to-r from-indigo-400 to-violet-500 text-transparent bg-clip-text">Programs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully designed programs that cater to students from Class 6 to 
            competitive exams like JEE, NEET & NDA. Each program is structured to build clarity, 
            confidence, and success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {program.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-indigo-100 mt-2">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-700/50">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to start your success journey?
          </h2>
          <p className="text-indigo-300 mb-8 max-w-2xl mx-auto">
            Book a free counseling session with our academic experts to find the perfect program for your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-900/30"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;