# Coming Soon Page Guide

This is your fun, interactive "Coming Soon" page with a game!

## Files Created

1. **`coming-soon.html`** - Main HTML file
2. **`coming-soon.css`** - Styling with Apple dark theme
3. **`coming-soon.js`** - Interactive game logic

## Features

### 🎮 Interactive Game
- **"Catch the Stars" Game**: A fun, click-based game where stars appear randomly
- Click stars to score points
- 30-second timer
- Score tracking and game over screen
- Pause/resume functionality
- Celebration animation for high scores (200+ points)

### 📸 Your Photo
- Uses the same photo as your main portfolio (`your-photo.jpg`)
- Grayscale filter applied
- Blends seamlessly with the dark background

### 💬 Get In Touch Section
- Contact form with validation
- Social media links (LinkedIn, GitHub)
- Email link
- Apple-style notifications

### ✨ Interactive Elements
- Animated background particles
- Animated progress bar with changing messages
- Smooth transitions and animations
- Responsive design

## How to Use

1. **Open the page**: Simply open `coming-soon.html` in your browser
2. **Customize Contact Info**: 
   - Update email address in the contact section
   - Update LinkedIn and GitHub URLs
3. **The Game**: 
   - Click "Start Game" to begin
   - Stars will appear randomly - click them to score!
   - Try to get the highest score in 30 seconds

## Customization

### Update Contact Information

Edit `coming-soon.html`:

```html
<!-- Around line 115-125 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourusername">GitHub</a>
```

### Adjust Game Difficulty

In `coming-soon.js`, you can modify:

- **Star spawn rate**: Change `800` in `spawnStar()` (line ~60) - lower = faster
- **Time limit**: Change `30` in the constructor (line ~9) - seconds
- **Max stars on screen**: Change `5` in constructor (line ~12)
- **Points per star**: Change `10` in `catchStar()` (line ~90)

### Progress Messages

Edit the messages array in `coming-soon.js` (line ~27):

```javascript
const messages = [
    'Loading amazing content...',
    'Crafting beautiful designs...',
    // Add your own messages here!
];
```

## Game Instructions

- **Objective**: Click on stars (⭐) as they appear on screen
- **Scoring**: Each star is worth 10 points
- **Time Limit**: 30 seconds
- **Pause**: Click the pause button to pause/resume
- **High Score**: Get 200+ points for a celebration animation!

## Design

- **Theme**: Apple-inspired dark mode
- **Colors**: Black background with blue accents
- **Typography**: SF Pro Display style fonts
- **Animations**: Smooth, elegant transitions

## Tips

1. Stars disappear after 3 seconds if not clicked
2. Maximum 5 stars on screen at once
3. The game area changes cursor to crosshair
4. Hover over stars for a preview effect
5. Score popups show +10 for each catch

Enjoy your fun coming soon page! 🚀

