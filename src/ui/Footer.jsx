import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  MapPin, Phone, Mail, Facebook, Instagram, ChevronRight,
  ChevronDown
} from "lucide-react";

const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  const toggleAccordion = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

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
        {/* Mobile Accordion View */}
        <div className="md:hidden space-y-5 mb-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                <img src="/cclogo.png" alt="Creator Classes Logo" />
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-bold text-white">Creator Classes</h2>
                <p className="text-sm text-indigo-300 font-medium">We are here to create toppers</p>
              </div>
            </div>
            <p className="text-indigo-200 mb-4 text-sm leading-relaxed max-w-md">
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
                    className="bg-indigo-800/30 hover:bg-violet-500/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-indigo-700/50 hover:border-violet-500/50 hover:scale-105"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-violet-400" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links Accordion */}
          <div className="bg-slate-800/30 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleAccordion('quickLinks')}
              className="w-full flex justify-between items-center p-4 text-white font-bold bg-slate-800/40"
            >
              <span className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-violet-400" />
                Quick Links
              </span>
              <ChevronDown 
                className={`w-4 h-4 text-violet-400 transition-transform ${activeAccordion === 'quickLinks' ? 'rotate-180' : ''}`} 
              />
            </button>
            {activeAccordion === 'quickLinks' && (
              <ul className="px-4 pb-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-indigo-200 hover:text-violet-300 transition-colors flex items-center py-2 px-3 rounded-lg hover:bg-slate-800/50"
                    >
                      <ChevronRight className="w-4 h-4 mr-3 text-violet-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Programs Accordion */}
          <div className="bg-slate-800/30 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleAccordion('programs')}
              className="w-full flex justify-between items-center p-4 text-white font-bold bg-slate-800/40"
            >
              <span className="flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 text-violet-400" />
                Our Programs
              </span>
              <ChevronDown 
                className={`w-4 h-4 text-violet-400 transition-transform ${activeAccordion === 'programs' ? 'rotate-180' : ''}`} 
              />
            </button>
            {activeAccordion === 'programs' && (
              <ul className="px-4 pb-4 space-y-3">
                {programs.map((program, index) => (
                  <li key={index} className="flex items-start py-2 px-3 rounded-lg hover:bg-slate-800/50">
                    <ChevronRight className="w-4 h-4 mt-1 mr-3 text-violet-400 flex-shrink-0" />
                    <span className="text-indigo-200 text-sm">{program}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b-2 border-violet-500 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="bg-indigo-800/30 p-2 rounded mr-3 border border-indigo-700/50 h-fit">
                  <MapPin className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Our Location</h4>
                  <p className="text-indigo-200 text-xs">123 Education Street, Learning City, 560001</p>
                </div>
              </li>

              <li className="flex">
                <div className="bg-indigo-800/30 p-2 rounded mr-3 border border-indigo-700/50 h-fit">
                  <Phone className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Call Us</h4>
                  <p className="text-indigo-200 text-sm">+91 98765 43210</p>
                  <p className="text-indigo-200 text-sm">+91 12345 67890</p>
                </div>
              </li>

              <li className="flex">
                <div className="bg-indigo-800/30 p-2 rounded mr-3 border border-indigo-700/50 h-fit">
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Email Us</h4>
                  <p className="text-indigo-200 text-sm">info@creatorclasses.com</p>
                  <p className="text-indigo-200 text-sm">admissions@creatorclasses.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                <img src="/cclogo.png" alt="Creator Classes Logo" />
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
                    className="text-indigo-200 hover:text-violet-300 transition-colors flex items-center text-sm py-1.5"
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
                <li key={index} className="flex items-start py-1.5">
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