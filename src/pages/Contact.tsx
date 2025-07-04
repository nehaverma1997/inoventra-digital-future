
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Calendar, MessageSquare, FileText } from 'lucide-react';

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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

      if (formRef.current) {
        gsap.fromTo(
          formRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@inoventratech.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Available 24/7 for urgent matters"
    },
    {
      icon: MapPin,
      title: "Global Offices",
      content: "25+ Countries",
      description: "Local presence, global expertise"
    }
  ];

  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation to discuss your project requirements.",
      action: "Schedule Now"
    },
    {
      icon: MessageSquare,
      title: "Contact Us",
      description: "Send us a message with your project details and we'll get back to you.",
      action: "Send Message"
    },
    {
      icon: FileText,
      title: "Get a Quote",
      description: "Receive a detailed project quote based on your specific needs and timeline.",
      action: "Request Quote"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={headerRef}>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="text-center hover-lift border-lavender-200">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-2xl font-bold gradient-text mb-2">{method.content}</p>
                    <p className="text-gray-600">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Options */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to get started with your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="hover-lift border-lavender-200 text-center">
                  <CardContent className="p-8">
                    <IconComponent className="w-12 h-12 text-lavender-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    <Button className="w-full bg-lavender-600 hover:bg-lavender-700">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="border-lavender-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Inquiry Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8" ref={formRef}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" className="mt-2" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" className="mt-2" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" className="mt-2" placeholder="john@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-2" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" className="mt-2" placeholder="Your Company" />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <select id="industry" className="mt-2 w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select Industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="education">Education</option>
                      <option value="government">Government</option>
                      <option value="startup">Startup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="services">Services Interested In</Label>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['AI/ML', 'Blockchain', 'Cloud Solutions', 'Mobile Apps', 'Digital Transformation', 'DevOps', 'IoT', 'Business Intelligence', 'IT Consulting'].map((service) => (
                      <label key={service} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Project Budget Range</Label>
                  <select id="budget" className="mt-2 w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select Budget Range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <select id="timeline" className="mt-2 w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="over-12-months">Over 12 months</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea 
                    id="message" 
                    className="mt-2" 
                    rows={6}
                    placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="newsletter" className="mr-3" />
                  <Label htmlFor="newsletter" className="text-sm">
                    I would like to receive updates about Inoventra Tech's services and industry insights.
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-lavender-600 hover:bg-lavender-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            24/7 Global Support
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our dedicated support team is available around the clock to assist you with 
            technical questions, project updates, and urgent matters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Support across all time zones</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">< 1 hour for critical issues</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Specialized technical experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
