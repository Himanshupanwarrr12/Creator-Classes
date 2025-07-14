import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, Clock } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-5 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Institute Real Image Section */}
          <div className="max-w-2xl mx-auto mb-4 ">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-indigo-800/40 bg-gray-900 flex justify-center items-center h-48 sm:h-56 md:h-64">
              <img
                src="/ccP.png"
                alt="Creator Classes Building"
                className="object-contain h-full"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-indigo-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-700/50 mb-8">
            <GraduationCap className="w-4 h-4 text-indigo-400 mr-2" />
            <span className=" text-sm font-medium">
              Transforming Students into Scholars Since 2014
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Creating{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-700 text-transparent bg-clip-text">
              Achievers
            </span>
            , <span>Not Just Learners.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            "At Creator Classes, we empower students up to 12th grade by
            building strong foundations and fostering a culture of academic
            excellence and growth."
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
          <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 mb-16">
            <p className="text-indigo-300 text-lg font-medium italic">
              "We are here to create toppers!"
            </p>
            <p className="text-violet-100 mt-2">
              Our commitment to excellence drives every lesson, every
              interaction, and every success story.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-600/50">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Founder Image & Basic Info */}
              <div className="lg:w-1/3 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* Dashed Border Element */}
                  <div className="absolute -inset-3">
                    <div className="w-54 h-54 border-4 border-dashed border-indigo-300/70 rounded-full "></div>
                  </div>

                  {/* Original Image Container */}
                  <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-full w-48 h-48 flex items-center justify-center overflow-hidden relative">
                    <img src="/yash-Photoroom.png" alt="Yashwant Singh Bisht" />
                    <div className="bg-gray-200 border-dashed rounded-full w-full h-full" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Yashwant Singh Bisht
                </h3>
                <p className="text-indigo-300 font-medium mb-4">
                  MSc Physics & B.Ed
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mb-4"></div>
                <p className="text-violet-200 text-sm">Founder & Director</p>
              </div>

              {/* Founder's Message */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center lg:text-left">
                  A Message from Our Founder
                </h2>

                <div className="space-y-4 text-violet-100">
                  <p className="italic">Dear Students & Parents,</p>

                  <p>
                    I'm Yashwant Singh, the founder of Creator Classes. With
                    over 11 years of teaching experience, I established this
                    institution to redefine education.
                  </p>

                  <p>
                    At Creator Classes, we're dedicated to personalized learning
                    and innovative teaching. We believe that with the right
                    guidance, every student can achieve greatness. Our aim is to
                    do more than just help you excel in exams like JEE, NEET,
                    and NDA; we want to build a strong foundation, spark
                    curiosity, and instill lifelong confidence.
                  </p>

                  <p>
                    Our team of dedicated educators is committed to providing a
                    focused academic environment and structured strategies to
                    help you succeed, not just as students, but as responsible
                    individuals.
                  </p>

                  <p>
                    Join us at Creator Classes, and let's make learning a
                    passion and success a habit.
                  </p>

                  <div className="mt-8">
                    <p className="mb-1">Warm regards,</p>
                    <p className="font-bold text-white">Yashwant Singh</p>
                    <p className="text-indigo-300">Director, Creator Classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Profiles */}
        <div className="max-w-5xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-500 text-transparent bg-clip-text">
              Expert Faculty
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Physics Teacher - Updated */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="flex items-start">
                {/* Improved image container */}
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                 YS
                </div>

                <div className="ml-5 flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Yashwant Singh Bisht
                  </h3>
                  <p className="text-indigo-300 font-medium mt-1">
                    Physics Teacher (MSc Physics)
                  </p>
                  <div className="flex items-center mt-2">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-violet-200 text-sm">
                      11+ years experience
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-violet-100 group-hover:text-violet-50 transition-colors duration-300 mt-5">
                Bringing theoretical physics to life with real-world
                applications and engaging teaching methods.
              </p>
            </div>

            {/* Math Teacher */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                 AK
                </div>

                <div className="ml-5 flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Ankit Tiwari
                  </h3>
                  <p className="text-indigo-300 font-medium mt-1">
                    Mathematics Teacher (MSc Mathematics)
                  </p>
                  <div className="flex items-center mt-2">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-violet-200 text-sm">
                      7+ years experience
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-violet-100 group-hover:text-violet-50 transition-colors duration-300 mt-5">
                Transforming complex mathematical concepts into intuitive,
                easy-to-understand lessons that build student confidence.
              </p>
            </div>

            {/* Economics Teacher */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  MK
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Monika Khatri
                  </h3>
                  <p className="text-indigo-300 font-medium">
                    Economics Teacher (M.A Economics)
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-violet-200 text-sm">
                      5+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-violet-100 group-hover:text-violet-50 transition-colors duration-300">
                Making economics relatable through real-world examples and
                current market trends to prepare students for practical
                challenges.
              </p>
            </div>

            {/* Junior Classes Teacher */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 hover:border-indigo-400/50 transition-all duration-300 group">
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
                    <span className="text-violet-200 text-sm">
                      4+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-violet-100 group-hover:text-violet-50 transition-colors duration-300">
                Creating engaging learning experiences for younger students with
                innovative teaching methods and personalized attention.
              </p>
            </div>

            {/* Ashish Tiwari - Nursing */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  AS
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Ashish Tiwari
                  </h3>
                  <p className="text-indigo-300 font-medium">
                    Junior Classes (BSc Nursing)
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-violet-200 text-sm">
                      2+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-violet-100 group-hover:text-violet-50 transition-colors duration-300">
                Specializing in medical sciences with a focus on biology
                fundamentals and nursing career pathways.
              </p>
            </div>

            {/* Reshma - PCM */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl w-14 h-14 flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  RS
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    Reshma
                  </h3>
                  <p className="text-indigo-300 font-medium">
                    Junior Classes (BSc PCM)
                  </p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-indigo-400 mr-1" />
                    <span className="text-violet-200 text-sm">
                      2+ years experience
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-violet-100 group-hover:text-violet-50 transition-colors duration-300">
                Building strong foundations in Physics, Chemistry, and
                Mathematics for middle school students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
