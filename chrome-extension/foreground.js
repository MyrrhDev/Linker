
var link_array = [];
var status_array = [];  

function validateURL(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status;
}

function usage(){
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    link_array.push(links[i].href);

    try{
      validateURL(links[i].href)
      }
      catch{
          link_array.push(links[i].href);
      }

    //console.log(link_array)
//     status_array.push(UrlExists(links[i].href));
//     console.log(status_array)
  }
  if(link_array.length == 0){
    link_array.push("There seem to be no broken links! :P");
  }
  console.log(link_array)
  chrome.runtime.sendMessage({message: 'send email'});
  console.log('I SENT THE MESSAGE')
//   window.alert(link_array);
}

usage();
console.log(link_array)
// console.log(status_array)
// send_mail();
