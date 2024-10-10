// function getUsers(){
//     return[
//         {username:'john', email:'john@test.com'},{username:'jane', email:'jane@test.com'},
//     ];
// }
// function findUser(username){
//     const users = getUsers();
//     const user = users.find((user) => user.username === username);
//     console.log(user);

//     return user;
// }
// function walkDog(callback){
//     setTimeout( ()=> {
//      console.log("you walk the dog");
// callback();
//     },1500)
// }
// function cleanKitchen(callback){
//     setTimeout( ()=>{ 
//         console.log("U clean the kitchen");
//         callback();
//     } ,2000)
// }
// function takeThetrash(callback){
//     setTimeout(()=>{
//         console.log("take the trash out");
//         callback();
//     } ,500)
// }
// walkDog( 
//     ()=>{
//         cleanKitchen(
//             ()=>{
//                 takeThetrash(
//                     ()=>{console.log("you finished all the cores");}
//                 )
//             }
//         )
//     }
// )


// function walkDog() {
    
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const dogWalked =true;
//             if(dogWalked){
//                 resolve("You walk the dog")
//             }
//                else{
//                 reject("You didnt walk the dog")
//                }
//         }, 1500);
//     })
// }

// function cleanKitchen() {
    
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const cleanedKitchen = true
//             if(cleanedKitchen){
//                 resolve("You cleaned the kitchen")
//             }
//             else{
//                 reject("You did not clean the kitchen")
//             }
//             resolve("You clean the kitchen");
//             callback();
//         }, 2000);
//     })
// }

// function takeTheTrash() {
  
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const  tookTheTrash = true
//             if (tookTheTrash){
//                 resolve("You took the trash")
//             }
//             else{
//                 reject("You did not take the trash out")
//             }
            
//         }, 500);
//     })
// }
// walkDog().then(value=>{ console.log(value); return cleanKitchen()})
//         .then(value => {console.log(value); return takeTheTrash()})
//         .then(value =>{console.log("You finished all the cores")})
//         .catch(error => console.error(error))


// Asyc /await


// async function walkDog() {
    
       
//     }
    
// function cleanKitchen() {
        
        
//     }
    
// function takeTheTrash() {
      
      
//     }
// async function doChores(){
//     try{
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//      const cleanKitchenResult =  await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeTheTrashResults = await takeTheTrash();
//     console.log(takeTheTrashResults);
// }
// catch(error){
// console.error(error)
// }
//     }

// async function fetchData(){
//     const response = await fetch("https://api.example.com/data")
//     const data = await response.json();
//     return data;
// }
// fetchData().then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.error(error);
// });

// building AudioProcessingEvent

// fetch('https://api.example.com/data',{
//     method:'POST',
//     headers:{
//         'Authorization':'Bearer <your_token>',
//         'content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         name:'New Data',
//         description:'Important information'
//     })//it should changed to a string
// })
// .then(response=>{
//     if(!response.ok){
//         throw new Error('Network response was not ok')
//     }
//     return response.json();
// })
// .then(data=>{
//     console.log('Success:',data);
// })
// .catch(error=>{
//     console.error('Error:',error);
// })
// //the above code in async/await .
// async function fetchData(){
//     try{
//         const response = await fetch('https://api.example.com/data')
//         if(!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log('Success:',data);   
//     } catch(error){
//         console.error('Error;',error);
//     }
// }
// fetchData();

// 
// const myPromise = new promise((resolve, reject)=>{
//     const error = false;
//     if (error){
//         resolve("Yes ,resolved the promise");
//     }else{
//         reject("No rejected the promise");
//     }
// });
// console.log(myPromise)
// myPromise.then(value =>{
//     console.log(value)
// })
// const myPromise = new Promise((resolve, reject)=>{
//      const error = false;
//      if(error){
//         reject("No, rejected the promise");
//      }else{
//         resolve("Yes, resolved the promise")
//      }
// });
// console.log(myPromise);

// myPromise.then(value=>{
//     console.log(value);
// }) .catch(error=>{
//     console.log(error);
// })
// .then(value =>{
//     return value +1;
// })
// .then(newValue=>{
//     console.log(newValue);
// })
// .catch(error=>{
//     console.log(error)
// })
// // reason we have promises is requesting data from another server in the web.makes sense when we work with thenables.fetch doesn't require us to create a new promise.
// //
// const mySecondPromise = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         resolve("Your promise is resolved")
//     },2000)
// })
// mySecondPromise.then(value=>{
// console.log(value);
// })
// myPromise.then(value=>{
//     console.log(value);
// })

// fetch will request data from another place on the web for example

const users = fetch("https://JSONplaceholder.typicode.com/users")
//pending state of the promise
console.log(users);
fetch("https://JSONplaceholder.typicode.com/users")
    .then(response=>{
        return response.json();
    })
    then(data=>{
        console.log()
    })