# Smart E-Judge LLC Website

## Video Background Setup

### Current Issue Fixed
The video background was not displaying because it was using a YouTube URL instead of a direct video file. This has been fixed with the following changes:

1. **Updated video source**: Now using the specified YouTube video via iframe embed
2. **YouTube Embed**: Properly configured YouTube iframe with autoplay, loop, and mute settings
3. **Enhanced JavaScript**: Updated video controls to handle iframe limitations
4. **Improved CSS**: Added support for iframe elements with proper styling
5. **Created test file**: Added `video-test.html` for testing YouTube embed functionality

### How to Use Your Own Video

#### Current Setup: YouTube Embed
The website is currently configured to use the specified YouTube video:
- **Video ID**: `tmgc-HPJuj0`
- **URL**: [https://www.youtube.com/watch?v=tmgc-HPJuj0&t=1s](https://www.youtube.com/watch?v=tmgc-HPJuj0&t=1s)
- **Embed Settings**: Autoplay, muted, loop, no controls, no branding, HD quality
- **Test File**: `youtube-video-test.html` - للاختبار المباشر للفيديو

#### Option 1: Change to Direct Video File
1. Place your video file in the project directory (e.g., `assets/videos/background.mp4`)
2. Comment out the iframe section and uncomment the video section in `index.html`:
   ```html
   <video id="heroVideo" muted loop autoplay playsinline>
       <source src="assets/videos/your-video.mp4" type="video/mp4">
       Your browser does not support the video tag.
   </video>
   ```

#### Option 2: Change to Different YouTube Video
1. Replace the video ID in the iframe src:
   ```html
   <iframe id="heroVideo" 
           src="https://www.youtube.com/embed/YOUR_NEW_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_NEW_VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=1" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen>
   </iframe>
   ```

### Video Requirements
- **Format**: MP4 (recommended), WebM, or Ogg
- **Resolution**: 1920x1080 or higher for best quality
- **Duration**: 10-30 seconds (loops automatically)
- **Size**: Keep under 10MB for faster loading
- **Content**: Professional background video that doesn't interfere with text readability

### Video Controls
- **Auto-play**: Video starts automatically (muted for browser compatibility)
- **Loop**: Video repeats continuously
- **Enhanced Controls**: 
  - **Play/Pause Button**: Click to play or pause the video
  - **Mute/Unmute Button**: Click to mute or unmute the audio
  - **Fullscreen Button**: Click to view video in fullscreen mode
- **Visual Feedback**: Buttons change appearance when active/inactive
- **YouTube API Integration**: Full control over YouTube embedded videos

### Troubleshooting
1. **Black screen issue**: 
   - Open `video-debug.html` to diagnose the problem
   - Check if YouTube iframe is loading properly
   - The system will automatically switch to fallback video if YouTube fails
2. **Video not playing**: 
   - Open `video-test.html` to test if video works in your browser
   - Check browser console for error messages
   - Try clicking on the page to enable autoplay
3. **Autoplay blocked**: Modern browsers require user interaction for autoplay with sound
4. **YouTube issues**: 
   - Some networks block YouTube embeds
   - Try using a different network or VPN
   - The fallback video will play automatically if YouTube fails
5. **Mobile issues**: Test on mobile devices as autoplay behavior may differ

### Testing Video
1. Open `video-test.html` in your browser
2. If the test video works, the main site video should also work
3. If test video doesn't work, check your browser settings or try a different browser

### Performance Tips
- Use compressed video files
- Consider using WebM format for better compression
- Implement lazy loading for videos
- Test on different devices and browsers

## Website Features
- Responsive design
- AI-powered immigration services showcase
- Team member profiles
- Contact forms
- Interactive elements
- Modern animations

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome
- Google Fonts
