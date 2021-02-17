document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', usage);      
});

function getURL(){
  window.alert("Page URL is: " + window.location.href);
}

function UrlExists(url)
{
var http = new XMLHttpRequest();
http.open('HEAD', url, false);
http.send();
return http.status;
}



function usage(){
  var link_array = [];
  var status_array = [];  
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    link_array.push(links[i].href);
    status_array.push(UrlExists(link_array[i]));
  }
  window.alert(link_array, status_array);
}
