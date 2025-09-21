import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo, education } from '../mock';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            About <span className="font-normal">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about creating exceptional digital experiences through innovative web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="p-8 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary font-bold text-sm">RS</span>
                </div>
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-3 text-primary" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 text-center border-0 shadow-md bg-card/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center border-0 shadow-md bg-card/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-6 text-center border-0 shadow-md bg-card/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="p-6 border-0 shadow-lg bg-card/50 backdrop-blur-sm group hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {edu.duration.split(' – ')[1] || 'Present'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">
                    {edu.duration}
                  </div>
                </Card>
              ))}
            </div>

            {/* Specializations */}
            <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/10 backdrop-blur-sm">
              <h4 className="font-semibold mb-4 text-foreground">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js Development", 
                  "AI Integration", 
                  "UI/UX Implementation", 
                  "Full-Stack Development", 
                  "Performance Optimization"
                ].map((spec, index) => (
                  <Badge key={index} variant="outline" className="hover:bg-primary/10 transition-colors cursor-default">
                    {spec}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;