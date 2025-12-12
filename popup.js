const checkboxes = [
    "related-questions-input",
    "more-related-questions-input",
    "left-sidebar-input",
    "right-sidebar-input",
    "top-bar-input",
    "question-header-input",
    "content-border-input",
    "post-form-input",
    "bottom-notice-input",
    "footer-input",
    "consent-banner-input",
    "dismissable-hero-input",
    "js-bottom-notice-input"
]

function hideAllButtonClicked() {
    for (let i = 0; i < checkboxes.length; i++) {
        const elem = document.getElementById(checkboxes[i]);
        if (elem.checked) {
            elem.checked = false;
        }
    }
    saveAllValues();
}

function showAllButtonClicked() {
    for (let i = 0; i < checkboxes.length; i++) {
        const elem = document.getElementById(checkboxes[i]);
        if (!elem.checked) {
            elem.checked = true;
        }
    }
    saveAllValues();
}

function saveAllValues() {
    // I'll just use the checkbox IDs for storage keys too becuase why not
    for (let i = 0; i < checkboxes.length; i++) {
        const key = checkboxes[i];
        const elem = document.getElementById(key);
        const value = elem.checked ? "1" : "0";
        console.log({[key]: value});
        chrome.storage.local.set({[key]: value});
    }
}

async function getAndDisplaySavedValues() {
    return new Promise((resolve, reject)=>{
        try {
            chrome.storage.local.get(
                checkboxes,
                function(values) {
                    for (const key in values) {
                        if (checkboxes.includes(key)) {
                            const value = values[key];
                            const elem = document.getElementById(key);
                            if (value == "1") {
                                elem.checked = true;
                            } else {
                                elem.checked = false;
                            }
                        } else {
                            console.log("Error: key not found: " + key);
                        }
                    }
                });
        } catch(exc) {
            console.log(exc);
        }
    });
}

window.onload = () => {
    document.getElementById("hide-all-button").addEventListener("click", () => {
        hideAllButtonClicked();
    });

    document.getElementById("show-all-button").addEventListener("click", () => {
        showAllButtonClicked();
    });

    for (let i = 0; i < checkboxes.length; i++) {
        const key = checkboxes[i];
        const elem = document.getElementById(key);
        elem.addEventListener("change", () => {
            saveAllValues();
        });
    }

    getAndDisplaySavedValues();
}