import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, Clock } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-indigo-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-700/50 mb-8">
            <GraduationCap className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-300 text-sm font-medium">
              Transforming Education Since 2014
            </span>
          </div>

          {/* Main Heading - Static Text */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Excellence in Education,{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-500 text-transparent bg-clip-text">
              Results That Matter
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Creator Classes offers comprehensive coaching up to 12th grade,
            focusing on nurturing excellence and building strong foundations for
            academic success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/programs"
              className="bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-900/30"
            >
              Explore Our Programs
            </Link>
          </div>

          {/* Mission Statement */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-16">
            <p className="text-indigo-300 text-lg font-medium italic">
              "We are here to create toppers!"
            </p>
            <p className="text-gray-300 mt-2">
              Our commitment to excellence drives every lesson, every interaction, and every success story.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-700/50 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Founder and Managing Director
            </h2>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-full w-24 h-24 flex items-center justify-center text-white text-2xl font-bold mb-4">
                YB
              </div>
              <h3 className="text-xl font-bold text-white">
                Yashwant Singh Bisht
              </h3>
              <p className="text-indigo-300 font-medium mb-2">
                MSc Physics & B.Ed
              </p>
              <p className="text-gray-300 max-w-2xl">
                With over 12 years of teaching experience, Yashwant founded Creator Classes with a vision to transform education through personalized learning and innovative teaching methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Teacher Profiles */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Meet Our Expert Faculty
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Physics Teacher */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  YB
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Yashwant Singh Bisht
                  </h3>
                  <p className="text-indigo-300 font-medium">Physics Teacher (MSc Physics)</p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-gray-400 text-sm">
                      12+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Bringing theoretical physics to life with real-world applications and engaging teaching methods.
              </p>
            </div>

            {/* Math Teacher */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  AT
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Ankit Tiwari
                  </h3>
                  <p className="text-indigo-300 font-medium">
                    Mathematics Teacher (MSc Mathematics)
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-gray-400 text-sm">
                      8+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Transforming complex mathematical concepts into intuitive, easy-to-understand lessons that build student
                confidence.
              </p>
            </div>

            {/* Economics Teacher */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  MK
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Monika Khatri
                  </h3>
                  <p className="text-indigo-300 font-medium">
                    Economics Teacher (MSc Economics)
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-gray-400 text-sm">
                      5+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Making economics relatable through real-world examples and current market trends to prepare students for practical challenges.
              </p>
            </div>

            {/* Junior Classes Teacher */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  R
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Ritika
                  </h3>
                  <p className="text-indigo-300 font-medium">
                    Junior Classes (MSc Chemistry)
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-gray-400 text-sm">
                      4+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Creating engaging learning experiences for younger students with innovative teaching methods and personalized attention.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, value: "90%", label: "Success Rate" },
              { icon: Users, value: "3000+", label: "Students Taught" },
              { icon: GraduationCap, value: "10", label: "Expert Faculty" },
              { icon: Clock, value: "10+", label: "Years Experience" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-indigo-500/50 transition-all duration-300 group hover:scale-105"
                >
                  <IconComponent className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 group-hover:text-violet-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;