# Glimpse Project Structure

## Directory Organization

```
glimpse/
├── index.html              # Main login page (entry point)
├── README.md              # Project documentation
├── .gitignore            # Git ignore file
├── PROJECT_STRUCTURE.md  # This file
├── css/                  # All CSS stylesheets
│   ├── styles.css        # Login page styles
│   └── dashboard.css     # Dashboard page styles
├── html/                 # HTML pages (except main index)
│   └── dashboard.html    # Dashboard/landing page
└── js/                   # All JavaScript files
    ├── config.js         # Configuration settings
    ├── login.js          # Login functionality
    └── dashboard.js      # Dashboard functionality
```

## File Relationships

### Main Entry Point
- `index.html` - Login page that loads:
  - `css/styles.css` - Login page styling
  - `js/config.js` - Configuration
  - `js/login.js` - Login functionality

### Dashboard Page
- `html/dashboard.html` - Dashboard page that loads:
  - `css/dashboard.css` - Dashboard styling
  - `js/dashboard.js` - Dashboard functionality

## Navigation Flow

1. User visits `index.html` (login page)
2. After successful login, redirects to `html/dashboard.html`
3. Dashboard logout redirects back to `index.html`

## Features

### Login Page (`index.html`)
- Email/password authentication
- Google OAuth simulation
- Facebook OAuth simulation
- Form validation
- Responsive design

### Dashboard Page (`html/dashboard.html`)
- News feed with sample posts
- Interactive post engagement (likes, comments, shares)
- Bottom navigation with 5 buttons:
  - Library
  - Lani (AI Assistant)
  - Your Space (active/home)
  - Support
  - Admin
- User menu
- Responsive design

## Development Notes

- All paths are relative and properly configured
- CSS files are organized by page/functionality
- JavaScript files are modular and well-documented
- Responsive design works on all device sizes
- Modern glassmorphism design aesthetic