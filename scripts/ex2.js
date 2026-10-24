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

initKeyboardNavigation()

// fetch('../docs/personal_story.txt')
// .then(response => {
//     if (!response.ok) {
//         throw new Error('File not found');
//     }
//     return response.text();
// })
// .then(data => {
//     document.getElementById('personal-story').textContent = data;
// })
// .catch(error => {
//     document.getElementById('personal-story').textContent = 'Error loading file: ' + error.message;
// });