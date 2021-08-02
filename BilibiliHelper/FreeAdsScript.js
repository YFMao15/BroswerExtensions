if (document.getElementsByClassName('close-btn').length > 0) {
    var side_ads_close_btn = document.getElementsByClassName('close-btn')[0];
    side_ads_close_btn.click();
    console.log("Ad close button clicked");
}

if (document.getElementsByClassName('ad-report').length > 0) {
    var video_side_ads = document.getElementsByClassName('ad-report');
    for (var idx = 0; idx < video_side_ads.length; idx ++) {
        if (video_side_ads[idx].children.length > 0) {
            for (var child_idx = 0; child_idx < video_side_ads[idx].children.length; child_idx ++) {
                if (video_side_ads[idx][child_idx]) video_side_ads[idx][child_idx].style.display = "none";
            }
        }
        video_side_ads[idx].style.display = "none";
        console.log("Video side ads removed");
    }
} else {
    var right_column_divs = document.getElementsByClassName("r-con").children;
    if (right_column_divs) {
        for (var idx = 0; idx < right_column_divs.length; idx ++) {
            if (right_column_divs[idx].tagName.lower() === "a") {
                right_column_divs[idx].style.display = "none";
            }
        }
    }
}

if (document.getElementsByClassName('banner-card').length > 0) {
    var mainpage_banner_ads = document.getElementsByClassName('banner-card');
    for (var idx = 0; idx < mainpage_banner_ads.length; idx ++) {
        if (mainpage_banner_ads[idx].children.length > 0) {
            for (var child_idx = 0; child_idx < mainpage_banner_ads[idx].children.length; child_idx ++) {
                if (mainpage_banner_ads[idx][child_idx]) mainpage_banner_ads[idx][child_idx].style.display = "none";
            }
        }
        mainpage_banner_ads[idx].style.display = "none";
        console.log("Main page banner ads removed when the page is idle");
    }
} else {
    var category_divs = document.getElementsByClassName("proxy-box").children;
    if (category_divs) {
        for (var idx = 0; idx < category_divs.length; idx ++) {
            if (category_divs[idx].children.length > 0) {
                if (category_divs[idx][0].tagName.lower() === "a") {
                    category_divs[idx][0].style.display = "none";
                    console.log("Main page banner ads removed when loading the page for the first time");
                }
            }
        }
    }
}

if (document.getElementById('reportFirst2')) {
    var mainpage_promote_ad = document.getElementById('reportFirst2');
    mainpage_promote_ad.style.display = "none";
    console.log("Main page promotions removed");
}