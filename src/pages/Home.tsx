
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap, Shield, Rocket, Users, Globe, Star, Brain, Code, Palette, Database } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      // Hero animations
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 80, scale: 0.8 },
          { 
            opacity: 1, 
            y: 0,
            scale: 1, 
            duration: 1.5, 
            stagger: 0.3,
            ease: "power3.out"
          }
        );
      }

      // Features animation
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current.children,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // Services animation
      if (servicesRef.current) {
        gsap.fromTo(
          servicesRef.current.children,
          { opacity: 0, y: 40, rotationX: 30 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 75%",
            }
          }
        );
      }

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, scale: 0.3 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            }
          }
        );
      }
    }
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results at the speed of thought.",
      gradient: "from-soft-blue to-desaturated-indigo"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols protecting your most valuable data.",
      gradient: "from-desaturated-indigo to-misty-lavender"
    },
    {
      icon: Rocket,
      title: "Future Ready",
      description: "Built with tomorrow's technology, available today.",
      gradient: "from-misty-lavender to-warm-coral"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation that learns and adapts to your business needs.",
      color: "text-soft-blue"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Bespoke software solutions crafted for your unique requirements.",
      color: "text-desaturated-indigo"
    },
    {
      icon: Palette,
      title: "Design Excellence",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      color: "text-warm-coral"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Scalable data solutions that grow with your business.",
      color: "text-slate-gray"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: Star },
    { value: "98%", label: "Client Satisfaction", icon: Users },
    { value: "24/7", label: "Global Support", icon: Globe },
    { value: "5★", label: "Average Rating", icon: Sparkles }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-grayish via-misty-lavender/10 to-soft-blue/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,172,228,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,182,163,0.08),transparent_50%)] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10" ref={heroRef}>
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm text-charcoal-gray text-sm font-medium shadow-lg border border-misty-lavender/30">
              <Sparkles className="w-4 h-4 mr-2 text-soft-blue animate-pulse-soft" />
              Transforming Ideas Into Digital Reality
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-charcoal-gray via-soft-blue to-desaturated-indigo bg-clip-text text-transparent">
              Create
            </span>
            <span className="block mb-2 bg-gradient-to-r from-desaturated-indigo via-misty-lavender to-warm-coral bg-clip-text text-transparent">
              Innovate
            </span>
            <span className="block text-charcoal-gray">
              Inspire
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-gray mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We craft exceptional digital experiences that push boundaries, inspire innovation, 
            and deliver measurable results for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-soft-blue to-desaturated-indigo text-white hover:from-desaturated-indigo hover:to-soft-blue px-10 py-6 rounded-2xl text-lg font-semibold shadow-xl shadow-soft-blue/30 hover:shadow-2xl hover:shadow-soft-blue/40 transition-all duration-500 hover:scale-105">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-slate-gray/30 text-charcoal-gray hover:bg-misty-lavender/20 px-10 py-6 rounded-2xl text-lg font-semibold">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-charcoal-gray to-desaturated-indigo bg-clip-text text-transparent">
              Why Choose Excellence?
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              We combine cutting-edge technology with human-centered design to create solutions that truly matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={featuresRef}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-soft-blue/10 transition-all duration-500 border-0 bg-gradient-to-br from-white to-misty-lavender/30 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-charcoal-gray group-hover:text-soft-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-gray leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-misty-lavender/20 via-light-grayish to-soft-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-charcoal-gray to-desaturated-indigo bg-clip-text text-transparent">
              Our Expertise
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Comprehensive solutions tailored to your unique business challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={servicesRef}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl hover:shadow-soft-blue/15 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <IconComponent className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-charcoal-gray group-hover:text-soft-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-gray text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-desaturated-indigo to-soft-blue text-white hover:from-soft-blue hover:to-desaturated-indigo px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-soft-blue to-desaturated-indigo rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-soft-blue to-desaturated-indigo bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-gray font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-desaturated-indigo via-soft-blue to-misty-lavender text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-desaturated-indigo/90 to-soft-blue/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl mb-10 text-misty-lavender/90 font-light max-w-3xl mx-auto">
            Let's collaborate to create something extraordinary that drives real impact for your business and users.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-desaturated-indigo hover:bg-misty-lavender/20 hover:text-white px-10 py-6 rounded-2xl font-semibold shadow-xl border-2 border-white/20 transition-all duration-300">
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 rounded-2xl font-semibold transition-all duration-300">
              <Link to="/portfolio">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
