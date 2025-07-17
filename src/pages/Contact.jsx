import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
 const contactData = {
    userName: formData.name ,
    email :formData.email,
    phone:formData.phone,
  }
  console.log(contactData)
    alert('Thank you for your message! We will contact you soon.');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-violet-400 to-indigo-500 text-transparent bg-clip-text">Touch</span>
          </h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Have questions? Our team is ready to help with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-700/50">
            <h2 className="text-xl font-bold text-white mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-violet-300 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder='Enter your name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-indigo-900/30 border border-indigo-700/50 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-violet-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-indigo-900/30 border border-indigo-700/50 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-violet-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder='Enter your phone number'
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-indigo-900/30 border border-indigo-700/50 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-violet-300 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Any message you want to give'
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-indigo-900/30 border border-indigo-700/50 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-700 hover:to-indigo-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center shadow-lg shadow-violet-900/30"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-700/50 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-800/30 p-2 rounded-lg mr-3 border border-indigo-700/50">
                    <MapPin className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Our Location</h3>
                    <p className="text-indigo-200 text-sm">Opp. of Canara bank shiv chowk,Raiwala Dehradun , 249205</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-800/30 p-2 rounded-lg mr-3 border border-indigo-700/50">
                    <Phone className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Call Us</h3>
                    <p className="text-indigo-200 text-sm">+91 9760389381</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-800/30 p-2 rounded-lg mr-3 border border-indigo-700/50">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email Us</h3>
                    <p className="text-indigo-200 text-sm">classescreator@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;