var tab_list = null;

chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.query(
        {url : "*://*.youtube.com/watch?v=*"},
        (tabs) => {
            tab_list = tabs;
            if ((tab_list != null) && (tab_list.length > 0)) {
                for (var i = 0; i < tab_list.length; i ++) {
                    chrome.scripting.executeScript(
                        {
                            target: {tabId: tab_list[i].id},
                            files: ['/FreeAdsScript.js'],
                        }
                    )
                }
            }
        })
    tab_list = null;
})