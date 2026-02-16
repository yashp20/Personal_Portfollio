# Personal Portfolio Website

A stunning, interactive portfolio website built with React, Vite, Three.js, and Framer Motion. Features 3D animations, smooth transitions, and a modern cyberpunk aesthetic.

## 🚀 Features

- **3D Interactive Background** - Rotating icosahedron with particle effects using Three.js
- **Smooth Animations** - Page transitions and scroll animations with Framer Motion
- **Responsive Design** - Fully responsive and mobile-friendly
- **Fast Performance** - Built with Vite for lightning-fast development and builds
- **Modern UI** - Glass-morphism effects, gradient animations, and custom styling
- **Easy Customization** - All content stored in separate data files

## 📁 Project Structure

```
personal-website/
│
├── public/                     # Static files
│   ├── images/
│   │   ├── projects/          # Project images
│   │   └── profile/           # Profile images
│   ├── icons/                 # Favicon and icons
│   └── resume.pdf             # Your resume
│
├── src/
│   ├── assets/                # Imported media files
│   │
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │   │
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── SectionTitle.jsx
│   │   │
│   │   └── animations/       # Animation components
│   │       ├── Background3D.jsx
│   │       ├── StarField.jsx
│   │       └── ScrollProgress.jsx
│   │
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/                 # Data files
│   │   ├── projects.js       # Your projects
│   │   ├── experience.js     # Work experience & education
│   │   └── skills.js         # Skills and interests
│   │
│   ├── styles/
│   │   └── index.css         # Global styles
│   │
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # Entry point
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## ✏️ Customization

### 1. Personal Information

Update the following files with your information:

- `src/data/projects.js` - Add your projects
- `src/data/experience.js` - Add your work experience and education
- `src/data/skills.js` - Update your skills and interests

### 2. Branding

Replace "YOUR NAME" in:
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/pages/Home.jsx`
- `index.html` (title and meta tags)

### 3. Contact Links

Update social media links in:
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

### 4. Colors & Theme

Edit colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#ff6b35',    // Orange
  secondary: '#004e89',  // Blue
  accent: '#00d9ff',     // Cyan
  dark: '#0a0e27',       // Dark background
  // ... customize as needed
}
```

### 5. Add Images

Place your images in:
- `public/images/projects/` - Project screenshots
- `public/images/profile/` - Profile photos
- `public/icons/` - Favicon and icons
- `public/resume.pdf` - Your resume PDF

## 🎨 Design Features

- **Futuristic Aesthetic** - Cyberpunk-inspired with neon accents
- **Typography** - Orbitron display font + Space Mono monospace
- **Animations** - Framer Motion for smooth page transitions
- **3D Graphics** - Three.js with React Three Fiber
- **Glass Morphism** - Modern frosted glass effects
- **Gradient Animations** - Flowing color gradients
- **Responsive** - Mobile-first design approach

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ by a CS student at UIUC**
