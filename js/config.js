// Configuration file for Glimpse application
const config = {
    // Application settings
    app: {
        name: 'Glimpse',
        version: '1.0.0',
        description: 'Modern web application with social authentication'
    },

    // API endpoints (for future backend integration)
    api: {
        baseUrl: 'https://api.glimpse.com', // Replace with your API URL
        endpoints: {
            login: '/auth/login',
            register: '/auth/register',
            forgotPassword: '/auth/forgot-password',
            resetPassword: '/auth/reset-password',
            profile: '/user/profile',
            logout: '/auth/logout'
        }
    },

    // OAuth configuration
    oauth: {
        google: {
            clientId: 'your-google-client-id.apps.googleusercontent.com',
            scope: 'profile email',
            redirectUri: window.location.origin + '/auth/google/callback'
        },
        facebook: {
            appId: 'your-facebook-app-id',
            version: 'v18.0',
            scope: 'email,public_profile',
            redirectUri: window.location.origin + '/auth/facebook/callback'
        }
    },

    // UI settings
    ui: {
        theme: {
            primaryColor: '#667eea',
            secondaryColor: '#764ba2',
            accentColor: '#ff6b6b',
            successColor: '#10b981',
            errorColor: '#ef4444',
            warningColor: '#f59e0b'
        },
        animations: {
            duration: 200,
            easing: 'ease-in-out'
        },
        messages: {
            autoHideDelay: 5000
        }
    },

    // Validation rules
    validation: {
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        },
        password: {
            required: true,
            minLength: 6,
            maxLength: 128,
            message: 'Password must be at least 6 characters long'
        }
    },

    // Feature flags
    features: {
        socialLogin: true,
        rememberMe: true,
        forgotPassword: true,
        registration: true,
        emailVerification: false,
        twoFactorAuth: false
    },

    // Development settings
    development: {
        debug: true,
        mockApi: true,
        logLevel: 'info'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else if (typeof window !== 'undefined') {
    window.GlimpseConfig = config;
}