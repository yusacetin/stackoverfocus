
document.addEventListener('DOMContentLoaded', function() {
    console.log("Running StackOverfocus");
    // Left sidebar
    try{
        var left_sidebar_elements = document.getElementsByClassName('left-sidebar');
        for (let i=0; i<left_sidebar_elements.length; i++){left_sidebar_elements[i].style.display = 'none';}
    }catch(err){console.log("Unable to hide: left-sidebar")}
    // Right sidebar
    try{
        var sidebar_elements = document.getElementById('sidebar');
        sidebar_elements.style.display = 'none';
    }catch(err){console.log("Unable to hide: sidebar")}
    // Top bar
    try{
        var topbar = document.getElementsByClassName("s-topbar");
        for (let i=0; i<topbar.length; i++){
            topbar[i].style.display = 'none';
        }
    }catch(err){console.log("Unable to hide: s-topbar")}
    // Question Header
    try{
        var question_header = document.getElementById("question-header");
        var ask_button = question_header.getElementsByTagName("div")[0];
        ask_button.style.display = 'none';
    }catch(err){console.log("Unable to hide: question-header div")}
    // Content border
    try{
        var content = document.getElementById("content");
        content.style.border = 'none';
    }catch(err){console.log("Unable to hide border: content")}
    // Post form
    try{
        var post_form = document.getElementById("post-form");
        post_form.style.display = 'none';
    }catch(err){console.log("Unable to hide: post-form")}
    // Bottom notice
    try{
        var bottom_notice = document.getElementsByClassName("bottom-notice");
        for (let i=0; i<bottom_notice.length; i++){
            bottom_notice[i].style.display = 'none';
        }
    }catch(err){console.log("Unable to hide: bottom-notice"); console.log(err)}
    // Related questions
    try{
        var related_questions = document.getElementById("inline_related_var_a_less");
        related_questions.style.display = 'none';
    }catch(err){console.log("Unable to hide: inline_related_var_a_less")}
    // More related questions
    try {
        var more_related_questions = document.getElementById("inline_related_see_more");
        more_related_questions.style.display = 'none';
    }catch(err){console.log("Unable to hide: mainbar")}
    // Footer
    try{
        var footer = document.getElementById("footer");
        footer.style.display = 'none';
        var notify_container = document.getElementById("notify-container");
        notify_container.style.display = 'none';
        var custom_header = document.getElementById("custom-header");
        custom_header.style.display = 'none';
    }catch(err){console.log("Unable to hide: Footers")}
    // JS consent banner
    try{
        var js_consent_banners = document.getElementsByClassName("js-consent-banner");
        for (let i=0; i<js_consent_banners.length; i++){
            js_consent_banners[i].style.display = 'none';
        }
    }catch(err){console.log("Unable to hide: js-consent-banner")}
    // JS dismissable what?
    try{
        var js_dismissable_heros = document.getElementsByClassName("js-dismissable-hero");
        for (let i=0; i<js_dismissable_heros.length; i++){
            js_dismissable_heros[i].style.display = 'none';
        }
    }catch(err){console.log("Unable to hide: js-dismissable-hero")}
    // Make page visible again
    var page = document.getElementsByTagName('html')[0];
    page.style.display = 'block';
    console.log("StackOverfocus finished");
});