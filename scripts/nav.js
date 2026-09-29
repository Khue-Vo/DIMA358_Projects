// nav.js

/**
 * Helper function that returns the relative path to any target file 

 * from the current page's depth.

 * 

 * @param {string} targetPath - Relative path from the project root (e.g., "index.html" or "exercise1/ex1.html")

 * @returns {string} The adjusted relative path (e.g., "./index.html" or "../index.html")

 */

function getRelativePath(targetPath) {

    // Get current path segments
    const segments = window.location.pathname.split("/").filter(Boolean);


    // Find index of the root folder
    const rootIndex = segments.indexOf("vo005642");

    
    // Identify current file location in relation to the root folder
    // If the last segment is a file (ends with .html), ignore it

    const isFile = segments[segments.length - 1].includes(".");
    const dirSegments = isFile ? segments.slice(0, -1) : segments;
    
    
    // Calculate depth from the root folder
    const depth = rootIndex !== -1 ? (dirSegments.length - 1 - rootIndex) : 0;

    
    // 3. Prefix with "../" for each subfolder depth, or "./" if at root
    return depth > 0 ? "../".repeat(depth) + targetPath : "./" + targetPath;}

/**

 * Initializes the Home navigate button.

 * Redirects the user to the home page when clicked.

 * 

 * @returns {void}

 */

export function initHomeButton() {

    const homeBtn = document.getElementById("home-btn");

    if (!homeBtn) return;



    homeBtn.addEventListener("click", () => {

        window.location.href = getRelativePath("index.html");

    });

}



/**

* Initializes the Exercise 1 navigate button.

* Redirects the user to the Exercise 1 page when clicked.

*

* @returns {void}

*/

export function initEx1Button() {

    const exerciseBtn = document.getElementById("ex1-btn");

    if (!exerciseBtn) return;



    exerciseBtn.addEventListener("click", () => {

        window.location.href = getRelativePath("exercise1/ex1.html");

    });

}



/**

* Initializes the Exercise 2 navigate button.

* Redirects the user to the Exercise 2 page when clicked.

*

* @returns {void}

*/

export function initEx2Button() {

    const exerciseBtn = document.getElementById("ex2-btn");

    if (!exerciseBtn) return;



    exerciseBtn.addEventListener("click", () => {

        window.location.href = getRelativePath("exercise2/ex2.html");

    });

}

/**

* Initializes the Exercise 3 navigate button.

* Redirects the user to the Exercise 3 page when clicked.

*

* @returns {void}

*/

export function initEx3Button() {

    const exerciseBtn = document.getElementById("ex3-btn");

    if (!exerciseBtn) return;



    exerciseBtn.addEventListener("click", () => {

        window.location.href = getRelativePath("exercise3/ex3.html");

    });

}



/**

* Initializes the Technical Exercises navigate button.

* Redirects the user to the technical exercises page when clicked.

*

* @returns {void}

*/

export function initExerciseButton() {

    const exerciseBtn = document.getElementById("technical-exercises-btn");

    if (!exerciseBtn) return;



    exerciseBtn.addEventListener("click", () => {

        window.location.href = getRelativePath("technical-exercises.html");

    });

}





/**

 * Initializes the Portfolio navigate button.

 * Redirects the user to the portfolio page when clicked.

 * 

 * @returns {void}

 */

export function initPortfolioButton() {

    const portfolioBtn = document.getElementById("portfolio-btn");

    if (!portfolioBtn) return;



    portfolioBtn.addEventListener("click", () => {

        window.location.href = getRelativePath("portfolio.html");

    });

}



/**

 * Initializes the Web App navigate button.

 * Redirects the user to the web app page when clicked.

 * 

 * @returns {void}

 */

export function initWebAppButton() {

    const webAppBtn = document.getElementById("web-app-btn");

    if (!webAppBtn) return;



    webAppBtn.addEventListener("click", () => {

        window.location.href = getRelativePath("web-app.html");

    });

}



/**

 * Initializes keyboard navigation for the application.

 * Defines the following shortcuts:

 * - Escape: Navigate to the home page (index.html)

 * - E: Navigate to the technical exercises page (technical-exercises.html)

 * - P: Navigate to the portfolio page (portfolio.html)

 * - W: Navigate to the web app page (web-app.html)

 * 

 * @returns {void}

 */

export function initKeyboardNavigation() {

    window.addEventListener("keydown", event => {

        switch (event.key.toLowerCase()) {

            case "escape":

                window.location.href = getRelativePath("index.html");

                break;



            case "e":

                window.location.href = getRelativePath("technical-exercises.html");

                break;



            case "p":

                window.location.href = getRelativePath("portfolio.html");

                break;



            case "w":

                window.location.href = getRelativePath("web-app.html");

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

    initExerciseButton();

    initEx1Button();

    initEx2Button();

    initEx3Button();

    initPortfolioButton();

    initWebAppButton();

    initKeyboardNavigation();

}