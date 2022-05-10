var tab_list = null;

function logTabs(tabs) {
    tab_list = tabs;
    if ((tab_list != null) && (tab_list.length > 0)) {
        for (var i = 0; i < tab_list.length; i++) {
            browser.tabs.executeScript(
                tab_list[i].id,
                { file: '/FreeAdsScript.js' });
        }
    }
}
  
function onError(error) {
    console.log(`Error: ${error}`);
}

browser.tabs.onUpdated.addListener(() => {
    var querying = browser.tabs.query({url: "*://*.bilibili.com/*"});
    querying.then(logTabs, onError);
    tab_list = null;
})