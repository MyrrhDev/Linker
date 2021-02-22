
var link_array = [];
var status_array = [];  

function usage(){
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    link_array.push(links[i].href);
    console.log(link_array)
//     status_array.push(UrlExists(links[i].href));
//     console.log(status_array)
  }
  chrome.storage.local.set({ "links": link_array });
  chrome.runtime.sendMessage({message: 'send email'});  
  console.log('sent links')
}

usage();
console.log(link_array)
// console.log(status_array)
