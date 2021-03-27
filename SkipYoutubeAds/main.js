var tab_list = null;

chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.query(
        {url : "*://*.youtube.com/watch?*"},
        (tabs) => {
            tab_list = tabs;
            if ((tab_list != null) && (tab_list.length > 0)) {
                for (var i = 0; i < tab_list.length; i ++) {
                    chrome.tabs.executeScript(
                        tab_list[i].id,
                        {file: '/script.js'});
                }
            }
        })
    tab_list = null;
})