# repoIQ.net - AI-Powered Code Quality Analysis

A modern, responsive website for repoIQ, an AI-powered code quality analysis platform inspired by SonarCloud.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Demo**: Live dashboard preview showcasing the product
- **Multiple Pages**: Home, About, Contact, and Demo pages
- **AI-Focused Messaging**: Emphasizes AI-powered analysis capabilities
- **Performance Optimized**: Lightweight CSS and JavaScript

## 📁 Project Structure

```
repoIQ/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   ├── main.css        # Main styles and layout
│   │   └── components.css  # Reusable component styles
│   └── js/
│       └── main.js         # Interactive functionality
├── pages/
│   ├── about.html          # About us page
│   ├── contact.html        # Contact form and information
│   └── demo.html           # Interactive dashboard demo
└── README.md               # This file
```

## 🎨 Design Features

### Color Palette
- Primary: `#4f46e5` (Indigo)
- Secondary: `#7c3aed` (Purple)
- Success: `#059669` (Green)
- Warning: `#f59e0b` (Amber)
- Error: `#dc2626` (Red)

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes
- Clear hierarchy with proper contrast

### Components
- **Buttons**: Primary, outline, and large variants
- **Cards**: Clean containers with shadows
- **Forms**: Styled inputs and textareas
- **Navigation**: Sticky header with mobile menu
- **Modals**: Overlay dialogs with animations
- **Badges**: Status indicators
- **Progress Bars**: Visual progress indicators

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Navigate** through the different pages using the menu

### Local Development

For local development with live reload, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with value proposition and updated statistics (1M+ lines, 1000+ issues, 50+ repositories)
- Feature showcase with 6 key capabilities including Easy GitHub Integration
- Custom pricing section with contact form
- Interactive dashboard preview inspired by real analysis reports
- Call-to-action sections

### About Page (`pages/about.html`)
- Company mission and story
- Team member profiles
- Core values and principles
- Company statistics

### Contact Page (`pages/contact.html`)
- Contact form with validation
- Multiple contact methods
- FAQ section
- Support options

### Demo Page (`pages/demo.html`)
- Interactive dashboard mockup
- Sample project analysis
- Issue tracking interface
- File analysis visualization

## 🎯 Key Features Highlighted

1. **AI-Powered Analysis**: Smart code quality detection
2. **Security Scanning**: Vulnerability identification
3. **Performance Insights**: Bottleneck detection
4. **Quality Metrics**: Comprehensive reporting
5. **CI/CD Integration**: Seamless workflow integration
6. **Smart Prioritization**: AI-driven issue ranking

## 🔄 Interactive Elements

- **Smooth scrolling** navigation
- **Animated counters** in statistics
- **Hover effects** on cards and buttons
- **Mobile menu** toggle
- **Tab switching** in dashboard demo
- **Form validation** and submission
- **Modal dialogs** for additional content

## 🎨 Customization

### Colors
Update the CSS custom properties in `assets/css/main.css` to change the color scheme:

```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #7c3aed;
  /* Add more custom properties */
}
```

### Content
- Update text content directly in HTML files
- Modify images by replacing placeholder content
- Adjust pricing plans in the pricing section
- Customize team members in the about page

### Styling
- Main layout styles: `assets/css/main.css`
- Component styles: `assets/css/components.css`
- Add custom styles at the end of existing files

## 📊 Performance

- **Lightweight**: Minimal dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **SEO Friendly**: Semantic HTML and meta tags
- **Accessible**: ARIA labels and keyboard navigation

## 🔮 Future Enhancements

Potential additions for a production version:
- Real backend integration
- User authentication system
- Actual code analysis functionality
- Payment processing
- Advanced dashboard features
- Blog/documentation system
- Multi-language support

## 📝 License

This is a demo project created for repoIQ.net. All rights reserved.

## 🤝 Contributing

This is a demo project, but suggestions for improvements are welcome!

---

**Built with ❤️ for modern web development**