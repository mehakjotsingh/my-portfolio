# My Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and contact information.

## Features

- 🎨 **Modern Design**: Clean and professional UI with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight**: Pure HTML, CSS, and JavaScript - no heavy frameworks
- 🎯 **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- 🌈 **Interactive Elements**: Hover effects, animations, and transitions
- 📧 **Contact Form**: Ready-to-customize contact form

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Projects**: Showcase of featured projects with tags and links
4. **Skills**: Display of technical skills organized by category
5. **Contact**: Contact information and form

## Getting Started

### Prerequisites

No prerequisites needed! This is a static website that runs entirely in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required.

### Local Development

For a better development experience, you can use a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Customization

### Personal Information

1. **Hero Section** (`index.html`):
   - Update the name in `.name` class
   - Modify the subtitle and description
   - Replace the placeholder image or SVG

2. **About Section**:
   - Edit the about text paragraphs
   - Update statistics (projects, experience, satisfaction)

3. **Projects**:
   - Replace project cards with your actual projects
   - Update project titles, descriptions, and tags
   - Add real links to live demos and GitHub repositories

4. **Skills**:
   - Modify skill categories and items to match your expertise

5. **Contact**:
   - Update email address
   - Add your LinkedIn and GitHub profile URLs
   - Configure the contact form to send emails (requires backend integration)

### Styling

- **Colors**: Modify CSS variables in `styles.css` under `:root` selector
- **Fonts**: Change the Google Fonts import in `index.html`
- **Layout**: Adjust grid and flexbox properties in `styles.css`

### Colors Reference

The default color scheme uses:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Text: `#1f2937` (Dark gray)
- Background: `#ffffff` (White)

## Contact Form

The contact form is currently set up to show an alert on submission. To make it functional:

1. **Backend Integration**: Connect to a server-side script (PHP, Node.js, etc.)
2. **Email Service**: Use services like Formspree, EmailJS, or SendGrid
3. **API Endpoint**: Point the form to your backend API

Example with EmailJS:
```javascript
// Add EmailJS script to index.html
// Update contactForm submit handler in script.js
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
my-portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## License

This project is open source and available for personal and commercial use.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## Acknowledgments

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Design inspiration from modern portfolio websites

---

**Note**: Remember to replace placeholder content with your actual information before deploying!

