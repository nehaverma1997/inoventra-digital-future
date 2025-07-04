
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

      if (testimonialsRef.current) {
        gsap.fromTo(
          testimonialsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      position: "CTO",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c58b?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Inoventra Tech transformed our healthcare platform with their AI expertise. The predictive analytics system they built reduced our diagnosis time by 40% and improved patient outcomes significantly. Their team's deep understanding of healthcare regulations and technical excellence is unmatched.",
      project: "AI-Powered Healthcare Management System",
      results: ["40% faster diagnosis", "99.2% prediction accuracy", "HIPAA compliant solution"]
    },
    {
      name: "Marcus Johnson",
      position: "CEO",
      company: "CryptoTech Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "The DeFi platform developed by Inoventra Tech exceeded all our expectations. Their blockchain expertise and attention to security details resulted in a platform that handles millions in trading volume daily. The team's responsiveness and technical depth are remarkable.",
      project: "Decentralized Finance Trading Platform",
      results: ["$50M+ trading volume", "10K+ active users", "Zero security incidents"]
    },
    {
      name: "Elena Rodriguez",
      position: "Director of IT",
      company: "Global Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Our cloud migration project was complex and critical to our operations. Inoventra Tech managed the entire transformation seamlessly with zero downtime. Their AWS expertise and project management skills saved us both time and money while improving our system performance dramatically.",
      project: "Enterprise Cloud Migration",
      results: ["60% cost reduction", "99.99% uptime", "Zero downtime migration"]
    },
    {
      name: "James Chen",
      position: "Founder",
      company: "RetailMax Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "The mobile app developed by Inoventra Tech revolutionized our e-commerce business. The AR product visualization feature they implemented increased our conversion rates by 200%. Their UX design and technical implementation are top-notch.",
      project: "E-Commerce Mobile App with AR",
      results: ["200% conversion increase", "1M+ downloads", "4.8/5 app store rating"]
    },
    {
      name: "Dr. Robert Kim",
      position: "Chief Medical Officer",
      company: "MediCare Digital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "The telemedicine platform built by Inoventra Tech has been instrumental in our digital transformation. Their understanding of healthcare workflows and compliance requirements resulted in a solution that our doctors love to use and patients trust completely.",
      project: "HIPAA-Compliant Telemedicine Platform",
      results: ["100K+ consultations", "95% patient satisfaction", "Full HIPAA compliance"]
    },
    {
      name: "Lisa Thompson",
      position: "Mayor",
      company: "Metropolitan City Council",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "The smart city IoT solution implemented by Inoventra Tech has made our city more efficient and sustainable. Traffic congestion decreased by 30% and energy consumption dropped by 25%. Their expertise in IoT and urban planning is exceptional.",
      project: "Smart City IoT Infrastructure",
      results: ["30% traffic reduction", "25% energy savings", "Real-time city monitoring"]
    }
  ];

  const stats = [
    { label: "Client Satisfaction Rate", value: "98.5%" },
    { label: "Projects Delivered On Time", value: "99.2%" },
    { label: "Average Project Rating", value: "4.9/5" },
    { label: "Client Retention Rate", value: "94%" }
  ];

  const industryTestimonials = [
    {
      industry: "Healthcare",
      testimonial: "Exceptional understanding of healthcare compliance and technical requirements.",
      client: "Regional Healthcare Network"
    },
    {
      industry: "Finance",
      testimonial: "Robust security implementation and deep fintech expertise.",
      client: "Investment Management Firm"
    },
    {
      industry: "E-commerce",
      testimonial: "Innovative solutions that directly impact revenue and user experience.",
      client: "Online Retail Platform"
    },
    {
      industry: "Manufacturing",
      testimonial: "Streamlined operations and significant cost savings through automation.",
      client: "Industrial Equipment Manufacturer"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={headerRef}>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve their digital 
            transformation goals and drive meaningful results through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced the impact of our solutions.
            </p>
          </div>

          <div className="space-y-12" ref={testimonialsRef}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-lavender-200 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Client Info */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                      />
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{testimonial.position}</p>
                      <p className="text-sm font-medium text-lavender-600">{testimonial.company}</p>
                      
                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start mt-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      <Quote className="w-8 h-8 text-lavender-300 mb-4" />
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {testimonial.testimonial}
                      </p>
                      <div className="bg-lavender-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Project: {testimonial.project}</h5>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-1">
                      <h5 className="font-semibold text-gray-900 mb-4">Key Results:</h5>
                      <div className="space-y-3">
                        {testimonial.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-lavender-600 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Testimonials */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple sectors, delivering tailored solutions for diverse business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryTestimonials.map((item, index) => (
              <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border-lavender-200 text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-lavender-600 mb-3">{item.industry}</h3>
                  <p className="text-gray-600 text-sm mb-3 italic">"{item.testimonial}"</p>
                  <p className="text-xs text-gray-500">- {item.client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-lavender-600 to-lavender-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-lavender-100">
            Let's discuss how we can help you achieve similar results and transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-lavender-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-lavender-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
