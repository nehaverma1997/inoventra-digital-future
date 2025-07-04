
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'modern-blur shadow-xl shadow-soft-blue/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-soft-blue to-desaturated-indigo rounded-2xl flex items-center justify-center shadow-lg shadow-soft-blue/30 group-hover:shadow-xl group-hover:shadow-soft-blue/40 transition-all duration-500">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-soft-blue to-desaturated-indigo rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold soft-gradient-text">Inoventra Tech</h1>
              <p className="text-xs text-slate-gray font-mono">Innovation Redefined</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-soft-blue relative group ${
                  location.pathname === item.path
                    ? 'text-soft-blue'
                    : 'text-charcoal-gray'
                }`}
              >
                {item.name}
                <div className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-soft-blue to-desaturated-indigo rounded-full transition-all duration-300 ${
                  location.pathname === item.path ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                }`} />
              </Link>
            ))}
            <Button asChild className="btn-modern">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal-gray"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden modern-blur border-t border-misty-lavender/30 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-soft-blue bg-misty-lavender/80'
                    : 'text-charcoal-gray hover:text-soft-blue hover:bg-misty-lavender/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <Button asChild className="w-full btn-modern">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
