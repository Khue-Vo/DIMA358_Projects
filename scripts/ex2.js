// ex2.js

import { initHomeButton,    

    initExerciseButton,

    initEx1Button,

    initEx3Button,

    initPortfolioButton,

    initWebAppButton,

    initKeyboardNavigation } from "./nav.js";



// Initialize navigation

initHomeButton();

initExerciseButton();

initEx1Button();

initEx3Button();

initPortfolioButton();

initWebAppButton();

initKeyboardNavigation();

const IMAGE_BASE = '../images/'; // Base path for images from the txt files

document.addEventListener("DOMContentLoaded", () => {
    loadAllSections();
});

async function loadAllSections() {
    // Define sections: matching the file path to the target HTML element ID
    const sections = [
        { id: 'personal-story-container', file: '../docs/intro-personal-story.txt' },
        { id: 'origin-design-container', file: '../docs/body1-origin-design.txt' },
        { id: 'evolution-container', file: '../docs/body2-evolution.txt' },
        { id: 'pros-cons-container', file: '../docs/body3-pros-cons.txt' }
    ];

    // Fetch all files
    const promises = sections.map(async (section) => {
        const container = document.getElementById(section.id);
        if (!container) return; // Skip if element doesn't exist on page

        try {
            const response = await fetch(section.file);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const text = await response.text();
            renderContent(text, container);

        } catch (error) {
            console.error(`Failed to load ${section.file}:`, error);
            container.innerHTML = `<p style="color: #d9534f; font-size: 0.9rem; font-weight:bold">Could not load file.</p>`;
        }
    });

    await Promise.all(promises);
}

// Render the content into the container, sanitizing it first
function renderContent(rawText, container) {
    container.innerHTML = sanitizeHTML(rawText.trim());
 
    // Hide a figure if its image file is missing, so no broken-image icon shows
    container.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            const figure = img.closest('figure');
            if (figure) figure.classList.add('image-missing');
            else img.style.display = 'none';
        });
    });
}

// Sanitize HTML to prevent XSS and other security issues
function sanitizeHTML(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
 
    // Remove elements that can run code or load outside content
    doc.querySelectorAll('script, iframe, object, embed, style, link').forEach(el => el.remove());
 
    // Remove inline event handlers (onclick, onerror, ...) and javascript: links
    doc.body.querySelectorAll('*').forEach(el => {
        [...el.attributes].forEach(attr => {
            const name = attr.name.toLowerCase();
            const value = attr.value.trim().toLowerCase();
            const isScriptUrl = (name === 'href' || name === 'src') && value.startsWith('javascript:');
            if (name.startsWith('on') || isScriptUrl) el.removeAttribute(attr.name);
        });
    });
 
    // Point "images/..." paths at the real images folder and load them
    doc.body.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src') || '';
        if (src.startsWith('images/')) {
            img.setAttribute('src', IMAGE_BASE + src.slice('images/'.length));
        }
        img.setAttribute('loading', 'lazy');
    });
 
    return doc.body.innerHTML;
}
