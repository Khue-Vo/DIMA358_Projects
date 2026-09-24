// navigation.js

/**
 * Initializes the Home navigate button.
 * Redirects the user to the home page when clicked.
 * 
 * @returns {void}
 */
export function initHomeButton() {
    const homeBtn = document.getElementById("home");
    if (!homeBtn) return;

    homeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

/**
* Initializes the Instruction navigate button.
* Redirects the user to the instruction page when clicked.
*
* @returns {void}
*/
export function initEx1Button() {
    const exerciseBtn = document.getElementById("technical-exercises");
    if (!exerciseBtn) return;

    exerciseBtn.addEventListener("click", () => {
        window.location.href = "../ex1.html";
    });
}

/**
* Initializes the Instruction navigate button.
* Redirects the user to the instruction page when clicked.
*
* @returns {void}
*/
export function initEx2Button() {
    const exerciseBtn = document.getElementById("technical-exercises");
    if (!exerciseBtn) return;

    exerciseBtn.addEventListener("click", () => {
        window.location.href = "technical-exercises.html";
    });
}
/**
* Initializes the Instruction navigate button.
* Redirects the user to the instruction page when clicked.
*
* @returns {void}
*/
export function initEx3Button() {
    const exerciseBtn = document.getElementById("technical-exercises");
    if (!exerciseBtn) return;

    exerciseBtn.addEventListener("click", () => {
        window.location.href = "technical-exercises.html";
    });
}
/**
* Initializes the Instruction navigate button.
* Redirects the user to the instruction page when clicked.
*
* @returns {void}
*/
export function initEx4Button() {
    const exerciseBtn = document.getElementById("technical-exercises");
    if (!exerciseBtn) return;

    exerciseBtn.addEventListener("click", () => {
        window.location.href = "technical-exercises.html";
    });
}

/**
* Initializes the Instruction navigate button.
* Redirects the user to the instruction page when clicked.
*
* @returns {void}
*/
export function initExerciseButton() {
    const exerciseBtn = document.getElementById("technical-exercises");
    if (!exerciseBtn) return;

    exerciseBtn.addEventListener("click", () => {
        window.location.href = "technical-exercises.html";
    });
}


/**
 * Initializes the Join navigate button.
 * Redirects the user to the player page when clicked.
 * 
 * @returns {void}
 */
export function initPortfolioButton() {
    const portfolioBtn = document.getElementById("portfolio");
    if (!portfolioBtn) return;

    portfolioBtn.addEventListener("click", () => {
        window.location.href = "portfolio.html";
    });
}

/**
 * Initializes the Leaderboard navigate button.
 * Redirects the user to the leaderboard page when clicked.
 * 
 * @returns {void}
 */
export function initWebAppButton() {
    const webAppBtn = document.getElementById("web-app");
    if (!webAppBtn) return;

    webAppBtn.addEventListener("click", () => {
        window.location.href = "web-app.html";
    });
}

/**
 * Initializes keyboard navigation for the application.
 * Defines the following shortcuts:
 * - Escape: Navigate to the home page (index.html)
 * - I: Navigate to the instruction page (instruction.html)
 * - L: Navigate to the leaderboard page (leaderboard.html)
 * - Enter: Navigate to the player page (player.html)
 * 
 * @returns {void}
 */
export function initKeyboardNavigation() {
    window.addEventListener("keydown", event => {
        switch (event.key.toLowerCase()) {
            case "escape":
                window.location.href = "index.html";
                break;

            case "i":
                window.location.href = "instruction.html";
                break;

            case "l":
                window.location.href = "leaderboard.html";
                break;

            case "enter":
                window.location.href = "player.html";
                break;
        }
    });
}

/**
 * Initializes all navigation buttons and keyboard shortcuts for the 
 * application.
 * This function should be called once when the application loads to set 
 * up navigation.
 * 
 * @returns {void}
 */
export function initNavigation() {
    initHomeButton();
    initInstructionButton();
    initJoinButton();
    initLeaderboardButton();
    initKeyboardNavigation();
}