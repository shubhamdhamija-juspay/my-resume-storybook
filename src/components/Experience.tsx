import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building, Calendar, TrendingUp, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Zomato",
      role: "Product Manager",
      period: "May 2023 - June 2025",
      location: "India",
      icon: <Building className="h-5 w-5" />,
      color: "bg-gradient-primary",
      achievements: [
        {
          title: "Zomato Plus (3rd Party Ads)",
          highlights: [
            "Conceptualized & launched innovative ad solutions, driving ₹1Cr monthly revenue within the 1st month",
            "Repurposed a legacy system to launch Scratch Cards, optimizing bandwidth & generating ₹2Cr/month",
            "Productized go-lives, cutting TAT from 48 to 2 hrs, and elevated brand ROI with retargeting campaigns",
            "Spearheaded the launch of 3 new ad properties (static, video, shoppable), covering 70% of the screen",
            "Expanded Performance Ads inventory by 25% by introducing pacing in the ad's distribution algorithm",
            "Boosted reward page visits & scratches by 3x with a 'View All Coupons' FAB"
          ]
        },
        {
          title: "Merchant Product (Restaurant Partner)",
          highlights: [
            "Reduced onboarding rejections by 80% by implementing OCR for PAN, Bank, and FSSAI verification",
            "Systematized ODM calling, halving timeout rates (0.34% to 0.17%) & saving ₹270L/month in order value",
            "Revamped review flow with private reviews, callback requests boosting MX engagement & actionability",
            "Drove Product-Led Winback Adoption, streamlining the opt-in flow driving a 3x rise in MX activations",
            "Designed Winback Dispute Flow, enabling MX satisfaction, transparency & increasing retention by 50%"
          ]
        }
      ]
    },
    {
      company: "Amazon",
      role: "Product Management Intern",
      period: "Apr 2022 - Jun 2022",
      location: "India",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-gradient-accent",
      achievements: [
        {
          title: "Fire TV: E-Sim Modification",
          highlights: [
            "Redesigned the sign-up flow and introduced features like SIM switcher, enhancing the onboarding UX",
            "Researched BOM cost and eSIM TAM, shaping feasibility and pricing models for streaming resolutions",
            "Collaborated with Fire TV & eSIM teams across India & the USA to align hardware needs & integrations"
          ]
        }
      ]
    },
    {
      company: "Samsung",
      role: "Software Engineer",
      period: "Dec 2018 - Jun 2021",
      location: "India",
      icon: <Users className="h-5 w-5" />,
      color: "bg-gradient-primary",
      achievements: [
        {
          title: "Android Development & Optimization",
          highlights: [
            "Successfully increased efficiency by 15% by redesigning the locking mechanism for reading apps list",
            "Lowered 70% Issue Reproduction time by using live Debugging tools like ADT (Android Debugging Tool)",
            "Ported 100+ Samsung changes and features in Android Go versions to reduce testing detected issues",
            "Coordinated with 20+ teams across platforms to resolve 50+ code bugs in 25+ different firmware versions",
            "Developed and scaled a call-to-action feature, boosting user engagement and app open rates by 250%",
            "Successfully deployed the feature PAN India across all 3rd-party apps, driving a 50% revenue increase"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              4.5+ years of driving product innovation and delivering impactful solutions 
              across leading technology companies.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${exp.color} p-3 rounded-lg text-white`}>
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-lg text-muted-foreground mt-1">
                          <span className="font-semibold">{exp.company}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {exp.location}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-8">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex}>
                        <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                          {achievement.title}
                        </h4>
                        <div className="grid gap-3">
                          {achievement.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-foreground leading-relaxed">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;