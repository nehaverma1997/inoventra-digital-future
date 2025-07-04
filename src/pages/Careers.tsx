
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Code, Briefcase } from 'lucide-react';

const Careers = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);

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

      if (jobsRef.current) {
        gsap.fromTo(
          jobsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: jobsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: Users,
      title: "Global Team",
      description: "Work with talented professionals from around the world"
    },
    {
      icon: Code,
      title: "Latest Technology",
      description: "Access to cutting-edge tools and technologies"
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Clear advancement paths and professional development opportunities"
    }
  ];

  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Lead the development of AI-powered solutions using machine learning and generative AI technologies.",
      requirements: ["5+ years in ML/AI", "Python, TensorFlow", "PhD preferred", "Experience with LLMs"],
      posted: "2 days ago"
    },
    {
      title: "Blockchain Developer",
      department: "Engineering",
      location: "Remote / London",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Build decentralized applications and smart contracts for our blockchain solutions.",
      requirements: ["3+ years blockchain dev", "Solidity, Web3", "DeFi experience", "Smart contract auditing"],
      posted: "1 week ago"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$130k - $200k",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: ["AWS/Azure certified", "7+ years experience", "Kubernetes, Docker", "Enterprise architecture"],
      posted: "3 days ago"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Berlin",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Create exceptional user experiences for our mobile and web applications.",
      requirements: ["4+ years UI/UX", "Figma, Sketch", "Mobile-first design", "User research"],
      posted: "5 days ago"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Singapore",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Automate deployment processes and maintain CI/CD pipelines for our development teams.",
      requirements: ["DevOps experience", "Docker, Kubernetes", "CI/CD pipelines", "Infrastructure as Code"],
      posted: "1 week ago"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Toronto",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Drive product strategy and roadmap for our enterprise technology solutions.",
      requirements: ["5+ years PM", "B2B SaaS experience", "Agile methodology", "Technical background"],
      posted: "4 days ago"
    }
  ];

  const departments = ["All", "Engineering", "Design", "Product", "Sales", "Marketing"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={headerRef}>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Build the future of technology with us. We're looking for passionate innovators 
            who want to make a meaningful impact on businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lavender-600 hover:bg-lavender-700">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-lavender-300 text-lavender-700 hover:bg-lavender-50">
              Learn About Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-600">Employee Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.8/5</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where talented individuals can thrive and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="hover-lift border-lavender-200 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Remote-First</h3>
              <p className="text-gray-600">Work from anywhere with flexible hours and home office stipend</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">Learning Budget</h3>
              <p className="text-gray-600">$3,000 annual budget for courses, conferences, and certifications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Health & Wellness</h3>
              <p className="text-gray-600">Comprehensive health insurance and wellness programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help shape the future of technology innovation.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-lavender-600 hover:bg-lavender-700" : "hover:bg-lavender-50 hover:text-lavender-700"}
              >
                {dept}
              </Button>
            ))}
          </div>

          <div className="space-y-6" ref={jobsRef}>
            {openPositions.map((job, index) => (
              <Card key={index} className="hover-lift border-lavender-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline" className="border-lavender-300 text-lavender-700">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">{job.salary}</div>
                      <div className="text-sm text-gray-600">{job.posted}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span 
                          key={reqIndex}
                          className="px-3 py-1 bg-lavender-100 text-lavender-800 text-sm rounded-full"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="bg-lavender-600 hover:bg-lavender-700">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-lavender-600 to-lavender-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Culture
          </h2>
          <p className="text-xl text-lavender-100 mb-12 max-w-3xl mx-auto">
            We foster an inclusive, innovative environment where every team member can contribute 
            their unique perspectives and grow their careers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-lavender-100">
                Cross-functional teams working together to solve complex challenges
              </p>
            </div>
            <div>
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-lavender-100">
                Encouraging experimentation and creative problem-solving
              </p>
            </div>
            <div>
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-lavender-100">
                Continuous learning and professional development opportunities
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" variant="secondary" className="bg-white text-lavender-700 hover:bg-gray-100">
              Join Our Team Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
