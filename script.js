
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

// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');}       
//      return response.json(); 
//   })
//   .then(person => { 
//     console.log(`${person.name} works for ${person.company.name}`); }
//   )
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   })

// Challenge: Fetch user data using async 
// Original user fetch code
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }
      
//       return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))

async function getUserData() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const person = await response.json();
    console.log(person);
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

getUserData()
