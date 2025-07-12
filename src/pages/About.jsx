import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Award,
  Clock,
  Target,
  BookOpen,
  Lightbulb,
  Star,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Hero Section */}
      <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-indigo-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-700/50 mb-6">
            <GraduationCap className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-300 text-sm font-medium">
              Transforming Education Since 2014
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 max-w-2xl mx-auto">
            Empowering Students to Achieve <span className="text-indigo-400"> Success</span>
          </h1>
          <div className="w-24 h-1 bg-indigo-600 rounded-full mx-auto "></div>
        </div>
      </div>

      {/* Mission Section */}
<div className="py-5 md:py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      <div className="lg:w-1/2">
        <h2 className="text-2xl text-center md:text-3xl font-bold text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-300 mb-4 text-center leading-relaxed">
          At Creator Classes, we believe every student has the potential to create extraordinary success. 
          Our mission is to unlock that potential through personalized guidance and innovative teaching.
        </p>
        <p className="text-indigo-200 leading-relaxed text-center italic">
          "Learn, Grow and Succeed" - under the expert guidance of Yashwant Sir and our dedicated team.
        </p>
      </div>
      
      <div className="lg:w-1/2 w-full">
        <div className="bg-gradient-to-br from-indigo-600/20 to-violet-600/20 rounded-2xl p-5 backdrop-blur-sm border border-slate-700/50 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                icon: Target,
                title: "Goal-Oriented",
                desc: "Structured path to academic targets with clear milestones",
              },
              {
                icon: BookOpen,
                title: "Comprehensive",
                desc: "Complete curriculum covering all exam requirements",
              },
              {
                icon: Lightbulb,
                title: "Innovative",
                desc: "Modern teaching methods that engage students",
              },
              {
                icon: Star,
                title: "Excellence",
                desc: "Commitment to exceptional results and growth",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="p-3 md:p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className="flex items-start">
                    <div className="bg-indigo-900/30 p-2 rounded-lg group-hover:bg-indigo-900/50 transition-colors">
                      <IconComponent className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-white font-semibold mb-1 text-base">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Stats Section */}
      <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our Impact in Numbers
            </h2>
            <p className="text-indigo-300 text-sm">
              Proven results that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { icon: Award, value: "92%", label: "Success Rate" },
              { icon: Users, value: "4000+", label: "Students Taught" },
              { icon: GraduationCap, value: "10+", label: "Expert Faculty" },
              { icon: Clock, value: "11+", label: "Years Experience" },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 text-center transition-all duration-300 group hover:border-indigo-500/50"
                >
                  <div className="bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-900/50 transition-colors">
                    <IconComponent className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-indigo-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-slate-700/50 shadow-xl">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full mb-4">
                <Star className="w-4 h-4 text-indigo-400 mr-1" />
                <span className="text-indigo-300 text-sm">Limited Seats Available</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Step into success today
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm md:text-base">
                Join the Creator Classes community where dedication meets success. 
                Let your academic future take flight today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/30"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/programs"
                  className="bg-slate-800/60 hover:bg-slate-800/80 text-indigo-300 font-medium py-2.5 px-5 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What Students Say
            </h2>
            <p className="text-indigo-300 text-sm">
              Success stories from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                name: "Rahul Sharma", 
                role: "JEE Advanced 2023",
                quote: "Creator Classes transformed my approach to physics. The personalized attention made all the difference!",
                avatarColor: "bg-indigo-600"
              },
              { 
                name: "Priya Patel", 
                role: "NEET 2022",
                quote: "The comprehensive study material and regular mock tests were crucial for my success.",
                avatarColor: "bg-violet-600"
              },
              { 
                name: "Vikram Singh", 
                role: "Class 12 CBSE",
                quote: "Yashwant Sir's teaching methodology made complex concepts easy to understand.",
                avatarColor: "bg-purple-600"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className={`${testimonial.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-indigo-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">"{testimonial.quote}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}