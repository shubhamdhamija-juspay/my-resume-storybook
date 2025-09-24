import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Calendar, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "bg-gradient-primary"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "bg-gradient-accent"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 XXXX XXXXXX",
      href: "tel:+91XXXXXXXXXX",
      color: "bg-gradient-primary"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India",
      href: "#",
      color: "bg-gradient-accent"
    }
  ];

  const opportunities = [
    {
      title: "Product Management Roles",
      description: "Senior PM, Director of Product, VP Product roles at growth-stage startups or established tech companies"
    },
    {
      title: "Consulting Projects",
      description: "Product strategy, go-to-market planning, and digital transformation initiatives"
    },
    {
      title: "Advisory Positions",
      description: "Strategic advisory roles for early-stage startups in fintech, edtech, or consumer tech"
    },
    {
      title: "Speaking Engagements",
      description: "Conferences, workshops, and mentoring sessions on product management and growth strategies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Open to exciting product management opportunities, consulting projects, 
              and collaborations that drive meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Send className="h-6 w-6 mr-3" />
                Get In Touch
              </h3>
              
              <div className="space-y-4 mb-12">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <a 
                        href={method.href}
                        className="flex items-center space-x-4 text-white hover:text-white/80 transition-colors"
                      >
                        <div className={`${method.color} p-3 rounded-lg`}>
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-medium">{method.title}</div>
                          <div className="text-white/80">{method.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick action buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 shadow-elegant text-lg py-6"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10 shadow-elegant text-lg py-6"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Opportunities */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">
                Open to Opportunities
              </h3>
              
              <div className="space-y-6">
                {opportunities.map((opp, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {opp.title}
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        {opp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to action */}
              <Card className="bg-white/10 border-white/20 mt-8">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold mb-4">
                    Ready to Collaborate?
                  </h4>
                  <p className="text-white/80 mb-6">
                    Whether you're looking for a product leader, strategic advisor, or consultant, 
                    I'd love to discuss how we can create impact together.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-accent text-accent-foreground hover:bg-accent-glow shadow-accent"
                  >
                    Start Conversation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pt-8 border-t border-white/20">
            <p className="text-white/80 text-lg">
              "Great products are built through great conversations. Let's start one."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;