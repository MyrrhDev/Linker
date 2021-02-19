// function UrlExists(url) {
//     var http = new XMLHttpRequest();
//     http.open('HEAD', url, false);
//     http.send();
//     return http.status;
// }


function UrlExists(url) {


  fetch(url)
      .then(console.log)
      .catch(err=>console.err)
  
// if(XMLHttpRequest)
// {
  /*var request = new XMLHttpRequest();
 
 
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
   request.open("GET", url);
   request.send();

   }

 // This version of XHR does not support CORS
 // Handle accordingly
// }
    return request.status;*/
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

/*
const api_key = "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"

const sgMail = require('@sendgrid/mail')
const msg = {
  to: 'pastorvaldivia.m@gmail.com', // Change to your recipient
  from: 'mayra.pastor@estudiantat.upc.edu', // Change to your verified sender
  subject: 'Sendgrid test 123',
  text: link_array[0] + " and " + link_array[5],
  html: '<strong>Will add more later</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
  */