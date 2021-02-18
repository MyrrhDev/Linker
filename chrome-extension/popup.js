document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.querySelector('button');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('i injected'))
    });
  }, false);
}, false);
