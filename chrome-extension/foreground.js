// function UrlExists(url) {
//     var http = new XMLHttpRequest();
//     http.open('HEAD', url, false);
//     http.send();
//     return http.status;
// }


function UrlExists(url) {
// if(XMLHttpRequest)
// {
  var request = new XMLHttpRequest();
  if("withCredentials" in request)
  {
   // Firefox 3.5 and Safari 4
   request.open('GET', url, true);
//    request.onreadystatechange = handler;
   request.send();
  }
  else if (XDomainRequest)
  {
   // IE8
   var request = new XDomainRequest();
   request.open("get", url);
   request.send();

   
  }

 // This version of XHR does not support CORS
 // Handle accordingly
// }
    return request.status;
}


var link_array = [];
var status_array = [];  

function usage(){
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    link_array.push(links[i].href);
    console.log(link_array)
    status_array.push(UrlExists(links[i].href));
    console.log(status_array)
  }
//   window.alert(link_array);
}

usage();
console.log(link_array)
console.log(status_array)