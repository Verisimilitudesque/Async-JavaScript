
//Fetches the current location of the user
navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
});

console.log("done");

// Testing the Promise API
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promie failed')), 1000);  
});

promise.then(() => console.log('success')).catch( error => console.error('error')).finally(() => console.log('done'));