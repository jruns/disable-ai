// Disable Brave Search AI features
function disableBraveAI() {
    // Hide Leo AI assistant
    const leoElements = document.querySelectorAll('[data-testid*="leo"], [class*="leo"], [id*="leo"], .leo-container, .ai-assistant');
    leoElements.forEach(element => {
        element.style.display = 'none !important';
    });

    // Hide AI-powered answer boxes and summaries
    const aiAnswerBoxes = document.querySelectorAll('.answer-box, [class*="ai-answer"], [data-testid*="ai-answer"], .summarizer, [class*="summary"]');
    aiAnswerBoxes.forEach(element => {
        element.style.display = 'none !important';
    });

    // Hide AI chat buttons and entry points
    const aiButtons = document.querySelectorAll('button[aria-label*="AI"], button[aria-label*="Leo"], a[href*="leo"], .ai-chat-button');
    aiButtons.forEach(button => {
        button.style.display = 'none !important';
    });

    // Hide AI-generated content indicators
    const aiIndicators = document.querySelectorAll('[class*="ai-generated"], [data-testid*="ai-generated"], .generated-content');
    aiIndicators.forEach(element => {
        element.style.display = 'none !important';
    });

    // Disable autocomplete suggestions
    const autocompleteContainer = document.querySelector('.autocomplete, .suggestions, [class*="suggest"]');
    if (autocompleteContainer) {
        autocompleteContainer.style.display = 'none !important';
    }

    // Hide any elements containing AI-related text
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.children.length === 0 && element.textContent) {
            const text = element.textContent.toLowerCase();
            if ((text.includes('ai') || text.includes('leo') || text.includes('assistant')) && 
                (text.includes('answer') || text.includes('chat') || text.includes('help'))) {
                element.style.display = 'none !important';
            }
        }
    });
}

// Run immediately and on DOM changes
disableBraveAI();

// Observer for dynamically loaded content
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
            disableBraveAI();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Also run on page load
document.addEventListener('DOMContentLoaded', disableBraveAI);
window.addEventListener('load', disableBraveAI); 