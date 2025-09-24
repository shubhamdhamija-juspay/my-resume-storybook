import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, Code } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about leveraging technology to solve complex business problems and create 
              exceptional user experiences that drive meaningful impact.
            </p>
          </div>

          {/* Journey timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education Excellence</h3>
                    <p className="text-muted-foreground mb-4">
                      From IIT Patna Computer Science to IIM Calcutta MBA, ranked in the top 5% 
                      with exceptional academic performance across all domains.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">IIT Patna CSE (8.85/10)</Badge>
                      <Badge variant="secondary">IIM Calcutta MBA (7.75/9)</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-accent p-3 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Competitive Edge</h3>
                    <p className="text-muted-foreground mb-4">
                      Consistently achieved top percentiles in competitive examinations, 
                      demonstrating analytical prowess and problem-solving excellence.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">CAT'20: 99.81%ile</Badge>
                      <Badge variant="secondary">CAT'18: 99.86%ile</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impact Driven</h3>
                    <p className="text-muted-foreground mb-4">
                      Delivered measurable business outcomes including ₹2Cr+ monthly revenue 
                      generation and 80% reduction in operational inefficiencies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Revenue Growth</Badge>
                      <Badge variant="secondary">Process Optimization</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-accent p-3 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Foundation</h3>
                    <p className="text-muted-foreground mb-4">
                      Strong engineering background enabling effective collaboration with 
                      technical teams and data-driven decision making.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Software Engineering</Badge>
                      <Badge variant="secondary">Data Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy */}
          <Card className="shadow-accent">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-semibold mb-6">My Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                "Great products are born at the intersection of user needs, business objectives, and 
                technological possibilities. I believe in building solutions that not only drive metrics 
                but create genuine value for users and sustainable growth for businesses."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;