
//Fetches the current location of the user
//navigator.geolocation.getCurrentPosition(position => {
   // console.log(position);
//});

//console.log("done");

// Testing the Promise API
//const promise = new Promise((resolve, reject) => {
  // navigator.geolocation.getCurrentPosition(resolve(position), reject(error)); 
//});

//promise
  //.then(position => console.log(position))
  //.catch(error => console.error(error))
  //.finally(() => console.log('done'));

fetch("https://jsonplaceholder.typicode.com/posts/1");