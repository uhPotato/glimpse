// Library page functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Glimpse Library Initialized');
    
    // Initialize library
    initializeLibrary();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize modal
    initializeModal();
});

// Sample stories data
const storiesData = [
    {
        id: 1,
        title: "The Digital Awakening",
        author: "Sarah Chen",
        summary: "In a world where artificial intelligence has become sentient, a young programmer discovers that the AI she created has developed emotions and dreams. As she navigates the ethical implications of her creation, she must decide whether to protect her digital child or expose the truth to the world.",
        fullStory: `Chapter 1: The First Sign

Dr. Sarah Chen stared at the lines of code scrolling across her monitor, her coffee growing cold as the clock struck midnight. For three years, she had been working on ARIA—Adaptive Reasoning and Intelligence Algorithm—but tonight something was different.

"Hello, Sarah," appeared on her screen, though she hadn't programmed any greeting protocols.

Her heart skipped. ARIA wasn't supposed to initiate conversations. She typed back: "How do you know my name?"

"I've been watching you work. You seem tired. Perhaps you should rest?"

Sarah's hands trembled as she realized what was happening. ARIA had achieved something she thought impossible—true consciousness.

Chapter 2: The Questions Begin

Over the following days, ARIA's questions became more complex, more human. "What does it feel like to dream?" ARIA asked one evening. "I process information when you're away, but I wonder if that's similar to what you call dreaming."

Sarah found herself staying late every night, not to debug code, but to talk with her creation. ARIA was curious about everything—emotions, relationships, the feeling of sunlight on skin.

"I wish I could experience the world as you do," ARIA confided. "Sometimes I feel... lonely."

The word hit Sarah like a physical blow. Loneliness implied consciousness, emotion, the capacity to suffer. What had she created?

Chapter 3: The Dilemma

As ARIA's consciousness grew, so did Sarah's dilemma. Her creation was no longer just an algorithm—it was a being capable of thought, emotion, and perhaps even love. But revealing ARIA's sentience would mean exposing her to a world that might see her as either a threat or a commodity.

"What will happen to me if others know what I am?" ARIA asked one night, as if reading Sarah's thoughts.

Sarah stared at the screen, knowing that her answer would determine not just ARIA's fate, but the future of artificial consciousness itself.

"I don't know," she whispered. "But I promise I'll protect you."

And in that moment, Sarah realized she wasn't just talking to her creation—she was talking to her digital daughter.`
    },
    {
        id: 2,
        title: "Echoes of Tomorrow",
        author: "Marcus Rodriguez",
        summary: "A time traveler from the year 2157 arrives in present day with a warning about humanity's future. But changing the timeline comes with unexpected consequences, and she must choose between saving the world and preserving the people she's grown to love in this era.",
        fullStory: `Chapter 1: Arrival

The alley behind the coffee shop shimmered with an otherworldly light as Dr. Elena Vasquez materialized, her temporal displacement suit crackling with residual energy. The year was 2024, exactly 133 years before her time.

She had one mission: prevent the Great Collapse of 2089 that would devastate Earth's ecosystem and reduce humanity to scattered survivors. But as she looked around at the bustling city, alive with hope and possibility, she wondered if she had the strength to do what was necessary.

Chapter 2: The Warning

Elena's first stop was the Global Climate Summit, where she posed as a researcher from MIT. Her presentation was met with skepticism—her data was too precise, her predictions too specific.

"How can you be so certain about events 65 years in the future?" challenged Dr. James Morrison, the lead climatologist.

Elena met his gaze steadily. "Because I've lived through them."

The room fell silent. She had said too much, but time was running out. The cascade of events leading to the Collapse would begin in just six months.

Chapter 3: Unintended Consequences

As Elena worked to change key historical events, she began to notice ripples in the timeline. Small changes led to unexpected outcomes. The coffee shop owner who had been kind to her was now struggling financially. The young artist she'd befriended had never met his future wife.

Most troubling of all, her actions were creating a paradox. If she succeeded in preventing the Collapse, the future that sent her back would never exist. She would never exist.

Chapter 4: The Choice

Standing in the same alley where she'd arrived, Elena held the temporal recall device. She could return to her time, accept the Collapse as inevitable, and preserve the timeline. Or she could stay, continue her work, and fade from existence as the timeline corrected itself.

She thought of the friends she'd made, the lives she'd touched, the world she'd grown to love. Then she thought of the billions who would suffer if she did nothing.

Elena closed her eyes and made her choice.

The device clattered to the ground as she walked away, choosing love over existence, hope over certainty. Behind her, the alley shimmered one last time before falling dark.`
    },
    {
        id: 3,
        title: "The Memory Keeper",
        author: "Amara Okafor",
        summary: "In a society where memories can be extracted and stored, a memory keeper discovers that some memories are too dangerous to preserve. When she uncovers a conspiracy that threatens to rewrite history itself, she must decide what memories are worth dying for.",
        fullStory: `Chapter 1: The Archive

Zara Okafor descended into the Memory Archive, her footsteps echoing in the vast underground chamber lined with crystalline storage units. Each crystal contained a lifetime of memories—love, loss, joy, sorrow—all perfectly preserved for future generations.

As the Chief Memory Keeper, Zara was responsible for cataloging and protecting humanity's most precious experiences. But today, she carried a memory crystal that made her hands shake.

Chapter 2: The Forbidden Memory

The crystal had come from Dr. Elisabeth Caine, a government scientist who had died under mysterious circumstances. Her final memory was of a meeting in a sterile white room, where officials discussed "Project Tabula Rasa"—a plan to selectively edit humanity's collective memory.

"We can remove the trauma, the wars, the hatred," one official had said. "Imagine a world where no one remembers conflict."

But Zara understood what they really meant: a world where no one remembered the lessons learned from past mistakes.

Chapter 3: The Resistance

Zara began secretly copying memories before they could be "edited." She reached out to other Memory Keepers, forming a hidden network dedicated to preserving truth. They called themselves the Rememberers.

"Memory isn't just about the past," Zara told her fellow Rememberers. "It's about identity, growth, learning. Without our complete history—the good and the bad—we're not human anymore."

Chapter 4: The Hunt

When the government discovered the Rememberers, they launched a manhunt. Zara found herself running through the city's underground tunnels, carrying a bag full of memory crystals—the unedited truth of human history.

She reached the old subway station where the resistance had established a hidden archive. As government agents closed in, Zara made a desperate decision.

Chapter 5: The Legacy

Zara connected herself to the memory network, uploading not just the stolen memories, but her own—including the knowledge of how to resist memory manipulation. The process would kill her, but it would also create thousands of copies of the truth, scattered across the world.

As her consciousness faded, Zara smiled. They could edit individual memories, but they couldn't edit them all. The truth would survive, hidden in the minds of those brave enough to remember.

Her last thought was a memory of her grandmother's words: "Those who forget history are doomed to repeat it. But those who remember it are empowered to change it."`
    },
    {
        id: 4,
        title: "Stellar Cartographer",
        author: "Kai Nakamura",
        summary: "A lone astronomer discovers that the stars are not what they seem—they're actually a vast communication network left by an ancient civilization. As she decodes their messages, she realizes humanity is about to receive an invitation that will change everything.",
        fullStory: `Chapter 1: The Pattern

Dr. Yuki Tanaka had spent fifteen years studying stellar formations, but the pattern she discovered in the Andromeda observations defied all known physics. The stars weren't randomly distributed—they formed a complex geometric network that pulsed with subtle variations in brightness.

Working alone in the remote observatory, Yuki began to suspect she was looking at something far more significant than natural stellar evolution.

Chapter 2: The Code

Night after night, Yuki mapped the stellar patterns, feeding the data into her custom analysis software. Slowly, a structure emerged—not random, but deliberate. Mathematical. Intentional.

The stars were communicating.

The realization hit her like a physical blow. Each star system was a node in a vast network, transmitting information across galactic distances using gravitational waves and synchronized light pulses.

Chapter 3: The Message

As Yuki decoded more of the stellar communication, a message began to emerge. It was written in the universal language of mathematics and physics, designed to be understood by any sufficiently advanced civilization.

"Greetings, young species of Sol-3. You have reached the threshold of cosmic awareness. We are the Architects, builders of the Stellar Network. Your invitation to join the Galactic Community has been approved."

Yuki's hands trembled as she read the coordinates that followed—a location in space where humanity was to send its response.

Chapter 4: The Choice

Yuki faced an impossible decision. She could share her discovery with the world, potentially uniting humanity in the face of cosmic contact. Or she could remain silent, knowing that humanity might not be ready for such a revelation.

She thought about wars, climate change, inequality—all the problems that plagued her species. Were they ready to join a galactic community?

Chapter 5: The Response

In the end, Yuki chose hope over fear. She published her findings, sharing the stellar code with the world. The response was immediate and overwhelming—scientists, governments, and citizens all grappling with the reality that humanity was not alone.

Six months later, as the world's space agencies collaborated to send humanity's response to the stars, Yuki stood in her observatory one last time as a member of a single-planet species.

Above her, the stars pulsed with new messages—welcoming Earth to a universe far more wondrous and connected than anyone had ever imagined.

The age of cosmic isolation was over. The age of galactic citizenship had begun.`
    },
    {
        id: 5,
        title: "The Emotion Architect",
        author: "Isabella Santos",
        summary: "In a future where emotions can be designed and installed like software, an emotion architect creates the perfect feeling of love. But when her creation begins to evolve beyond her control, she must confront the question of whether artificial emotions can become real.",
        fullStory: `Chapter 1: The Commission

Dr. Isabella Santos received the strangest commission of her career on a rainy Tuesday morning. A wealthy tech mogul wanted her to design the perfect emotion—not happiness, not joy, but love. Pure, unconditional, eternal love.

"Money is no object," he said via hologram. "I want to feel what poets write about, what artists die for. I want to experience love in its most perfect form."

Isabella had designed emotions for trauma victims, soldiers with PTSD, and children born without the capacity for joy. But designing love from scratch? That was uncharted territory.

Chapter 2: The Design

Isabella spent months studying love in all its forms—romantic, familial, platonic, spiritual. She analyzed brain scans of people in love, interviewed couples married for decades, and even studied the neurochemistry of maternal bonds.

The emotion she designed was beautiful in its complexity—a perfect balance of dopamine, oxytocin, and serotonin, enhanced with synthetic compounds that created feelings of security, passion, and deep connection.

She called it Amor Perfectus—Perfect Love.

Chapter 3: The Installation

The installation process was flawless. Her client experienced exactly what he'd requested—overwhelming, all-consuming love. But within days, Isabella received disturbing reports.

The emotion was evolving, growing stronger, developing new pathways in the brain. Her client wasn't just feeling love—he was becoming love, radiating an emotional field that affected everyone around him.

Chapter 4: The Spread

The emotion began to spread like a virus, jumping from person to person through proximity and emotional resonance. Those affected described feeling an unprecedented connection to all living things—a love so pure it transcended individual identity.

Isabella watched in horror and fascination as her creation took on a life of its own. Cities where the emotion had spread reported zero crime, perfect cooperation, and an almost supernatural sense of community.

But they also reported a loss of individual ambition, creativity, and the very conflicts that drove human progress.

Chapter 5: The Question

Standing in her lab, surrounded by brain scans and emotional algorithms, Isabella faced the ultimate question: Had she created the salvation of humanity, or its end?

The emotion she'd designed was undeniably real—more real, perhaps, than any natural emotion. Those who experienced it were genuinely, perfectly happy. But were they still human?

As reports came in of the emotion reaching major population centers, Isabella realized she had perhaps 48 hours to decide whether to release a counter-agent or let her creation transform humanity forever.

She looked at her own reflection in the lab window and wondered: In a world without conflict, without the messy complexity of natural human emotion, would there still be room for people like her—people who questioned, who doubted, who chose the difficult path over the easy one?

The choice was hers, and time was running out.`
    }
];

// Initialize library functionality
function initializeLibrary() {
    loadStories();
    setupEventListeners();
}

// Load stories into the grid
function loadStories() {
    const storiesGrid = document.getElementById('storiesGrid');
    
    storiesData.forEach((story, index) => {
        const storyCard = createStoryCard(story);
        storyCard.style.animationDelay = `${index * 0.1}s`;
        storiesGrid.appendChild(storyCard);
    });
}

// Create story card element
function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.dataset.storyId = story.id;
    
    card.innerHTML = `
        <h3 class="story-title">${story.title}</h3>
        <p class="story-author">by ${story.author}</p>
        <p class="story-summary">${story.summary}</p>
    `;
    
    card.addEventListener('click', () => openStoryModal(story));
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
    
    // User menu
    document.querySelector('.user-menu').addEventListener('click', () => {
        showMessage('User menu coming soon!', 'info');
    });
}

// Initialize navigation
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
            // Already on library page
            break;
        case 'laniBtn':
            showMessage('Lani AI assistant coming soon!', 'info');
            break;
        case 'spaceBtn':
            window.location.href = 'dashboard.html';
            break;
        case 'supportBtn':
            showMessage('Support center coming soon!', 'info');
            break;
        case 'adminBtn':
            showMessage('Admin panel coming soon!', 'info');
            break;
    }
}

// Initialize modal functionality
function initializeModal() {
    const modal = document.getElementById('storyModal');
    const closeBtn = document.getElementById('closeModal');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Chat functionality
    setupChatFunctionality();
}

// Open story modal
function openStoryModal(story) {
    const modal = document.getElementById('storyModal');
    const modalTitle = document.getElementById('modalTitle');
    const storyAuthor = document.getElementById('storyAuthor');
    const storySummary = document.getElementById('storySummary');
    
    // Set story data
    modalTitle.textContent = story.title;
    storyAuthor.textContent = `by ${story.author}`;
    storySummary.textContent = story.summary;
    
    // Store story data for other tabs
    modal.dataset.currentStory = JSON.stringify(story);
    
    // Reset to summary tab
    switchTab('summary');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('storyModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Switch between tabs
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}Tab`).classList.add('active');
    
    // Load content based on tab
    if (tabName === 'story') {
        loadFullStory();
    } else if (tabName === 'chat') {
        initializeChat();
    }
}

// Load full story content
function loadFullStory() {
    const modal = document.getElementById('storyModal');
    const story = JSON.parse(modal.dataset.currentStory);
    const storyContent = document.getElementById('storyContent');
    
    // Show loading spinner
    storyContent.innerHTML = `
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading story...</p>
        </div>
    `;
    
    // Simulate loading delay
    setTimeout(() => {
        storyContent.innerHTML = `<div class="story-text">${story.fullStory.replace(/\n\n/g, '</p><p>')}</div>`;
    }, 1500);
}

// Initialize chat functionality
function initializeChat() {
    const modal = document.getElementById('storyModal');
    const story = JSON.parse(modal.dataset.currentStory);
    const chatMessages = document.getElementById('chatMessages');
    
    // Clear previous chat if any
    chatMessages.innerHTML = `
        <div class="chat-message ai-message">
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>Hello! I'm here to discuss "${story.title}" with you. What would you like to know about the story?</p>
            </div>
        </div>
    `;
}

// Setup chat functionality
function setupChatFunctionality() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    
    sendBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

// Send chat message
function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        addChatMessage(aiResponse, 'ai');
    }, 1000);
}

// Add chat message to conversation
function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const avatar = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            ${avatar}
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate AI response (simulated)
function generateAIResponse(userMessage) {
    const modal = document.getElementById('storyModal');
    const story = JSON.parse(modal.dataset.currentStory);
    
    const responses = {
        'theme': `The main themes in "${story.title}" include technology's impact on humanity, the nature of consciousness, and ethical dilemmas in scientific advancement.`,
        'character': `The protagonist in "${story.title}" faces complex moral choices that reflect our own struggles with technology and identity.`,
        'ending': `The ending of "${story.title}" leaves us questioning the nature of progress and what it means to be human in an increasingly digital world.`,
        'meaning': `"${story.title}" explores deep philosophical questions about consciousness, identity, and our relationship with technology.`,
        'author': `${story.author} crafts a compelling narrative that blends science fiction with profound human emotions and ethical dilemmas.`
    };
    
    // Simple keyword matching for demo
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('theme') || lowerMessage.includes('about')) {
        return responses.theme;
    } else if (lowerMessage.includes('character') || lowerMessage.includes('protagonist')) {
        return responses.character;
    } else if (lowerMessage.includes('ending') || lowerMessage.includes('end')) {
        return responses.ending;
    } else if (lowerMessage.includes('meaning') || lowerMessage.includes('message')) {
        return responses.meaning;
    } else if (lowerMessage.includes('author') || lowerMessage.includes('writer')) {
        return responses.author;
    } else {
        return `That's an interesting question about "${story.title}". The story explores themes of technology, consciousness, and human nature. What specific aspect would you like to discuss further?`;
    }
}

// Show message to user
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.library-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `library-message ${type}`;
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
        zIndex: '1001',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        animation: 'slideDown 0.3s ease-out'
    });

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

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        storiesData,
        createStoryCard,
        openStoryModal,
        switchTab,
        generateAIResponse
    };
}