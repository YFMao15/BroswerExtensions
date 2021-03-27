// Skip the ads in the front
if (document.getElementsByClassName("ytp-ad-skip-button").length > 0) {
    document.getElementsByClassName("ytp-ad-skip-button")[0].click();
    console.log("front ads jumped");
}

// Skip the ads in the middle
var video = document.getElementsByClassName('html5-video-player')[0];
var config = {attributes: true};

var callback = function(mutations, observer) {
    for(var mutation of mutations) {
        if (mutation.type === 'attributes') {
            if (document.getElementsByClassName("ytp-ad-skip-button").length > 0) {
                document.getElementsByClassName("ytp-ad-skip-button")[0].click();
                console.log("middle ads jumped");
            }
        }
    }
};

var observer = new MutationObserver(callback);
observer.observe(video, config);
