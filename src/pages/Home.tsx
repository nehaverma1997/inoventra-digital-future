
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Globe, Shield, Clock, Zap, Users, Award } from 'lucide-react';
import ThreeBackground from '@/components/ThreeBackground';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.2,
            ease: "power2.out"
          }
        );
      }

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // Services animation
      if (servicesRef.current) {
        gsap.fromTo(
          servicesRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const stats = [
    { label: "Global Clients", value: "500+", icon: Users },
    { label: "Projects Delivered", value: "1000+", icon: Award },
    { label: "Team Members", value: "150+", icon: Zap },
    { label: "Countries Served", value: "25+", icon: Globe },
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Generative AI, Computer Vision, and ML solutions that transform business operations.",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Blockchain Development",
      description: "NFT platforms, DApps, Metaverse solutions, and cryptocurrency integration.",
      icon: "⛓️",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud Solutions",
      description: "AWS consulting, managed services, and scalable cloud architecture.",
      icon: "☁️",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Digital Transformation",
      description: "Supply chain optimization, legacy modernization, and process automation.",
      icon: "🚀",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Mobile Development",
      description: "PWA development and mobile-first design for exceptional user experiences.",
      icon: "📱",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "DevOps & Security",
      description: "SecOps implementation, CI/CD pipelines, and infrastructure automation.",
      icon: "🔒",
      gradient: "from-red-500 to-orange-600"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" ref={heroRef}>
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-lavender-100 to-lavender-200 text-lavender-800 text-sm font-semibold shadow-lg">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Leading IT Innovation Since 2020
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Tech You Need.</span>
            <br />
            <span className="text-gray-900">Innovation You</span>
            <br />
            <span className="gradient-text">Deserve.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your business with cutting-edge technology solutions. From AI and blockchain 
            to cloud computing and digital transformation, we deliver innovation that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="btn-modern text-lg px-10 py-4 rounded-xl">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-10 py-4 rounded-xl border-2 border-lavender-300 text-lavender-700 hover:bg-lavender-50 hover:border-lavender-400 transition-all duration-300">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-white via-lavender-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center modern-card p-8 hover-lift">
                  <IconComponent className="w-12 h-12 text-lavender-600 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Why Choose Inoventra Tech?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We combine technical expertise with innovative thinking to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift modern-card group">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient-hover">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">
                  International team serving clients across 25+ countries with localized expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift modern-card group">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient-hover">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock technical support and maintenance for uninterrupted operations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift modern-card group">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient-hover">Sustainability Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Committed to environmentally responsible technology solutions and green practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-lavender-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive technology solutions tailored for startups, enterprises, healthcare, 
              e-commerce, and government sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={servicesRef}>
            {services.map((service, index) => (
              <Card key={index} className="hover-lift modern-card group gradient-border">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 floating-animation" style={{animationDelay: `${index * 0.5}s`}}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gradient-hover">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-lavender-600 hover:text-lavender-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="btn-modern text-lg px-10 py-4">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lavender-600 via-lavender-700 to-lavender-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lavender-600/90 to-lavender-800/90"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 text-lavender-100 font-light max-w-3xl mx-auto">
            Join hundreds of companies who trust Inoventra Tech with their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-lavender-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-lavender-700 px-10 py-4 rounded-xl font-semibold">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
