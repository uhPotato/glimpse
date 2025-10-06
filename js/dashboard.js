// Dashboard functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Glimpse Dashboard Initialized');
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize post interactions
    initializePostInteractions();
    
    // Load user info
    loadUserInfo();
});

// Navigation functionality
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Handle navigation based on button ID
            handleNavigation(button.id);
        });
    });
}

// Handle navigation actions
function handleNavigation(buttonId) {
    switch(buttonId) {
        case 'libraryBtn':
            window.location.href = 'library.html';
            console.log('Navigating to Library');
            break;
        case 'laniBtn':
            showMessage('Lani AI assistant coming soon!', 'info');
            console.log('Navigating to Lani');
            break;
        case 'spaceBtn':
            showMessage('Welcome to Your Space!', 'success');
            console.log('Navigating to Your Space');
            break;
        case 'supportBtn':
            showMessage('Support center coming soon!', 'info');
            console.log('Navigating to Support');
            break;
        case 'adminBtn':
            showMessage('Admin panel coming soon!', 'info');
            console.log('Navigating to Admin');
            break;
        default:
            console.log('Unknown navigation action');
    }
}

// Post interaction functionality
function initializePostInteractions() {
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const icon = button.querySelector('i');
            const isLikeButton = icon.classList.contains('fa-heart');
            const isCommentButton = icon.classList.contains('fa-comment');
            const isShareButton = icon.classList.contains('fa-share');
            
            if (isLikeButton) {
                handleLike(button);
            } else if (isCommentButton) {
                handleComment(button);
            } else if (isShareButton) {
                handleShare(button);
            }
        });
    });
}

// Handle like functionality
function handleLike(button) {
    const icon = button.querySelector('i');
    const countText = button.textContent.trim();
    const currentCount = parseInt(countText.match(/\d+/)[0]);
    
    // Toggle like state
    if (icon.classList.contains('fas')) {
        // Unlike
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.innerHTML = `<i class="far fa-heart"></i> ${currentCount - 1}`;
        button.style.color = '#666';
    } else {
        // Like
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.innerHTML = `<i class="fas fa-heart"></i> ${currentCount + 1}`;
        button.style.color = '#e74c3c';
        
        // Add animation
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
}

// Handle comment functionality
function handleComment(button) {
    showMessage('Comment feature coming soon!', 'info');
    console.log('Opening comments');
}

// Handle share functionality
function handleShare(button) {
    showMessage('Share feature coming soon!', 'info');
    console.log('Sharing post');
}

// Load user information
function loadUserInfo() {
    // Get user info from localStorage or session
    const userInfo = getUserInfo();
    
    if (userInfo) {
        console.log('Welcome back,', userInfo.name || userInfo.email);
    }
}

// Get user info (simulate getting from storage)
function getUserInfo() {
    // In a real app, this would get user info from localStorage, sessionStorage, or API
    return {
        email: 'demo@glimpse.com',
        name: 'Demo User'
    };
}

// Show message to user
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.dashboard-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `dashboard-message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    Object.assign(messageDiv.style, {
        position: 'fixed',
        top: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '25px',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '1000',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        animation: 'slideDown 0.3s ease-out'
    });

    // Add animation keyframes if not already added
    if (!document.querySelector('#message-animations')) {
        const style = document.createElement('style');
        style.id = 'message-animations';
        style.textContent = `
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            @keyframes slideUp {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Insert message
    document.body.appendChild(messageDiv);

    // Auto-remove message after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 300);
        }
    }, 3000);
}

// Simulate real-time updates (optional)
function simulateRealTimeUpdates() {
    // This could be used to add new posts or update existing ones
    // For now, it's just a placeholder for future functionality
    console.log('Real-time updates initialized');
}

// Handle user menu click
document.addEventListener('click', (e) => {
    if (e.target.closest('.user-menu')) {
        showUserMenu();
    }
});

// Show user menu
function showUserMenu() {
    showMessage('User menu coming soon!', 'info');
    console.log('Opening user menu');
}

// Handle logout (if needed)
function logout() {
    // Clear user session
    localStorage.removeItem('userSession');
    sessionStorage.clear();
    
    // Redirect to login page
    window.location.href = '../index.html';
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleNavigation,
        handleLike,
        handleComment,
        handleShare,
        getUserInfo,
        logout
    };
}