
var link_array = [];
var status_array = [];  

function validateURL(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  if (http.status == 404)
    link_array.push(url)
  return http;
}

function usage(){
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    try{
      validateURL(links[i].href)
      }
      catch{
          link_array.push(links[i].href);
      }
  }
  if(link_array.length == 0){
    link_array.push("There seem to be no broken links! :P");
  }
  console.log(link_array)
  chrome.runtime.sendMessage({message: 'send email'});
  chrome.storage.local.set({ "links": link_array });
  console.log('I SENT THE MESSAGE')
}

usage();
