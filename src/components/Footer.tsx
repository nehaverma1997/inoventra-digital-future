
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-charcoal-gray via-slate-gray/20 to-desaturated-indigo text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-desaturated-indigo/10 to-soft-blue/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-soft-blue to-desaturated-indigo rounded-2xl flex items-center justify-center shadow-lg shadow-soft-blue/30">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-soft-blue to-desaturated-indigo rounded-2xl blur-lg opacity-30"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Inoventra</h3>
                <p className="text-xs text-misty-lavender font-light">Digital Innovation</p>
              </div>
            </div>
            <p className="text-misty-lavender/80 mb-6 leading-relaxed max-w-md">
              We're passionate about creating extraordinary digital experiences that inspire innovation 
              and transform businesses across the globe.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-soft-blue/20 transition-all duration-300 cursor-pointer group">
                <Linkedin className="w-5 h-5 text-misty-lavender group-hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-soft-blue/20 transition-all duration-300 cursor-pointer group">
                <Twitter className="w-5 h-5 text-misty-lavender group-hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-soft-blue/20 transition-all duration-300 cursor-pointer group">
                <Github className="w-5 h-5 text-misty-lavender group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-misty-lavender/80">
              <li><Link to="/services" className="hover:text-soft-blue transition-colors duration-300">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-soft-blue transition-colors duration-300">Custom Development</Link></li>
              <li><Link to="/services" className="hover:text-soft-blue transition-colors duration-300">Design Excellence</Link></li>
              <li><Link to="/services" className="hover:text-soft-blue transition-colors duration-300">Data Architecture</Link></li>
              <li><Link to="/services" className="hover:text-soft-blue transition-colors duration-300">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-misty-lavender/80">
              <li><Link to="/about" className="hover:text-soft-blue transition-colors duration-300">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-soft-blue transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-soft-blue transition-colors duration-300">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-soft-blue transition-colors duration-300">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-soft-blue transition-colors duration-300">Testimonials</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-misty-lavender/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@inoventra.com</span>
              </div>
              <div className="flex items-center space-x-2 text-misty-lavender/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-soft-blue rounded-full animate-pulse-soft"></div>
              <span className="text-sm text-misty-lavender/80">Available 24/7</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-misty-lavender/60 text-sm flex items-center">
              © 2024 Inoventra. Made with <Heart className="w-4 h-4 mx-1 text-warm-coral" fill="currentColor" /> for innovation.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-misty-lavender/60 hover:text-soft-blue text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="#" className="text-misty-lavender/60 hover:text-soft-blue text-sm transition-colors duration-300">Terms of Service</Link>
              <Link to="#" className="text-misty-lavender/60 hover:text-soft-blue text-sm transition-colors duration-300">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
