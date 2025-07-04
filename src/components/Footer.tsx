
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Inoventra Tech</h3>
                <p className="text-xs text-gray-400 font-mono">Tech You Need. Innovation You Deserve.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading IT solutions provider specializing in cutting-edge technology 
              and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-lavender-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-lavender-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-lavender-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-lavender-400 transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-lavender-400 transition-colors">Blockchain Development</Link></li>
              <li><Link to="/services" className="hover:text-lavender-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-lavender-400 transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-lavender-400 transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-lavender-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-lavender-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-lavender-400 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-lavender-400 transition-colors">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-lavender-400 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>contact@inoventratech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Global Offices</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">24/7 Support Available</p>
              <p className="text-sm text-green-400">🌱 Sustainability Focused</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Inoventra Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-lavender-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-lavender-400 text-sm transition-colors">Terms of Service</Link>
              <Link to="#" className="text-gray-400 hover:text-lavender-400 text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
