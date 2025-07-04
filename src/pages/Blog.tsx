
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

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

      if (postsRef.current) {
        gsap.fromTo(
          postsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: postsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const featuredPost = {
    title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
    excerpt: "Explore how artificial intelligence is reshaping enterprise operations, from generative AI to computer vision, and what businesses need to know to stay competitive.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    author: "Dr. Sarah Chen",
    date: "December 15, 2023",
    readTime: "8 min read",
    category: "Artificial Intelligence"
  };

  const blogPosts = [
    {
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      excerpt: "Discover how blockchain technology is revolutionizing supply chain, healthcare, and digital identity management.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      author: "Michael Rodriguez",
      date: "December 12, 2023",
      readTime: "6 min read",
      category: "Blockchain"
    },
    {
      title: "Cloud Security Best Practices for 2024",
      excerpt: "Essential strategies for securing your cloud infrastructure and protecting sensitive data in multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      author: "Jennifer Liu",
      date: "December 10, 2023",
      readTime: "7 min read",
      category: "Cloud Computing"
    },
    {
      title: "Building Scalable Mobile Apps with PWA Technology",
      excerpt: "Learn how Progressive Web Apps are bridging the gap between web and mobile experiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: "Alex Thompson",
      date: "December 8, 2023",
      readTime: "5 min read",
      category: "Mobile Development"
    },
    {
      title: "DevOps Culture: Transforming Development Teams",
      excerpt: "How implementing DevOps practices can accelerate delivery and improve collaboration across teams.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      author: "David Park",
      date: "December 5, 2023",
      readTime: "6 min read",
      category: "DevOps"
    },
    {
      title: "IoT Security: Protecting Connected Devices",
      excerpt: "Essential security measures for IoT deployments in enterprise and smart city environments.",
      image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=400&h=250&fit=crop",
      author: "Emily Zhang",
      date: "December 3, 2023",
      readTime: "7 min read",
      category: "Internet of Things"
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "Real case studies of companies that successfully modernized their operations with technology.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      author: "Robert Kumar",
      date: "December 1, 2023",
      readTime: "9 min read",
      category: "Digital Transformation"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Blockchain", "Cloud Computing", "Mobile Development", "DevOps", "Internet of Things"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={headerRef}>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Tech Insights & Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and practical 
            guidance from our team of technology specialists.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden hover-lift border-lavender-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-lavender-600 text-white">{featuredPost.category}</Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-lavender-600 transition-colors cursor-pointer">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                
                <Button className="bg-lavender-600 hover:bg-lavender-700 w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
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

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest insights on technology trends, best practices, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={postsRef}>
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-lift bg-white border-lavender-200 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-lavender-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-lavender-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full hover:bg-lavender-50 hover:text-lavender-700 hover:border-lavender-300">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-lavender-600 hover:bg-lavender-700">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-lavender-600 to-lavender-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-lavender-100">
            Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button variant="secondary" className="bg-white text-lavender-700 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-lavender-200 mt-4">
            Weekly insights • No spam • Unsubscribe anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
