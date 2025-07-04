
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Blocks, Cloud, Smartphone, Cog, Shield, Database, BarChart, Code, Laptop } from 'lucide-react';

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
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

  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to transform your business operations.",
      features: ["Generative AI Solutions", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "Machine Learning Models"],
      industries: ["Healthcare", "Finance", "Retail", "Manufacturing"]
    },
    {
      icon: Blocks,
      title: "Blockchain Development",
      description: "Secure, transparent, and decentralized solutions for the future of digital transactions.",
      features: ["NFT Platforms", "DApp Development", "Smart Contracts", "Cryptocurrency Integration", "Metaverse Solutions"],
      industries: ["Fintech", "Gaming", "Real Estate", "Supply Chain"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable, secure, and cost-effective cloud infrastructure and services.",
      features: ["AWS Consulting", "Cloud Migration", "Managed Services", "DevOps Implementation", "Infrastructure as Code"],
      industries: ["Enterprise", "Startups", "E-commerce", "Government"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create engaging mobile experiences with our expert development team.",
      features: ["Progressive Web Apps (PWA)", "Mobile-first Design", "Cross-platform Development", "UI/UX Design", "App Store Optimization"],
      industries: ["Consumer Apps", "Enterprise", "Healthcare", "Education"]
    },
    {
      icon: Cog,
      title: "Digital Transformation",
      description: "Modernize your business processes and embrace digital innovation.",
      features: ["Legacy System Modernization", "Supply Chain Optimization", "Process Automation", "Digital Strategy", "Change Management"],
      industries: ["Manufacturing", "Logistics", "Healthcare", "Government"]
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Streamline operations and secure your digital infrastructure.",
      features: ["CI/CD Pipelines", "Security Operations (SecOps)", "Infrastructure Monitoring", "Automated Testing", "Compliance Management"],
      industries: ["Financial Services", "Healthcare", "E-commerce", "SaaS"]
    },
    {
      icon: Database,
      title: "Enterprise Solutions",
      description: "Comprehensive business management systems tailored to your needs.",
      features: ["ERP Implementation", "CRM Solutions", "Payment Processing", "Microservices Architecture", "API Development"],
      industries: ["Enterprise", "Retail", "Manufacturing", "Services"]
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Transform data into actionable insights for informed decision-making.",
      features: ["Data Analytics", "Dashboard Development", "Reporting Solutions", "Data Warehousing", "Predictive Modeling"],
      industries: ["Retail", "Finance", "Healthcare", "Manufacturing"]
    },
    {
      icon: Code,
      title: "AR/VR & IoT",
      description: "Immersive experiences and connected device solutions.",
      features: ["Augmented Reality Apps", "Virtual Reality Experiences", "IoT Device Integration", "Smart Home Solutions", "Industrial IoT"],
      industries: ["Gaming", "Real Estate", "Manufacturing", "Smart Cities"]
    },
    {
      icon: Laptop,
      title: "IT Consulting",
      description: "Strategic technology guidance and managed IT services.",
      features: ["Healthcare IT", "IT Outsourcing", "Managed Services", "Technology Strategy", "Digital Consulting"],
      industries: ["Healthcare", "Professional Services", "Startups", "Government"]
    }
  ];

  const targetClients = [
    {
      title: "Startups",
      description: "Rapid prototyping and scalable solutions to bring your vision to life.",
      icon: "🚀"
    },
    {
      title: "Enterprises",
      description: "Large-scale digital transformation and enterprise-grade solutions.",
      icon: "🏢"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant solutions for modern healthcare delivery.",
      icon: "🏥"
    },
    {
      title: "E-commerce",
      description: "Powerful platforms and integrations for online retail success.",
      icon: "🛒"
    },
    {
      title: "Government",
      description: "Secure, accessible, and compliant public sector solutions.",
      icon: "🏛️"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={headerRef}>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive innovation, efficiency, 
            and growth across all industries and business sizes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={servicesRef}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-lift bg-white border-lavender-200 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, fIndex) => (
                            <span 
                              key={fIndex}
                              className="px-3 py-1 bg-lavender-100 text-lavender-800 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Industries:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map((industry, iIndex) => (
                            <span 
                              key={iIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with organizations of all sizes across various industries to deliver 
              tailored technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {targetClients.map((client, index) => (
              <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border-lavender-200 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{client.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{client.title}</h3>
                  <p className="text-gray-600 text-sm">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lavender-600 to-lavender-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-lavender-100">
            Let's discuss your project requirements and create a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-lavender-700 hover:bg-gray-100">
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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

export default Services;
