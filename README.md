# Glimpse - Web Application Landing Page

A modern, responsive landing page with user authentication featuring email/password login and social media integration (Google and Facebook).

## Features

- **Clean, Modern Design**: Gradient background with glassmorphism effects
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **User Authentication**: Email and password login with validation
- **Social Login**: Google and Facebook authentication buttons
- **Form Validation**: Real-time input validation with user feedback
- **Loading States**: Visual feedback during authentication processes
- **Accessibility**: Keyboard navigation and screen reader friendly

## Project Structure

```
glimpse/
├── index.html          # Main HTML file with login form
├── styles.css          # CSS styles with modern design
├── script.js           # JavaScript for form handling and authentication
└── README.md           # Project documentation
```

## Getting Started

1. **Open the Application**
   - Simply open `index.html` in your web browser
   - No additional setup or dependencies required

2. **Demo Credentials**
   - Email: `demo@glimpse.com`
   - Password: `demo123`
   - Or use any valid email format with a password of 6+ characters

## Features Overview

### Login Form
- Email validation (proper email format required)
- Password validation (minimum 6 characters)
- "Remember me" checkbox
- "Forgot password" link (placeholder)

### Social Authentication
- Google login button with simulated OAuth flow
- Facebook login button with simulated OAuth flow
- Visual feedback during authentication process

### User Experience
- Smooth animations and transitions
- Loading states with visual feedback
- Success/error message system
- Auto-focus on email input for better UX
- Keyboard navigation support

## Technical Details

### HTML Structure
- Semantic HTML5 elements
- Accessible form labels and inputs
- Font Awesome icons for social media buttons
- Google Fonts (Inter) for typography

### CSS Features
- CSS Grid and Flexbox for layout
- CSS custom properties for consistent theming
- Gradient backgrounds and modern styling
- Responsive design with mobile-first approach
- Smooth transitions and hover effects

### JavaScript Functionality
- Form validation with real-time feedback
- Simulated authentication flows
- Error handling and user messaging
- Loading state management
- Keyboard event handling

## Customization

### Colors and Theming
The main colors can be customized in the CSS file:
- Primary gradient: `#667eea` to `#764ba2`
- Accent colors: `#ff6b6b` and `#4ecdc4`
- Text colors: Various shades of gray

### Authentication Integration
To integrate with real authentication services:

1. **Replace simulation functions** in `script.js`:
   - `simulateLogin()` - Replace with actual API call
   - `simulateGoogleLogin()` - Integrate Google OAuth
   - `simulateFacebookLogin()` - Integrate Facebook Login

2. **Add OAuth SDKs**:
   ```html
   <!-- Google OAuth -->
   <script src="https://accounts.google.com/gsi/client" async defer></script>
   
   <!-- Facebook SDK -->
   <script async defer crossorigin="anonymous" 
           src="https://connect.facebook.net/en_US/sdk.js"></script>
   ```

### Form Fields
Additional form fields can be added by:
1. Adding HTML input elements in `index.html`
2. Styling them in `styles.css`
3. Adding validation logic in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Sign up page
- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] Remember me persistence
- [ ] Social profile integration
- [ ] Dashboard/home page after login
- [ ] Backend API integration
- [ ] Database user management

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Note**: This is a frontend-only implementation with simulated authentication. For production use, integrate with a proper backend authentication system and follow security best practices.