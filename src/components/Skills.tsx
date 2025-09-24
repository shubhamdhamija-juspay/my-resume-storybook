import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  Lightbulb, 
  Target, 
  Database, 
  Palette,
  Code,
  TrendingUp,
  MessageSquare,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: <Target className="h-6 w-6" />,
      color: "bg-gradient-primary",
      skills: [
        "Product Strategy & Roadmapping",
        "User Research & Analytics", 
        "A/B Testing & Experimentation",
        "Go-to-Market Strategy",
        "Stakeholder Management",
        "Product-Led Growth"
      ]
    },
    {
      title: "Analytics & Data",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-gradient-accent",
      skills: [
        "SQL & Database Management",
        "Redash & Superset",
        "Presto SQL",
        "Revenue Analytics",
        "User Behavior Analysis",
        "Performance Metrics"
      ]
    },
    {
      title: "Technical Skills",
      icon: <Code className="h-6 w-6" />,
      color: "bg-gradient-primary",
      skills: [
        "Software Engineering",
        "Android Development",
        "System Design",
        "API Integration",
        "Debugging & Optimization",
        "Cross-platform Development"
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-gradient-accent",
      skills: [
        "Figma",
        "UI/UX Design Principles",
        "Wireframing & Prototyping",
        "Design Systems",
        "User Journey Mapping",
        "Visual Design"
      ]
    },
    {
      title: "Leadership & Strategy",
      icon: <Users className="h-6 w-6" />,
      color: "bg-gradient-primary",
      skills: [
        "Team Leadership",
        "Cross-functional Collaboration",
        "Strategic Planning",
        "Project Management",
        "Mentoring & Coaching",
        "Change Management"
      ]
    },
    {
      title: "Business Intelligence",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-gradient-accent",
      skills: [
        "Revenue Optimization",
        "Market Analysis",
        "Business Model Design",
        "Financial Modeling",
        "ROI Analysis",
        "Growth Strategy"
      ]
    }
  ];

  const tools = [
    { name: "Redash", category: "Analytics" },
    { name: "Superset", category: "Analytics" },
    { name: "Figma", category: "Design" },
    { name: "Notion", category: "Productivity" },
    { name: "Asana", category: "Project Management" },
    { name: "Excel", category: "Analysis" },
    { name: "SQL", category: "Database" },
    { name: "Canva", category: "Design" },
    { name: "Android Studio", category: "Development" },
    { name: "Git", category: "Development" }
  ];

  const achievements = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Revenue Impact",
      value: "₹2Cr+ Monthly",
      description: "Generated through innovative product solutions"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Efficiency Gains",
      value: "80% Reduction",
      description: "In onboarding rejections through process optimization"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "User Engagement",
      value: "3x Increase",
      description: "In user activations and reward page visits"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Operational Impact",
      value: "270L+ Saved",
      description: "Monthly order value through systematic improvements"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set combining technical expertise, business acumen, 
              and leadership capabilities to drive product excellence.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${category.color} p-2.5 rounded-lg text-white`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <Card className="shadow-elegant mb-16">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                <Database className="h-6 w-6 mr-2 text-primary" />
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Key Impact Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-accent transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="bg-gradient-accent p-3 rounded-lg w-fit mx-auto mb-4 text-white">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <Card className="shadow-accent">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Approach & Philosophy</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                "I believe in combining data-driven insights with user empathy to build products that truly matter. 
                My approach focuses on understanding the 'why' behind user behavior, leveraging technology to solve 
                real problems, and creating sustainable business value through thoughtful product decisions."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;