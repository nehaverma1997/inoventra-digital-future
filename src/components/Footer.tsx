
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-blue-900/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Inoventra Tech</h3>
                <p className="text-xs text-slate-400 font-mono">Innovation Redefined</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              We're passionate about creating extraordinary digital experiences that drive innovation 
              and transform businesses across the globe.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-indigo-600/50 transition-all duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-600/50 transition-all duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-purple-600/50 transition-all duration-300 cursor-pointer">
                <Github className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors duration-300">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors duration-300">Blockchain Solutions</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors duration-300">Cloud Architecture</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors duration-300">Mobile Development</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors duration-300">Digital Innovation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-indigo-400 transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors duration-300">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition-colors duration-300">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-indigo-400 transition-colors duration-300">Testimonials</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@inoventratech.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-soft"></div>
              <span className="text-sm text-slate-300">Available 24/7</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Inoventra Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-300">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
