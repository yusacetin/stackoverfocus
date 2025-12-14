const keys = [
    "related-questions-input",
    "more-related-questions-input",
    "left-sidebar-input",
    "right-sidebar-input",
    "subcommunity-input",
    "blog-input",
    //"community-input",
    "hot-input",
    "feed-input",
    "top-bar-input",
    "question-header-input",
    "content-border-input",
    "post-form-input",
    //"bottom-notice-input",
    "footer-input",
    "consent-banner-input",
    "dismissable-hero-input",
    "js-bottom-notice-input"
]

function hideRelatedQuestions(hide = true) {
    try {
        var related_questions = document.getElementById("inline_related_var_a_less");
        if (hide) {
            related_questions.style.display = 'none';
        } else {
            related_questions.style.display = '';
        }
    } catch (err) {
        console.log("Unable to hide: inline_related_var_a_less");
    }

    try {
        const related_questions_sidebar = document.getElementsByClassName("module sidebar-related");
        console.log("rel len: " + related_questions_sidebar.length);
        for (let i = 0; i < related_questions_sidebar.length; i++) {
            const elem = related_questions_sidebar[i];
            console.log(elem);
            if (hide) {
                elem.style.display = "none";
            } else {
                elem.style.display = "";
            }
        }
    } catch (err) {
        console.log("Unable to hide: sidebar-related");
    }
}

function hideMoreRelatedQuestions(hide = true) {
    try {
        var more_related_questions = document.getElementById("inline_related_see_more");
        if (hide) {
            more_related_questions.style.display = 'none';
        } else {
            more_related_questions.style.display = '';
        }
    } catch (err) {
        console.log("Unable to hide: inline_related_see_more");
    }
}

function hideLeftSidebar(hide = true) {
    try {
        var left_sidebar_elements = document.getElementsByClassName('left-sidebar');
        for (let i=0; i<left_sidebar_elements.length; i++){
            if (hide) {
                left_sidebar_elements[i].style.display = 'none';
            } else {
                left_sidebar_elements[i].style.display = '';
            }
        }
    } catch (err) {
        console.log("Unable to hide: left-sidebar");
    }
}

function hideRightSidebar(hide = true) {
    try {
        var sidebar_elements = document.getElementById('sidebar');
        if (hide) {
            sidebar_elements.style.display = 'none';
        } else {
            sidebar_elements.style.display = '';
        }
    } catch (err) {
        console.log("Unable to hide: sidebar");
    }
}

function hideSubcommunity(hide = true) {
    try {
        var sidebar_elements = document.getElementById('sidebar');
        const subcommunity_elems = sidebar_elements.getElementsByClassName("sidebar-subcommunity mb16");
        for (let i = 0; i < subcommunity_elems.length; i++) {
            const elem = subcommunity_elems[i];
            if (hide) {
                elem.style.display = 'none';
            } else {
                elem.style.display = '';
            }
        }
    } catch (err) {
        console.log("Unable to hide: sidebar");
    }
}

function hideBlog(hide = true) {
    try {
        var sidebar_elements = document.getElementById('sidebar');
        const blog_elems = sidebar_elements.getElementsByClassName("s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16");
        for (let i = 0; i < blog_elems.length; i++) {
            const elem = blog_elems[i];
            if (hide) {
                elem.style.display = 'none';
            } else {
                elem.style.display = '';
            }
        }
    } catch (err) {
        console.log("Unable to hide: sidebar");
    }
}

function hideCommunity(hide = true) {
    try {
        const elem = document.getElementById("fragment-container-580-215-wrapper");
        if (hide) {
            elem.style.display = 'none';
        } else {
            elem.style.display = '';
        }
    } catch (err) {
        console.log("Unable to hide: sidebar");
    }
}

function hideHot(hide = true) {
    try {
        const elem = document.getElementById("hot-network-questions");
        if (hide) {
            elem.style.display = "none";
        } else {
            elem.style.display = "";
        }
    } catch (err) {
        console.log("Unable to hide: hot-network-questions")
    }
}

function hideFeed(hide = true) {
    try {
        const elem = document.getElementById("feed-link");
        if (hide) {
            elem.style.display = "none";
        } else {
            elem.style.display = "";
        }
    } catch (err) {
        console.log("Unable to hide: feed-link")
    }
}

function hideTopBar(hide = true) {
    try {
        var topbar = document.getElementsByClassName("s-topbar");
        for (let i=0; i<topbar.length; i++) {
            if (hide) {
                topbar[i].style.display = 'none';
            } else {
                topbar[i].style.display = '';
            }
        }
    } catch (err) {
        console.log("Unable to hide: s-topbar");
    }
}

function hideQuestionHeader(hide = true) {
    try {
        var question_header = document.getElementById("question-header");
        var ask_button = question_header.getElementsByClassName("ml12 aside-cta flex--item sm:ml0 sm:mb12 sm:order-first d-flex jc-end")[0];
        if (hide) {
            ask_button.style.setProperty("display", "none", "important");
        } else {
            ask_button.style.setProperty("display", "", "important");
        }
    } catch (err) {
        console.log("Unable to hide: question-header div");
    }
}

function hideContentBorder(hide = true) {
    try {
        var content = document.getElementById("content");
        if (hide) {
            content.style.border = 'none';
        } else {
            content.style.border = '';
        }
    } catch (err) {
        console.log("Unable to hide border: content");
    }
}

function hidePostForm(hide = true) {
    try {
        var post_form = document.getElementById("post-form");
        if (hide) {
            post_form.style.display = 'none';
        } else {
            post_form.style.display = '';
        }
        
    } catch (err) {
        console.log("Unable to hide: post-form");
    }
}

/*
// They apparently removed this from the website
function hideBottomNotice(hide = true) {
    try {
        var bottom_notice = document.getElementsByClassName("bottom-notice");
        for (let i=0; i<bottom_notice.length; i++) {
            if (hide) {
                bottom_notice[i].style.display = 'none';
            } else {
                bottom_notice[i].style.display = '';
            }
        }
    } catch (err) {
        console.log("Unable to hide: bottom-notice");
    }
}
*/

function hideFooter(hide = true) {
    try {
        var footer = document.getElementById("footer");
        var notify_container = document.getElementById("notify-container");
        var custom_header = document.getElementById("custom-header");
        
        if (hide) {
            footer.style.display = 'none';
            notify_container.style.display = 'none';
            custom_header.style.display = 'none';
        } else {
            footer.style.display = '';
            notify_container.style.display = '';
            custom_header.style.display = '';
        }
    } catch (err) {
        console.log("Unable to hide: Footers");
    }
}

function hideJSConsentBanner(hide = true) {
    try {
        var js_consent_banners = document.getElementsByClassName("js-consent-banner");
        for (let i=0; i<js_consent_banners.length; i++) {
            if (hide) {
                js_consent_banners[i].style.display = 'none';
            } else {
                js_consent_banners[i].style.display = '';
            }
        }
    } catch (err) {
        console.log("Unable to hide: js-consent-banner");
    }
}

// Weird name choice
function hideJSDismissableHero(hide = true) {
    try {
        var js_dismissable_heros = document.getElementsByClassName("js-dismissable-hero");
        for (let i=0; i<js_dismissable_heros.length; i++) {
            if (hide) {
                js_dismissable_heros[i].style.display = 'none';
            } else {
                js_dismissable_heros[i].style.display = '';
            }
        }
    } catch (err) {
        console.log("Unable to hide: js-dismissable-hero");
    }
}

function hideJSBottomNotice(hide = true) {
    try {
        const js_bottom_notices = document.getElementsByClassName("js-bottom-notice");
        for (let i = 0; i<js_bottom_notices.length; i++) {
            if (hide) {
                js_bottom_notices[i].style.setProperty("display", "none", "important"); // simply doing style.display = "none" does not work
            } else {
                js_bottom_notices[i].style.setProperty("display", "", "important");
            }
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
                    "subcommunity-input",
                    "blog-input",
                    "community-input",
                    "hot-input",
                    "feed-input",
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

                    hideRelatedQuestions(values["related-questions-input"] != "1"); // use != "1" because if the value is not saved previously it might default to "undefined", in which case we also want to hide
                    hideMoreRelatedQuestions(values["more-related-questions-input"] != "1");
                    hideLeftSidebar(values["left-sidebar-input"] != "1");
                    hideRightSidebar(values["right-sidebar-input"] != "1");
                    hideSubcommunity(values["subcommunity-input"] != "1");
                    hideBlog(values["blog-input"] != "1");
                    //hideCommunity(values["community-input"] != "1");
                    hideHot(values["hot-input"] != "1");
                    hideFeed(values["feed-input"] != "1");
                    hideTopBar(values["top-bar-input"] != "1");
                    hideQuestionHeader(values["question-header-input"] != "1");
                    hideContentBorder(values["content-border-input"] != "1");
                    hidePostForm(values["post-form-input"] != "1");
                    //hideBottomNotice(values["bottom-notice-input"] != "1");
                    hideFooter(values["footer-input"] != "1");
                    hideJSConsentBanner(values["consent-banner-input"] != "1");
                    hideJSDismissableHero(values["dismissable-hero-input"] != "1");
                    hideJSBottomNotice(values["js-bottom-notice-input"] != "1");

                    // Make page visible again (it loads as invisible through content_style.css)
                    var page = document.getElementsByTagName('html')[0];
                    page.style.visibility = 'visible';
                    console.log("StackOverfocus finished");
                });
        } catch(exc) {
            console.log(exc);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    run();

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "refresh") {
            run();
        }
    });
});