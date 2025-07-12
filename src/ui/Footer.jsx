import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, ChevronRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Creatorclassesrishikesh/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/classescreator/" },
  ];

  const programs = [  
    "Class 6-10 Foundation",
    "Class 11-12 Commerce",
    "Class 11-12 Science",
    "JEE Mains & Advanced",
    "NEET Preparation",
    "Olympiad Training",
    "Board Exam Crash Course",
  ];
  
  // Quick links for navigation
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/programs", label: "Programs" },
    { path: "/about", label: "About Us" },
    { path: "/results", label: "Results" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 pt-12 pb-8 border-t border-indigo-700/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                <img src="/cclogo.png" alt="" />
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-bold text-white">Creator Classes</h2>
                <p className="text-sm text-indigo-300 font-medium">We are here to create toppers</p>
              </div>
            </div>
            <p className="text-indigo-200 mb-4 text-sm leading-relaxed">
              Providing quality education since 2014. We transform students into academic achievers through personalized coaching.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-800/30 hover:bg-violet-500/20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border border-indigo-700/50 hover:border-violet-500/50 hover:scale-105"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-3 h-3 text-violet-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b-2 border-violet-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-indigo-200 hover:text-violet-300 transition-colors flex items-center text-sm"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-violet-400 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b-2 border-violet-500 inline-block">
              Our Programs
            </h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="w-3 h-3 mt-1 mr-2 text-violet-400 flex-shrink-0" />
                  <span className="text-indigo-200 text-sm leading-tight">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b-2 border-violet-500 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex">
                <div className="bg-indigo-800/30 p-1.5 rounded mr-2 border border-indigo-700/50 h-fit">
                  <MapPin className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Our Location</h4>
                  <p className="text-indigo-200 text-xs">123 Education Street, Learning City, 560001</p>
                </div>
              </li>

              <li className="flex">
                <div className="bg-indigo-800/30 p-1.5 rounded mr-2 border border-indigo-700/50 h-fit">
                  <Phone className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Call Us</h4>
                  <p className="text-indigo-200 text-xs">+91 98765 43210</p>
                  <p className="text-indigo-200 text-xs">+91 12345 67890</p>
                </div>
              </li>

              <li className="flex">
                <div className="bg-indigo-800/30 p-1.5 rounded mr-2 border border-indigo-700/50 h-fit">
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Email Us</h4>
                  <p className="text-indigo-200 text-xs">info@creatorclasses.com</p>
                  <p className="text-indigo-200 text-xs">admissions@creatorclasses.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-indigo-700/50 text-center">
          <p className="text-indigo-300 text-sm">
            © 2025 Creator Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;