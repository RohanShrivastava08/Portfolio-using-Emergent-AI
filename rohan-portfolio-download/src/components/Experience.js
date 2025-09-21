import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../mock';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Work <span className="font-normal">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            My professional journey in web development and software engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted-foreground/30"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10 animate-pulse"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-card/50 backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-primary font-medium">
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`mt-4 md:mt-0 ${index === 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}`}
                      >
                        {index === 0 ? 'Latest' : 'Previous'}
                      </Badge>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-foreground mb-3">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs hover:bg-primary/10 transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Ready for New Challenges</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on innovative projects and collaborate with talented teams. 
              Let's create something amazing together!
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for hire
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Remote & On-site
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;