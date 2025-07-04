
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We prioritize cutting-edge solutions that push the boundaries of what's possible in technology."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We build long-term partnerships based on trust and results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project, delivering quality that exceeds expectations."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions create positive change for businesses and communities worldwide."
    }
  ];

  const team = [
    {
      role: "Leadership Team",
      description: "Visionary leaders with 20+ years of combined experience in technology and business transformation.",
      count: "8"
    },
    {
      role: "Senior Developers",
      description: "Expert engineers specializing in AI, blockchain, cloud architecture, and mobile development.",
      count: "45"
    },
    {
      role: "Designers & UX",
      description: "Creative professionals crafting intuitive user experiences and stunning visual designs.",
      count: "22"
    },
    {
      role: "Consultants",
      description: "Strategic advisors helping clients navigate digital transformation and technology adoption.",
      count: "28"
    },
    {
      role: "Support Team",
      description: "Dedicated professionals ensuring 24/7 support and seamless project delivery.",
      count: "47"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={headerRef}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              About Inoventra Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking IT solutions company dedicated to transforming businesses 
              through innovative technology. Founded with a vision to bridge the gap between 
              cutting-edge innovation and practical business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses of all sizes with technology solutions that drive growth, 
                efficiency, and innovation. We believe that the right technology, implemented 
                thoughtfully, can transform challenges into opportunities.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment extends beyond just delivering projects – we partner with our 
                clients to ensure sustainable success in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-gradient-to-br from-lavender-500 to-lavender-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Since 2020</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-lavender-100">Successful Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-lavender-100">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-lavender-100">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.8%</div>
                  <div className="text-lavender-100">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsRef}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="hover-lift bg-white border-lavender-200 text-center">
                  <CardContent className="p-6">
                    <IconComponent className="w-12 h-12 text-lavender-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Our Global Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of talented professionals working together to create exceptional solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border-lavender-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{member.role}</h3>
                    <span className="text-3xl font-bold gradient-text">{member.count}</span>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-lavender-600 to-lavender-800 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-lavender-100">
                  Serving clients worldwide with localized expertise and cultural understanding.
                </p>
              </div>
              <div>
                <div className="text-6xl mb-4">🕒</div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-lavender-100">
                  Round-the-clock technical support ensuring your systems run smoothly.
                </p>
              </div>
              <div>
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-lavender-100">
                  Committed to environmentally responsible technology and green practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
