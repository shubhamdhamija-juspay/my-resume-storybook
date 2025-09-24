import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Star, Trophy } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Indian Institute of Management Calcutta",
      period: "2023",
      grade: "7.75/9 CGPA",
      achievements: [
        "Ranked in Top 5th percentile",
        "Achieved A/A+ grades in 22 out of 38 courses",
        "Leadership roles in student committees"
      ],
      color: "bg-gradient-primary"
    },
    {
      degree: "Bachelor of Technology - Computer Science & Engineering",
      institution: "Indian Institute of Technology Patna",
      period: "2018",
      grade: "8.85/10 CGPA",
      achievements: [
        "Perfect 10 CGPA in 23% of courses",
        "9+ GPA in 44% of the 56 courses completed",
        "Branch change to CSE as one of 8 top performers among 175+ peers"
      ],
      color: "bg-gradient-accent"
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "Central Board of Secondary Education (CBSE)",
      period: "2014",
      grade: "83.2%",
      achievements: [
        "Strong foundation in Science and Mathematics",
        "Participated in various academic competitions"
      ],
      color: "bg-gradient-primary"
    },
    {
      degree: "Class X (Secondary)",
      institution: "Central Board of Secondary Education (CBSE)",
      period: "2012",
      grade: "9.4/10 CGPA",
      achievements: [
        "Excellent academic performance across all subjects",
        "Active participation in co-curricular activities"
      ],
      color: "bg-gradient-accent"
    }
  ];

  const examinations = [
    {
      exam: "CAT 2020",
      percentile: "99.81%ile",
      highlights: ["99.74%ile in Quantitative Aptitude", "Among 1.90L candidates", "Converted IIMC and IIML"],
      icon: <Trophy className="h-5 w-5" />
    },
    {
      exam: "CAT 2018",
      percentile: "99.86%ile",
      highlights: ["99.89%ile in DILR", "99.12%ile in Quants", "Among 2.1L candidates"],
      icon: <Star className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Academic excellence backed by consistent top percentile performance 
              and leadership across premier institutions.
            </p>
          </div>

          {/* Education timeline */}
          <div className="space-y-6 mb-16">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${edu.color} p-3 rounded-lg text-white`}>
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">{edu.period}</Badge>
                      <div className="text-lg font-bold text-primary">{edu.grade}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competitive Examinations */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Competitive Examinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examinations.map((exam, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-accent transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-accent p-3 rounded-lg text-white">
                        {exam.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-semibold text-foreground">{exam.exam}</h4>
                          <Badge className="bg-accent text-accent-foreground font-bold">
                            {exam.percentile}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          {exam.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
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

          {/* Academic Excellence Summary */}
          <Card className="shadow-accent">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Academic Excellence</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Consistent academic excellence from secondary education through premier institutions, 
                demonstrating strong analytical thinking, problem-solving abilities, and leadership potential 
                that translates directly into professional success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;