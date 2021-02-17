import puppeteer from 'puppeteer';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getURL);      
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

var link_array = [];
var status_array = [];

function usage(){
  var links = document.links;
  for(var i=0; i<links.length; i++) {
    link_array.push(links[i].href);
    status_array.push(UrlExists(link_array[i]));
  }
}
