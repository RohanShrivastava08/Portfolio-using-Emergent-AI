import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../mock';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Featured <span className="font-normal">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of my recent work in web development and AI-powered applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Button size="sm" className="backdrop-blur-sm bg-background/90 text-foreground hover:bg-background">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="backdrop-blur-sm bg-background/90 text-foreground hover:bg-background border-border">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-4">
                  <Button size="sm" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:rotate-45 transition-transform" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 group/btn">
                    <Github className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                    Source
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-accent/20 to-primary/5 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Interested in More?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              These are just a few highlights from my portfolio. I have many more projects exploring 
              different technologies and solving various challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group">
                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View All on GitHub
              </Button>
              <Button variant="outline" className="group">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                Visit Full Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;