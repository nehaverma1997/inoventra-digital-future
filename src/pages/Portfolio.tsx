
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      if (projectsRef.current) {
        gsap.fromTo(
          projectsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const projects = [
    {
      title: "HealthTech AI Platform",
      description: "AI-powered healthcare management system with predictive analytics and patient monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
      category: "Healthcare",
      client: "Global Healthcare Network",
      results: ["40% reduction in diagnosis time", "99.2% prediction accuracy", "500+ healthcare providers"]
    },
    {
      title: "DeFi Trading Platform",
      description: "Decentralized finance platform with automated trading, yield farming, and NFT marketplace integration.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Solidity", "React", "Node.js", "Web3", "IPFS"],
      category: "Blockchain",
      client: "CryptoTech Ventures",
      results: ["$50M+ trading volume", "10,000+ active users", "99.9% uptime"]
    },
    {
      title: "Smart City IoT Network",
      description: "Comprehensive IoT solution for smart city infrastructure including traffic management and environmental monitoring.",
      image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=600&h=400&fit=crop",
      technologies: ["IoT", "Azure", "Python", "React", "MongoDB"],
      category: "IoT",
      client: "Metropolitan City Council",
      results: ["30% traffic congestion reduction", "25% energy savings", "Real-time monitoring"]
    },
    {
      title: "E-Commerce Mobile App",
      description: "Progressive web app for multi-vendor e-commerce platform with AR product visualization and AI recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "AR.js"],
      category: "Mobile",
      client: "RetailMax Solutions",
      results: ["200% increase in conversions", "1M+ downloads", "4.8/5 app rating"]
    },
    {
      title: "Enterprise Cloud Migration",
      description: "Complete digital transformation and cloud migration for Fortune 500 manufacturing company.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      category: "Cloud",
      client: "Global Manufacturing Corp",
      results: ["60% cost reduction", "99.99% availability", "Zero-downtime migration"]
    },
    {
      title: "Telemedicine Platform",
      description: "HIPAA-compliant telemedicine solution with video consultations, prescription management, and patient records.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "HIPAA"],
      category: "Healthcare",
      client: "MediCare Digital",
      results: ["100,000+ consultations", "95% patient satisfaction", "HIPAA compliant"]
    }
  ];

  const categories = ["All", "Healthcare", "Blockchain", "IoT", "Mobile", "Cloud"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={headerRef}>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve their digital transformation 
            goals with innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100M+</div>
              <div className="text-gray-600">Users Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-lavender-600 hover:bg-lavender-700" : "hover:bg-lavender-50 hover:text-lavender-700"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift bg-white border-lavender-200 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-lavender-600 text-white">{project.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-lavender-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Client: {project.client}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-lavender-600 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-lavender-100">
            Let's discuss how we can help you achieve similar results with our proven expertise.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-lavender-700 hover:bg-gray-100">
            <a href="/contact">
              Start Your Project
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
