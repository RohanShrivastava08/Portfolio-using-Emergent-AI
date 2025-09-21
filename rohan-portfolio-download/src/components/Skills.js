import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { skills } from '../mock';
import { Code, Palette, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: skills.frontend,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "UI/UX & Styling", 
      icon: Palette,
      skills: skills.styling,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Backend & Database",
      icon: Database, 
      skills: skills.backend,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: skills.tools,
      color: "text-orange-500", 
      bgColor: "bg-orange-500/10"
    },
    {
      title: "AI & Modern Tools",
      icon: Brain,
      skills: skills.ai,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  const topSkills = [
    { name: "React.js", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "MongoDB", level: 75 }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Technical <span className="font-normal">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Proficient in modern technologies and frameworks for building scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-card/50 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-accent/80 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Top Skills Progress */}
        <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-accent/20 to-primary/5 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-8 text-center">Proficiency Levels</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {topSkills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 bg-background/50"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;