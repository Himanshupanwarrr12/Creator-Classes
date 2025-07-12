import React from 'react'
import { GraduationCap, Users, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <div>  {/* Stats Section */}
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
  )
}
