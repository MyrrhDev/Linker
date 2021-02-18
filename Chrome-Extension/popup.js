document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', linker);
});

function getURL(){
  console.log(5);
  window.alert("Page URL is: " + window.location.href);
}
function linker(){
  var links = document.links;
  window.alert(links.length);
}
function hello(){
  alert("Hello");
}

function UrlExists(url)
{
var http = new XMLHttpRequest();
http.open('HEAD', url, false);
http.send();
return http.status;
}

var link_array = [];
var status_array = [];  

function usage(){
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    link_array.push(links[i].href);
    //status_array.push(UrlExists(links[i].href));
  }
}

function refresh(){
  link_array = [];
  status_array = [];
}

function final(){
  usage();
  window.alert(link_array[5]);
  refresh();

}


