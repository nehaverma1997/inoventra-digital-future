
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Globe, Shield, Clock, Zap, Users, Award, Brain, Blocks, Cloud, Rocket, Smartphone, Lock } from 'lucide-react';
import ThreeBackground from '@/components/ThreeBackground';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      // Hero animation with stagger
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 60, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0,
            scale: 1, 
            duration: 1.2, 
            stagger: 0.2,
            ease: "power3.out"
          }
        );
      }

      // Stats animation with bounce
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, scale: 0.5, rotation: -10 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Services animation
      if (servicesRef.current) {
        gsap.fromTo(
          servicesRef.current.children,
          { opacity: 0, y: 50, rotationX: 45 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // Features animation
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { opacity: 0, x: -30, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const stats = [
    { label: "Happy Clients", value: "500+", icon: Users, color: "from-soft-blue to-desaturated-indigo" },
    { label: "Projects Delivered", value: "1000+", icon: Award, color: "from-desaturated-indigo to-misty-lavender" },
    { label: "Expert Team", value: "150+", icon: Zap, color: "from-misty-lavender to-warm-coral" },
    { label: "Global Reach", value: "25+", icon: Globe, color: "from-warm-coral to-soft-blue" },
  ];

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to transform your business operations and drive intelligent automation.",
      icon: Brain,
      gradient: "from-soft-blue to-desaturated-indigo",
      features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"]
    },
    {
      title: "Blockchain Solutions",
      description: "Build secure, decentralized applications and smart contracts that revolutionize digital transactions.",
      icon: Blocks,
      gradient: "from-desaturated-indigo to-misty-lavender",
      features: ["Smart Contracts", "DeFi Platforms", "NFT Marketplaces"]
    },
    {
      title: "Cloud Architecture",
      description: "Design scalable, secure cloud infrastructure that grows with your business needs and ensures reliability.",
      icon: Cloud,
      gradient: "from-misty-lavender to-warm-coral",
      features: ["AWS Solutions", "DevOps", "Microservices"]
    },
    {
      title: "Digital Innovation",
      description: "Transform traditional processes with cutting-edge digital solutions that enhance efficiency and user experience.",
      icon: Rocket,
      gradient: "from-warm-coral to-soft-blue",
      features: ["Process Automation", "Legacy Modernization", "Digital Strategy"]
    },
    {
      title: "Mobile Excellence",
      description: "Create stunning mobile applications that deliver exceptional user experiences across all platforms.",
      icon: Smartphone,
      gradient: "from-soft-blue to-warm-coral",
      features: ["Native Apps", "Progressive Web Apps", "Cross-Platform"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security solutions and advanced threat protection.",
      icon: Lock,
      gradient: "from-desaturated-indigo to-soft-blue",
      features: ["Security Audits", "Penetration Testing", "Compliance"]
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Excellence",
      description: "International expertise serving clients worldwide with localized solutions and 24/7 support."
    },
    {
      icon: Clock,
      title: "Rapid Delivery",
      description: "Agile development methodologies ensuring quick turnaround without compromising quality."
    },
    {
      icon: Shield,
      title: "Future-Ready",
      description: "Sustainable technology solutions designed for long-term growth and environmental responsibility."
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
            <span className="inline-flex items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-charcoal-gray text-sm font-semibold shadow-xl shadow-soft-blue/20 border border-misty-lavender/50">
              <Sparkles className="w-5 h-5 mr-3 text-soft-blue animate-pulse-soft" />
              Pioneering Digital Innovation Since 2020
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="soft-gradient-text block mb-4">Innovation</span>
            <span className="text-charcoal-gray block mb-4">Meets</span>
            <span className="gradient-text block">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-gray mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We craft extraordinary digital experiences that transform businesses and inspire innovation. 
            From AI-powered solutions to cutting-edge web applications, we turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="btn-modern text-lg px-12 py-6 rounded-2xl">
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="btn-soft text-lg px-12 py-6 rounded-2xl">
              <Link to="/portfolio">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center modern-card p-8 hover-lift group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-gray font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-white via-misty-lavender/30 to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold soft-gradient-text mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto font-light">
              We combine technical excellence with creative innovation to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={featuresRef}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover-lift modern-card group border-0 shadow-xl shadow-soft-blue/10">
                  <CardContent className="p-10 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-soft-blue to-desaturated-indigo rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-soft-blue/30">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gradient-hover">{feature.title}</h3>
                    <p className="text-slate-gray leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold soft-gradient-text mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto font-light">
              Comprehensive technology solutions designed for modern businesses across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={servicesRef}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-lift modern-card group border-0 shadow-xl shadow-soft-blue/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-misty-lavender/20 to-soft-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gradient-hover">
                      {service.title}
                    </h3>
                    <p className="text-slate-gray mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-gray">
                          <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-soft-blue hover:text-desaturated-indigo font-semibold group-hover:translate-x-2 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="btn-modern text-lg px-12 py-6">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-soft-blue via-desaturated-indigo to-misty-lavender text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-soft-blue/95 to-desaturated-indigo/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Innovate?
          </h2>
          <p className="text-xl mb-12 text-misty-lavender font-light max-w-3xl mx-auto">
            Join hundreds of forward-thinking companies who trust us to transform their digital presence and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-desaturated-indigo hover:bg-gray-100 px-12 py-6 rounded-2xl font-semibold shadow-xl">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white text-white hover:bg-white hover:text-desaturated-indigo px-12 py-6 rounded-2xl font-semibold transition-all duration-300">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
