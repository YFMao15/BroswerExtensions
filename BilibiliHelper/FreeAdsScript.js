if (document.getElementsByClassName("l-con")[0]) {
    var left_column_divs = document.getElementsByClassName("l-con")[0];
    var config = {childList: true};
    var callback = function(mutations, observer) {
        for(var mutation of mutations) {
            if (mutation.type === 'childList') {
                if (document.getElementsByClassName("ad-report")) {
                    for (var idx = 0; idx < document.getElementsByClassName("ad-report").length; idx ++) {
                        document.getElementsByClassName("ad-report")[idx].style.display = "none";
                        console.log("Video bottom ads hidden");
                    }
                }
            }
        }
    }
    var observer = new MutationObserver(callback);
    observer.observe(left_column_divs, config);
}

if (document.getElementsByClassName("r-con")[0]) {
    var right_column_divs = document.getElementsByClassName("r-con")[0];
    var config = {childList: true};
    var callback = function(mutations, observer) {
        for(var mutation of mutations) {
            if (mutation.type === 'childList') {
                if (document.getElementsByClassName("ad-report")) {
                    for (var idx = 0; idx < document.getElementsByClassName("ad-report").length; idx ++) {
                        document.getElementsByClassName("ad-report")[idx].style.display = "none";
                        console.log("Video side ads hidden");
                    }
                }
                if (document.getElementById("slide_ad")) {
                    document.getElementById("slide_ad").style.display = "none";
                    console.log("Video side ads hidden");
                }
                if (document.getElementsByClassName("close-btn")[0]) {
                    document.getElementsByClassName("close-btn")[0].click();
                    console.log("Video side ads closed");
                }
            }
        }
    }
    var observer = new MutationObserver(callback);
    observer.observe(right_column_divs, config);
}


if (document.getElementsByClassName("proxy-box")[0]) {
    var category_divs = document.getElementsByClassName("proxy-box")[0];
    var config = {childList: true};
    var callback = function(mutations, observer) {
        for(var mutation of mutations) {
            if (mutation.type === 'childList') {
                if (document.getElementsByClassName("banner-card")) {
                    for (var idx = 0; idx < document.getElementsByClassName("banner-card").length; idx ++) {
                        document.getElementsByClassName("banner-card")[idx].style.display = "none";
                        console.log("Main page banner ads hidden");
                    }
                }
            }
        }
    }
    var observer = new MutationObserver(callback);
    observer.observe(category_divs, config);
}


if (document.getElementById('reportFirst2')) {
    var mainpage_promote_ad = document.getElementById('reportFirst2');
    mainpage_promote_ad.style.display = "none";
    console.log("Main page promotions hidden");
}