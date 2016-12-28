(() => {
  chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({currentWindow: true, active: true}, currentTab => {
      currentTab = currentTab[0]

      chrome.tabs.query({currentWindow: true}, result => {
        result.map(tab => {
          if (currentTab.id === tab.id) {
            return;
          }

          if (currentTab.url === tab.url) {
            chrome.tabs.remove(tab.id);
          }
        });
      });
    });
  });
})();
