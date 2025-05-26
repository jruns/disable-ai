// Disable Bing Copilot and AI features
function disableBingAI() {
    // Hide Copilot chat interface
    const copilotElements = document.querySelectorAll('[data-testid*="copilot"], [class*="copilot"], [id*="copilot"], .b_sydConvCont, .cib-serp-main, .b_sydBg');
    copilotElements.forEach(element => {
        element.style.display = 'none !important';
    });

    // Hide AI-powered answer boxes
    const aiAnswerBoxes = document.querySelectorAll('.b_ans, .b_algo[data-bm*="ai"], [class*="ai-answer"], [data-testid*="ai-answer"]');
    aiAnswerBoxes.forEach(element => {
        element.style.display = 'none !important';
    });

    // Hide "Chat" button and Copilot entry points
    const chatButtons = document.querySelectorAll('a[href*="copilot"], button[aria-label*="Chat"], button[aria-label*="Copilot"], .b_searchboxForm .b_searchboxSubmit[title*="Chat"]');
    chatButtons.forEach(button => {
        button.style.display = 'none !important';
    });

    // Hide AI-generated summaries and insights
    const aiSummaries = document.querySelectorAll('[class*="summary"], [class*="insight"], [data-testid*="summary"], [data-testid*="insight"]');
    aiSummaries.forEach(element => {
        if (element.textContent.toLowerCase().includes('ai') || 
            element.textContent.toLowerCase().includes('copilot') ||
            element.textContent.toLowerCase().includes('generated')) {
            element.style.display = 'none !important';
        }
    });

    // Disable autocomplete dropdown styling
    const autocompleteContainer = document.querySelector('.b_searchboxForm .as_ul, .sa_sg');
    if (autocompleteContainer) {
        autocompleteContainer.style.display = 'none !important';
    }
}

// Run immediately and on DOM changes
disableBingAI();

// Observer for dynamically loaded content
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
            disableBingAI();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Also run on page load
document.addEventListener('DOMContentLoaded', disableBingAI);
window.addEventListener('load', disableBingAI); 