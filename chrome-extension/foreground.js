
var link_array = [];
var status_array = [];  

function usage(){
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    link_array.push(links[i].href);
    //console.log(link_array)
//     status_array.push(UrlExists(links[i].href));
//     console.log(status_array)
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
