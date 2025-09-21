# Rohan Shrivastava - Portfolio Website

A modern, responsive portfolio website built with React.js, showcasing professional experience, skills, and projects.

## ✨ Features

- **Modern Design**: Clean, minimal design with light and dark themes
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth animations, hover effects, and micro-interactions
- **Theme Switching**: Toggle between light and dark modes
- **Contact Form**: Working contact form with validation
- **Social Integration**: Links to professional social profiles
- **SEO Ready**: Optimized for search engines

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd rohan-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open your browser and visit** `http://localhost:3000`

### Build for Production

```bash
yarn build
# or
npm run build
```

## 🚀 Deploy to Vercel

1. **Push to GitHub**: Upload this project to your GitHub repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Your portfolio will be live!** 🎉

## 🚀 Deploy to Netlify

1. **Build the project**:
   ```bash
   yarn build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Your site is live!

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Shadcn UI components
│   ├── Header.js        # Navigation header
│   ├── Hero.js          # Hero section
│   ├── About.js         # About section
│   ├── Skills.js        # Skills section
│   ├── Experience.js    # Experience timeline
│   ├── Projects.js      # Projects showcase
│   ├── Contact.js       # Contact form
│   └── Footer.js        # Footer
├── contexts/            # React contexts
│   └── ThemeContext.js  # Theme management
├── hooks/               # Custom hooks
│   └── use-toast.js     # Toast notifications
├── mock.js              # Mock data for content
├── App.js               # Main app component
├── App.css              # Global styles
├── index.css            # Tailwind imports
└── index.js             # App entry point
```

## 🎨 Customization

### Update Personal Information

Edit `/src/mock.js` to update:
- Personal details
- Skills and technologies
- Work experience
- Projects
- Education
- Social links

### Modify Styling

The project uses Tailwind CSS. Key files:
- `/src/index.css` - Global styles and theme variables
- `/tailwind.config.js` - Tailwind configuration
- Individual component files for component-specific styles

### Add New Sections

1. Create a new component in `/src/components/`
2. Import and add it to `/src/App.js`
3. Update navigation in `/src/components/Header.js`

## 🛠 Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Modern UI components
- **Lucide React** - Icon library
- **React Router** - Navigation
- **React Hook Form** - Form handling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

**Rohan Shrivastava**
- Email: rohansh0808@gmail.com
- Phone: +91 9876543210
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Made with ❤️ and React.js by Rohan Shrivastava