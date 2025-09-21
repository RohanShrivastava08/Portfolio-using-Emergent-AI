// Mock data for Rohan Shrivastava's Portfolio

export const personalInfo = {
  name: "ROHAN SHRIVASTAVA",
  title: "Front End Developer",
  tagline: "Innovative Web Developer specializing in React.js & AI-powered applications",
  email: "rohansh0808@gmail.com",
  phone: "+91 9876543210",
  location: "India",
  bio: "Innovative Web Developer skilled in React.js, JavaScript, and modern front-end frameworks, specializing in responsive, high-performance web applications. Proficient in UI/UX design, API integrations, and full-stack development with strong problem-solving abilities and experience in collaborative team projects."
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rohanshrivastava",
    icon: "linkedin"
  },
  {
    name: "GitHub", 
    url: "https://github.com/rohansh0808",
    icon: "github"
  },
  {
    name: "Portfolio",
    url: "https://rohanportfolio.vercel.app",
    icon: "globe"
  },
  {
    name: "Blog",
    url: "https://rohanblog.dev",
    icon: "book-open"
  }
];

export const skills = {
  frontend: [
    "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS", "Angular"
  ],
  styling: [
    "Tailwind CSS", "Material-UI", "Bootstrap", "GSAP", "Three.js", "Framer Motion"
  ],
  backend: [
    "Node.js", "Express.js", "MongoDB", "Firebase", "MySQL", "RESTful APIs", "GraphQL"
  ],
  tools: [
    "Git", "GitHub", "Vercel", "Netlify", "Postman", "Webpack", "Babel", "Figma", "VS Code"
  ],
  ai: [
    "ChatGPT", "Gemini AI", "Claude", "Bolt AI", "DeepSeek AI"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Zidio Development",
    position: "Web Developer Intern", 
    duration: "Jul 2024 – Sep 2024",
    description: [
      "Built interactive UI components using React.js, JavaScript, and Tailwind CSS",
      "Optimized website performance and enhanced user experience for live projects",
      "Collaborated with design team to implement responsive web interfaces"
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "UI/UX"]
  },
  {
    id: 2,
    company: "Pregrad",
    position: "Full Stack Developer Intern",
    duration: "Apr 2024 – Aug 2024", 
    description: [
      "Built React.js-based dashboards with Redux and API integrations for seamless user experience",
      "Worked with MongoDB, Express.js, and Node.js to create full-stack applications",
      "Implemented state management solutions and optimized application performance"
    ],
    technologies: ["React.js", "Redux", "MongoDB", "Express.js", "Node.js"]
  },
  {
    id: 3,
    company: "Infosys",
    position: "Software Trainee",
    duration: "Jan 2023 – May 2023",
    description: [
      "Trained in Java, DBMS, Cloud Computing, Unix, and Networking Fundamentals",
      "Applied frontend technologies to build dynamic and interactive UI components",
      "Gained foundational knowledge in enterprise software development practices"
    ],
    technologies: ["Java", "DBMS", "Cloud Computing", "Frontend Development"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Notion Project",
    description: "A comprehensive Notion-inspired web application with real-time collaboration features and rich text editing capabilities.",
    longDescription: "Developed a Notion-inspired web app using Next.js, TypeScript, ShadCN UI, Convex, and Clerk. Features real-time collaboration, rich text editing, and an intuitive UI for note-taking and organization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
    technologies: ["Next.js", "TypeScript", "ShadCN UI", "Convex", "Clerk"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2, 
    title: "AI Portfolio Builder",
    description: "An AI-powered portfolio website built with modern frameworks and enhanced with ChatGPT modifications.",
    longDescription: "Created portfolio website using Bolt AI within 10 minutes, enhanced it with ChatGPT-powered modifications. Implemented Framer Motion animations, Vite-based fast rendering, and EmailJS integration, deployed on Vercel.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    technologies: ["Vite", "React.js", "Framer Motion", "EmailJS", "AI Integration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Gemini AI Clone", 
    description: "An intelligent chatbot application powered by Gemini API with smooth UI interactions and real-time responses.",
    longDescription: "Built an AI-powered chatbot using React.js, Gemini API, and Framer Motion for smooth UI interactions. Implemented instant AI-generated responses, ensuring a seamless chat experience with a refined UI.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=entropy&auto=format", 
    technologies: ["React.js", "Gemini API", "Framer Motion", "AI Chat"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  }
];

export const education = [
  {
    id: 1,
    institution: "Manipal University Jaipur",
    degree: "IT & Fintech (Distance Learning)",
    duration: "Aug 2023 – Aug 2025",
    description: "Focused on emerging technologies and financial technology trends"
  },
  {
    id: 2,
    institution: "Bhilai Institute of Technology, Durg", 
    degree: "Bachelor of Technology in Computer Science Engineering",
    duration: "Aug 2018 – Aug 2022",
    description: "Graduated with 76% aggregate. Developed strong foundation in programming, web development, and software engineering"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Senior Developer at TechCorp",
    content: "Rohan's expertise in React.js and modern frontend technologies is exceptional. His attention to detail and ability to deliver high-quality code consistently impressed our team.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format"
  },
  {
    id: 2, 
    name: "Michael Chen",
    position: "Product Manager at InnovateLabs",
    content: "Working with Rohan was a fantastic experience. His skills in AI integration and full-stack development helped us deliver our project ahead of schedule.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UI/UX Designer at CreativeStudio", 
    content: "Rohan has an excellent eye for design implementation. He perfectly translated our designs into responsive, interactive web applications with smooth animations.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format"
  }
];