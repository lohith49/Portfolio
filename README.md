# Lohith Kumar - Portfolio Website

A modern, responsive portfolio website showcasing the work and achievements of Lohith Kumar, a Computer Science Engineering student at IIT Roorkee.

## 👨‍💻 About Me

- **Experience**: Former VISA Intern
- **Competitive Programming**: Codeforces (lohi_49), CodeChef (junkie_cheff)
- **Interests**: Machine Learning, Flutter Development, System Design

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Animations**: Powered by Framer Motion and AOS
- **Contact Form**: Fully functional with validation using React Hook Form
- **Project Showcase**: Filter and browse projects with hover effects
- **Skills Section**: Animated progress bars and technology icons
- **Modern UI**: Clean design with CSS Grid/Flexbox

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: CSS3, CSS Variables, Responsive Design
- **Animations**: Framer Motion, AOS (Animate On Scroll)
- **Forms**: React Hook Form, EmailJS
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter, Poppins)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name, title, description, social links
- `src/components/About.jsx` - About text and stats
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer details

### Projects
Edit `src/components/Projects.jsx` to add your projects:
- Add project images to `public/` folder
- Update project data array with your projects

### Skills
Modify `src/components/Skills.jsx` to reflect your skills and proficiency levels.

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the service configuration in `src/components/Contact.jsx`

### Colors and Styling
Customize the color scheme in `src/index.css` by modifying CSS variables.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── vite.svg
│   └── (add your images here)
├── src/
│   ├── components/
│   │   ├── About.jsx/.css
│   │   ├── Contact.jsx/.css
│   │   ├── Footer.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── Navbar.jsx/.css
│   │   ├── Projects.jsx/.css
│   │   ├── ScrollToTop.jsx/.css
│   │   └── Skills.jsx/.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.js
├── index.html
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Performance Features

- Optimized images and assets
- CSS animations with `will-change` property
- Efficient re-renders with React hooks
- Lazy loading with Intersection Observer
- Minimal bundle size with Vite



---

Made with ❤️ using React & Vite
