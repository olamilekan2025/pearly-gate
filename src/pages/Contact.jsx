import React from 'react';
import { 
  IoLocationOutline, 
  IoCallOutline, 
  IoMailOutline, 
  IoTimeOutline, 
  IoLogoFacebook, 
  IoLogoTwitter, 
  IoLogoInstagram,
  IoPaperPlaneOutline
} from 'react-icons/io5';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 dark:from-blue-900 dark:via-blue-800 dark:to-gray-900 animate-gradient-pulse text-white py-8 lg:py-30 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Get in Touch</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-2 lg:px-20 py-16 lg:mt-8 ">
        {/* Balanced 2-Column Grid for Equal Widths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl py-6  p-2 lg:p-8 transition-colors">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Send us a Message</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-2 lg:py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 dark:bg-gray-700 dark:text-white" required />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+234..." className="w-full px-4 py-2 lg:py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 dark:bg-gray-700 dark:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Email Address *</label>
                  <input type="email" placeholder="email@example.com" className="w-full px-4 py-2 lg:py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 dark:bg-gray-700 dark:text-white" required />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Subject *</label>
                  <input type="text" placeholder="Admissions Enquiry" className="w-full px-4 py-2 lg:py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 dark:bg-gray-700 dark:text-white" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Message *</label>
                <textarea rows="5" placeholder="How can we help you?" className="w-full px-4 py-1 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none bg-gray-50 dark:bg-gray-700 dark:text-white" required></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95">
                <IoPaperPlaneOutline className="text-xl" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info & Emergency */}
          <div className="flex flex-col gap-8">
            {/* Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl px-2 py-7 lg:p-8 md:p-12 border-2 border-gray-300 dark:border-gray-700 transition-colors">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Contact Information</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">Reach out to us through any of these channels</p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-2 lg:p-4 rounded-2xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <IoLocationOutline size={26}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg">Our Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-1">Prince Abisoye Adeleke Crescent, Zone 5, Ayekale, Ota-Efun Area, Osogbo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-2xl text-green-600 dark:text-green-400 flex-shrink-0">
                    <IoCallOutline size={26}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">+2347074052461</p>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">+2349129069652 <span className="text-blue-600 font-bold text-xs uppercase ml-1">(Admissions)</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-2xl text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <IoMailOutline size={26}/>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1 break-all">jelilioladunjoye04@gmail.com</p>
                    <p className="text-gray-600 dark:text-gray-300 break-all">jelilioladunjoye04@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <h4 className="font-bold text-gray-400 dark:text-gray-500 text-xs uppercase tracking-widest">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><IoLogoFacebook size={20}/></a>
                  <a href="#" className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-all shadow-sm"><IoLogoTwitter size={20}/></a>
                  <a href="#" className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-pink-600 hover:text-white transition-all shadow-sm"><IoLogoInstagram size={20}/></a>
                </div>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-red-600 rounded-3xl shadow-xl p-8 text-white relative overflow-hidden group">
              {/* Subtle Decorative Icon in background */}
              <IoCallOutline className="absolute -right-8 -bottom-8 text-white opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-700" size={160} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Need Immediate Assistance?</h3>
                <p className="text-red-100 text-sm mb-8 leading-relaxed">
                  For urgent matters, please call us directly or visit our campus during office hours.
                </p>
                <a href="tel:+2347074052461" className="inline-block w-full text-center py-4 bg-white text-red-600 font-black rounded-xl hover:bg-red-50 transition-all shadow-lg active:scale-95">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

