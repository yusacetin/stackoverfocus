const keys = [
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

function hideRelatedQuestions() {
    try {
        var related_questions = document.getElementById("inline_related_var_a_less");
        related_questions.style.display = 'none';
    } catch (err) {
        console.log("Unable to hide: inline_related_var_a_less");
    }
}

function hideMoreRelatedQuestions() {
    try {
        var more_related_questions = document.getElementById("inline_related_see_more");
        more_related_questions.style.display = 'none';
    } catch (err) {
        console.log("Unable to hide: inline_related_see_more");
    }
}

function hideLeftSidebar() {
    try {
        var left_sidebar_elements = document.getElementsByClassName('left-sidebar');
        for (let i=0; i<left_sidebar_elements.length; i++){
            left_sidebar_elements[i].style.display = 'none';
        }
    } catch (err) {
        console.log("Unable to hide: left-sidebar");
    }
}

function hideRightSidebar() {
    try {
        var sidebar_elements = document.getElementById('sidebar');
        sidebar_elements.style.display = 'none';
    } catch (err) {
        console.log("Unable to hide: sidebar");
    }
}

function hideTopBar() {
    try {
        var topbar = document.getElementsByClassName("s-topbar");
        for (let i=0; i<topbar.length; i++) {
            topbar[i].style.display = 'none';
        }
    } catch (err) {
        console.log("Unable to hide: s-topbar");
    }
}

function hideQuestionHeader() {
    try {
        var question_header = document.getElementById("question-header");
        var ask_button = question_header.getElementsByTagName("div")[0];
        ask_button.style.display = 'none';
    } catch (err) {
        console.log("Unable to hide: question-header div");
    }
}

function hideContentBorder() {
    try {
        var content = document.getElementById("content");
        content.style.border = 'none';
    } catch (err) {
        console.log("Unable to hide border: content");
    }
}

function hidePostForm() {
    try {
        var post_form = document.getElementById("post-form");
        post_form.style.display = 'none';
    } catch (err) {
        console.log("Unable to hide: post-form");
    }
}

function hideBottomNotice() {
    try {
        var bottom_notice = document.getElementsByClassName("bottom-notice");
        for (let i=0; i<bottom_notice.length; i++) {
            bottom_notice[i].style.display = 'none';
        }
    } catch (err) {
        console.log("Unable to hide: bottom-notice");
    }
}

function hideFooter() {
    try{
        var footer = document.getElementById("footer");
        footer.style.display = 'none';
        var notify_container = document.getElementById("notify-container");
        notify_container.style.display = 'none';
        var custom_header = document.getElementById("custom-header");
        custom_header.style.display = 'none';
    } catch (err) {
        console.log("Unable to hide: Footers");
    }
}

function hideJSConsentBanner() {
    try {
        var js_consent_banners = document.getElementsByClassName("js-consent-banner");
        for (let i=0; i<js_consent_banners.length; i++) {
            js_consent_banners[i].style.display = 'none';
        }
    } catch (err) {
        console.log("Unable to hide: js-consent-banner");
    }
}

// Weird name choice
function hideJSDismissableHero() {
    try {
        var js_dismissable_heros = document.getElementsByClassName("js-dismissable-hero");
        for (let i=0; i<js_dismissable_heros.length; i++) {
            js_dismissable_heros[i].style.display = 'none';
        }
    } catch (err) {
        console.log("Unable to hide: js-dismissable-hero");
    }
}

function hideJSBottomNotice() {
    try {
        const js_bottom_notices = document.getElementsByClassName("js-bottom-notice");
        for (let i = 0; i<js_bottom_notices.length; i++) {
            js_bottom_notices[i].style.setProperty("display", "none", "important"); // simply doing style.display = "none" does not work
        }
    } catch (err) {
        console.log("Unable to hide: js-bottom-notice");
    }
}

// Reference: https://stackoverflow.com/a/57551361
async function run() {
    console.log("Running StackOverfocus");
    return new Promise((resolve, reject) => {
        try{
            chrome.storage.local.get(
                keys,
                function(values) {
                    /*
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
                    */

                    if (values["related-questions-input"] != "1") { // use != "1" because if the value is not saved previously it might default to "undefined", in which case we also want to hide
                        hideRelatedQuestions();
                    }

                    if (values["more-related-questions-input"] != "1") {
                        hideMoreRelatedQuestions();
                    }

                    if (values["left-sidebar-input"] != "1") {
                        hideLeftSidebar();
                    }

                    if (values["right-sidebar-input"] != "1") {
                        hideRightSidebar();
                    }

                    if (values["top-bar-input"] != "1") {
                        hideTopBar();
                    }

                    if (values["question-header-input"] != "1") {
                        hideQuestionHeader();
                    }

                    if (values["content-border-input"] != "1") {
                        hideContentBorder();
                    }

                    if (values["post-form-input"] != "1") {
                        hidePostForm();
                    }

                    if (values["bottom-notice-input"] != "1") {
                        hideBottomNotice();
                    }

                    if (values["footer-input"] != "1") {
                        hideFooter();
                    }

                    if (values["consent-banner-input"] != "1") {
                        hideJSConsentBanner();
                    }

                    if (values["dismissable-hero-input"] != "1") {
                        hideJSDismissableHero();
                    }

                    if (values["js-bottom-notice-input"] != "1") {
                        hideJSBottomNotice();
                    }

                    // Make page visible again (it loads as invisible through content_style.css)
                    var page = document.getElementsByTagName('html')[0];
                    page.style.visibility = 'visible';
                    console.log("StackOverfocus finished");
                });
        } catch(exc) {
            console.log(exc);
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    run();
});