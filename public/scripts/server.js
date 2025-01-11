async function getLocation(){
    function success(position){
      console.log("Location ",position.coords.latitude);
    }
    function error(){
      console.log("unable to get location");
    }
    const location = await navigator.geolocation.getCurrentPosition(success,error);
}
getLocation();


// Here is the example of callback function

console.log("this is the data by callback function")
function getting_post(userId){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
   .then((res)=>{
      return res.json().then((data)=>{
        console.log("here is the users posts")
        console.log(data);
      })
   })
  .catch((err)=>{
    console.log(err);
})
}
function getting_data(callback){
    fetch("https://jsonplaceholder.typicode.com/posts/2")
   .then((res)=>{
      return res.json().then((data)=>{
        console.log("here is the user details ")
        console.log(data);
        callback(data.id);
      })
   })
  .catch((err)=>{
    console.log(err);
})
}

// getting_data();
getting_data(getting_post);

console.log("this is the data by creating promise and fullfilling it by then and catch")
//! this is create new promise 
const featchData= fetch("https://jsonplaceholder.typicode.com/albums");
console.log("this is promise ",featchData);

// this is fullfilling promise by then and catch methods 
// featching data from pending promise 
featchData.then((data)=>{
   return data.json().then((data)=>{
    console.log("there is library data ",data);
   }).catch((err)=>{
    console.log(err);
   })
}).catch((err)=>{
  console.log(err);
})

// instead of using then catch we can use async and await 
console.log("this is the data by using promise and  fullfilling it by async and await ");
async function getComments(){
   try{
    const getResponse= await fetch("https://jsonplaceholder.typicode.com/comments");
    console.log("getting promise of comments ",getResponse);
    const data = await getResponse.json();
    console.log("getting data of commments ",data );
   }
   catch(err){
    console.log(err);
   }
}

getComments();