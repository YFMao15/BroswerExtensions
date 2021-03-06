if (document.getElementsByClassName('video-ads').length > 0) {
    var ad_component = document.getElementsByClassName('video-ads')[0];
    var config = {childList: true};

    var callback = function(mutations, observer) {
        for(var mutation of mutations) {
            if (mutation.type === 'childList') {
                if (document.getElementsByClassName("ytp-ad-skip-button").length > 0) {
                    document.getElementsByClassName("ytp-ad-skip-button")[0].click();
                    console.log("Long-time ads skipped");
                } else if (document.getElementsByClassName("ytp-ad-overlay-close-button").length > 0) {
                    document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
                    console.log("Subtitle ads skipped");
                } 
            }
        }
    };
    
    var observer = new MutationObserver(callback);
    observer.observe(ad_component, config);
}

if (document.getElementById("player-ads")) {
    document.getElementById("player-ads").style.display = "none";
    console.log("Sidebar ads hidden");
}