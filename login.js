// DOM Elements
const loginForm = document.getElementById('loginForm');
const googleLoginBtn = document.getElementById('googleLogin');
const facebookLoginBtn = document.getElementById('facebookLogin');
const signupLink = document.getElementById('signupLink');

// Form validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Show message to user
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    // Insert message at the top of the login container
    const loginContainer = document.querySelector('.login-container');
    loginContainer.insertBefore(messageDiv, loginContainer.firstChild);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Set loading state
function setLoadingState(isLoading) {
    const container = document.querySelector('.main-content');
    const loginBtn = document.querySelector('.login-btn');
    
    if (isLoading) {
        container.classList.add('loading');
        loginBtn.textContent = 'Signing in...';
    } else {
        container.classList.remove('loading');
        loginBtn.textContent = 'Sign In';
    }
}

// Handle regular login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Validate inputs
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }

    if (!validatePassword(password)) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }

    // Set loading state
    setLoadingState(true);

    try {
        // Simulate API call (replace with actual authentication logic)
        await simulateLogin(email, password, remember);
        
        showMessage('Login successful! Redirecting...', 'success');
        
        // Simulate redirect after successful login
        setTimeout(() => {
            // Replace with actual redirect logic
            console.log('Redirecting to dashboard...');
            // window.location.href = '/dashboard';
        }, 1500);
        
    } catch (error) {
        showMessage(error.message || 'Login failed. Please try again.', 'error');
    } finally {
        setLoadingState(false);
    }
});

// Simulate login API call
async function simulateLogin(email, password, remember) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate different responses based on email
            if (email === 'demo@glimpse.com' && password === 'demo123') {
                resolve({ success: true, user: { email, name: 'Demo User' } });
            } else if (email === 'error@test.com') {
                reject(new Error('Invalid credentials'));
            } else {
                // For demo purposes, accept any valid email/password combination
                resolve({ success: true, user: { email, name: 'User' } });
            }
        }, 1500); // Simulate network delay
    });
}

// Handle Google login
googleLoginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    try {
        setLoadingState(true);
        showMessage('Connecting to Google...', 'info');
        
        // Simulate Google OAuth flow
        await simulateGoogleLogin();
        
        showMessage('Google login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            console.log('Redirecting after Google login...');
            // window.location.href = '/dashboard';
        }, 1500);
        
    } catch (error) {
        showMessage('Google login failed. Please try again.', 'error');
    } finally {
        setLoadingState(false);
    }
});

// Handle Facebook login
facebookLoginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    try {
        setLoadingState(true);
        showMessage('Connecting to Facebook...', 'info');
        
        // Simulate Facebook OAuth flow
        await simulateFacebookLogin();
        
        showMessage('Facebook login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            console.log('Redirecting after Facebook login...');
            // window.location.href = '/dashboard';
        }, 1500);
        
    } catch (error) {
        showMessage('Facebook login failed. Please try again.', 'error');
    } finally {
        setLoadingState(false);
    }
});

// Simulate Google OAuth
async function simulateGoogleLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful Google login
            resolve({ 
                success: true, 
                user: { 
                    email: 'user@gmail.com', 
                    name: 'Google User',
                    provider: 'google'
                } 
            });
        }, 2000);
    });
}

// Simulate Facebook OAuth
async function simulateFacebookLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful Facebook login
            resolve({ 
                success: true, 
                user: { 
                    email: 'user@facebook.com', 
                    name: 'Facebook User',
                    provider: 'facebook'
                } 
            });
        }, 2000);
    });
}

// Handle sign up link
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    showMessage('Sign up functionality coming soon!', 'info');
    // Replace with actual sign up page navigation
    // window.location.href = '/signup';
});

// Handle forgot password link
document.querySelector('.forgot-password').addEventListener('click', (e) => {
    e.preventDefault();
    showMessage('Password reset functionality coming soon!', 'info');
    // Replace with actual password reset flow
    // window.location.href = '/forgot-password';
});

// Add input focus effects
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        const form = e.target.closest('form');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('Glimpse Login Page Initialized');
    
    // Focus on email input for better UX
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.focus();
    }
    
    // Add demo credentials hint
    setTimeout(() => {
        showMessage('Demo: Use demo@glimpse.com / demo123 to test login', 'info');
    }, 1000);
});

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePassword,
        simulateLogin,
        simulateGoogleLogin,
        simulateFacebookLogin
    };
}