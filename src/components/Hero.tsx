import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Achievement badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-4 py-2">
              IIM Calcutta MBA
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-4 py-2">
              IIT Patna CSE
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-4 py-2">
              Top 5% at IIMC
            </Badge>
          </div>

          {/* Profile Photo */}
          <div className="mb-12">
            <Avatar className="h-40 w-40 mx-auto ring-4 ring-white/20 shadow-glow">
              <AvatarImage 
                src="/placeholder.svg" 
                alt="Profile photo"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-primary text-white text-4xl font-semibold">
                PM
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Product Manager</span>
            <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
              Building impactful solutions at scale
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            4.5+ years driving product innovation at <strong>Zomato</strong>, <strong>Amazon</strong>, and <strong>Samsung</strong>. 
            Delivered solutions generating <strong>₹2Cr+ monthly revenue</strong> and impacting millions of users.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">₹2Cr+</div>
              <div className="text-white/70">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.5+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.81%</div>
              <div className="text-white/70">CAT Percentile</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 shadow-elegant text-lg px-8 py-6"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;