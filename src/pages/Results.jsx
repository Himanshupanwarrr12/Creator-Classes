import React from 'react';
import { GraduationCap } from "lucide-react";

const Results = () => {
  // Sample student photos data
  const studentPhotos = [
    { id: 1, imageUrl: "/sakshi.jpg" },
    { id: 2, imageUrl: "/nikita.jpg" },
    { id: 3, imageUrl: "/divyanshi.jpg"},
    { id: 4,imageUrl: "/mohit.jpg" },
    { id: 5,imageUrl: "/shreya.jpg" },
    { id: 6,imageUrl: "/aditya.jpg" },
    { id: 7,imageUrl: "/ritika.jpg" },
    { id: 8,imageUrl: "/rohit.jpg" },
    { id: 9,imageUrl: "/10/IMG-20250712-WA0012.jpg" },
    { id: 10,imageUrl: "/10/IMG-20250712-WA0016.jpg" },
    { id: 11,imageUrl: "/10/IMG-20250712-WA0020.jpg" },
    { id: 12,imageUrl: "/10/IMG-20250712-WA0022.jpg" },
    { id: 13,imageUrl: "/10/IMG-20250717-WA0003.jpg" },
    { id: 14,imageUrl: "/10/IMG-20250717-WA0005.jpg" },
    { id: 15,imageUrl: "/10/WhatsApp Image 2025-07-17 at 12.52.56_31cce015.jpg" },
    { id: 16,imageUrl: "/10/WhatsApp Image 2025-07-17 at 12.34.49_c390632d.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-indigo-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-700/50 mb-6 md:mb-8">
            <GraduationCap className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-300 text-sm font-medium">
              Celebrating Excellence Since 2014
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Student <span className="bg-gradient-to-r from-indigo-400 to-violet-500 text-transparent bg-clip-text">Achievements</span>
          </h1>

          <p className="text-base md:text-lg text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Witness the success stories of our students who have excelled in competitive exams, 
            board results, and prestigious scholarships through our dedicated mentorship.
          </p>
        </div>

        {/* Video Showcase Section */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <div className="w-full max-w-3xl bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
            <div className="relative pb-[56.25%] bg-gradient-to-br from-indigo-900/20 to-violet-900/30">
              <video 
                controls 
                className="absolute top-0 left-0 w-full h-full object-contain"
              >
                <source src="/muskan.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 md:p-6 border-t border-slate-700/50">
              <h3 className="text-lg md:text-xl text-center font-bold text-white mb-2">Muskan's Neet Journey</h3>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 sm:mb-0">
              Toppers <span className="text-indigo-400">Gallery</span>
            </h2>
            <div className="text-indigo-300">
              <span className="bg-indigo-900/30 px-3 py-1 rounded-lg text-sm md:text-base">8 Photos</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {studentPhotos.map((student) => (
              <div 
                key={student.id}
                className="bg-slate-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="aspect-square flex items-center justify-center">
                  {student.imageUrl ? (
                    <img 
                      src={student.imageUrl} 
                      alt={`Student ${student.id}`} 
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-indigo-900/20 to-violet-900/30 w-full h-full flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-11/12 h-11/12" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 md:mt-12 text-center bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-indigo-700/50">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
            Become Our Next Success Story
          </h2>
          <p className="text-indigo-300 mb-6 md:mb-8 text-sm md:text-base max-w-2xl mx-auto">
            Join our proven programs and get personalized mentorship to achieve your academic goals
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Results;
