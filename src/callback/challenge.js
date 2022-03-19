//consume an API to test callbacks
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //same as import
let url_api = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api , callback){
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET' , url_api , true);

  xhttp.onreadystatechange = function(){
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        callback(null , JSON.parse(xhttp.responseText));
      }else{
        const error = new Error('Error ' + url_api);
        return callback(error , null);
      }
    }
  }

  xhttp.send();
}


//try to get the first data
fetchData(url_api , function(error1 , data1) {
  if(error1) return console.error(error1);
  //then try to get second request
  fetchData(url_api + data1.results[0].id , function(error2 , data2) {
    if(error2) return console.error(error2);
    //then try to get third request
    fetchData(data2.origin.url  ,function(error3 , data3) {
      if(error3) return console.error(error3);

      //At the end we get all data if no error occurs
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
