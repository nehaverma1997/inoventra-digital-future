
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Globe, Shield, Clock } from 'lucide-react';
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
    { label: "Global Clients", value: "500+" },
    { label: "Projects Delivered", value: "1000+" },
    { label: "Team Members", value: "150+" },
    { label: "Countries Served", value: "25+" },
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Generative AI, Computer Vision, and ML solutions that transform business operations.",
      icon: "🤖"
    },
    {
      title: "Blockchain Development",
      description: "NFT platforms, DApps, Metaverse solutions, and cryptocurrency integration.",
      icon: "⛓️"
    },
    {
      title: "Cloud Solutions",
      description: "AWS consulting, managed services, and scalable cloud architecture.",
      icon: "☁️"
    },
    {
      title: "Digital Transformation",
      description: "Supply chain optimization, legacy modernization, and process automation.",
      icon: "🚀"
    },
    {
      title: "Mobile Development",
      description: "PWA development and mobile-first design for exceptional user experiences.",
      icon: "📱"
    },
    {
      title: "DevOps & Security",
      description: "SecOps implementation, CI/CD pipelines, and infrastructure automation.",
      icon: "🔒"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center" ref={heroRef}>
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-lavender-100 text-lavender-800 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading IT Innovation Since 2020
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Tech You Need.</span>
            <br />
            <span className="text-gray-900">Innovation You</span>
            <br />
            <span className="gradient-text">Deserve.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. From AI and blockchain 
            to cloud computing and digital transformation, we deliver innovation that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-lavender-600 hover:bg-lavender-700 text-lg px-8 py-4">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-lavender-300 text-lavender-700 hover:bg-lavender-50">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Why Choose Inoventra Tech?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with innovative thinking to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift glass-effect border-lavender-200">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-lavender-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  International team serving clients across 25+ countries with localized expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift glass-effect border-lavender-200">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-lavender-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and maintenance for uninterrupted operations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift glass-effect border-lavender-200">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-lavender-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainability Focus</h3>
                <p className="text-gray-600">
                  Committed to environmentally responsible technology solutions and green practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored for startups, enterprises, healthcare, 
              e-commerce, and government sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={servicesRef}>
            {services.map((service, index) => (
              <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border-lavender-200 group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 group-hover:animate-float">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-lavender-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-lavender-600 hover:text-lavender-700 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-lavender-600 hover:bg-lavender-700">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lavender-600 to-lavender-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-lavender-100">
            Join hundreds of companies who trust Inoventra Tech with their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-lavender-700 hover:bg-gray-100">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lavender-700">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
