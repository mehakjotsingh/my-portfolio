# How to Add Your Photo to the Portfolio

This guide will walk you through adding your profile photo to your portfolio website.

## Quick Steps

1. **Prepare Your Photo**
   - Use a high-quality image (recommended: 1000x1000 pixels or larger)
   - Square aspect ratio works best (1:1)
   - File formats: JPG, PNG, or WebP
   - Keep file size under 500KB for faster loading

2. **Add Your Photo to the Project**
   - Place your photo file in the same folder as `index.html`
   - Name it something simple like: `photo.jpg`, `profile.jpg`, or `your-name.jpg`

3. **Update the HTML**
   - Open `index.html` in a text editor
   - Find line 53-57 (the hero-image section)
   - Replace `your-photo.jpg` with your actual photo filename

## Detailed Instructions

### Step 1: Prepare Your Photo

**Recommended Photo Specifications:**
- **Size**: 1000x1000 pixels minimum (square format)
- **Format**: JPG (best compression) or PNG (transparency support)
- **File Size**: Under 500KB (optimize if needed)
- **Content**: Professional headshot or portrait
- **Background**: Clean background works best (will be cropped to circle)

**Photo Tips:**
- Use good lighting
- Face the camera directly or at a slight angle
- Ensure your face is centered
- Professional attire recommended

**Tools to Optimize Your Photo:**
- Online: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Desktop: Photoshop, GIMP, or Preview (Mac)

### Step 2: Add Photo to Project Folder

1. Locate your portfolio folder: `/Users/mehakjot/Documents/cursor-projects/my-portfolio/`
2. Copy your photo file into this folder
3. Make sure the filename doesn't have spaces (use dashes or underscores instead)
   - ✅ Good: `photo.jpg`, `my-photo.jpg`, `profile_picture.png`
   - ❌ Bad: `my photo.jpg`, `photo 1.jpg`

### Step 3: Update the HTML File

1. Open `index.html` in any text editor (VS Code, TextEdit, etc.)
2. Find this section (around line 53-57):

```html
<div class="hero-image">
    <div class="photo-container">
        <!-- Replace 'your-photo.jpg' with your actual photo filename -->
        <img src="your-photo.jpg" alt="Your Name" class="profile-photo" id="profilePhoto">
        <div class="photo-glow"></div>
    </div>
</div>
```

3. Replace `your-photo.jpg` with your actual filename. For example:
   - If your file is `photo.jpg`, change it to: `src="photo.jpg"`
   - If your file is `my-profile.png`, change it to: `src="my-profile.png"`

4. Also update the `alt` text (for accessibility):
   - Change `alt="Your Name"` to your actual name, e.g., `alt="John Doe"`

### Step 4: Test Your Photo

1. Open `index.html` in your web browser
2. Check that your photo appears in the hero section
3. Verify it looks good on mobile (resize your browser window)
4. If the photo doesn't appear:
   - Check the filename matches exactly (case-sensitive on some systems)
   - Ensure the file is in the same folder as `index.html`
   - Check browser console for errors (F12 → Console tab)

## Example

**Before:**
```html
<img src="your-photo.jpg" alt="Your Name" class="profile-photo" id="profilePhoto">
```

**After (if your file is named `mehak-photo.jpg`):**
```html
<img src="mehak-photo.jpg" alt="Mehak Jot" class="profile-photo" id="profilePhoto">
```

## Troubleshooting

### Photo Not Showing?

1. **Check File Path**: Make sure the photo is in the same folder as `index.html`
2. **Check Filename**: Ensure the filename in HTML matches exactly (including extension)
3. **Check File Format**: Use .jpg, .jpeg, .png, or .webp
4. **Check Browser Console**: Open Developer Tools (F12) and look for error messages

### Photo Looks Distorted?

- The photo is automatically cropped to a circle
- Make sure your photo is square (1:1 aspect ratio) for best results
- The photo will be centered, so position your face in the center

### Photo Too Large/Slow Loading?

- Compress your image using [TinyPNG](https://tinypng.com/)
- Aim for file size under 500KB
- Use JPG format for photos (better compression than PNG)

### Want to Use a Different Photo Size?

The photo container is set to 500x500 pixels. If you want to change the size:

1. Open `styles.css`
2. Find `.photo-container` (around line 200)
3. Adjust the `max-width` value:
   ```css
   .photo-container {
       max-width: 500px; /* Change this value */
   }
   ```

## Alternative: Using Online Image Hosting

If you prefer to host your photo online:

1. Upload your photo to a service like:
   - [Imgur](https://imgur.com/)
   - [Cloudinary](https://cloudinary.com/)
   - [GitHub](https://github.com/) (if you're hosting the site there)

2. Get the direct image URL

3. Update the HTML:
   ```html
   <img src="https://your-image-url.com/photo.jpg" alt="Your Name" class="profile-photo" id="profilePhoto">
   ```

## Need Help?

If you're still having issues:
1. Double-check the filename matches exactly
2. Make sure the file is in the correct folder
3. Try using a different browser
4. Check the browser console for error messages

---

**Note**: The photo will automatically be styled with a circular frame, subtle shadow, and a smooth hover effect - all part of the Apple-inspired design!

