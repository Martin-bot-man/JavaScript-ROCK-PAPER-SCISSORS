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

// const users = fetch("https://JSONplaceholder.typicode.com/users")
// //pending state of the promise
// console.log(users);
// fetch("https://JSONplaceholder.typicode.com/users")
//     .then(response=>{
//         return response.json();
//     })
//     .then(data=>{
//         console.log(data)
//         data.forEach(user=>{
//             console.log(user)
//         })
//     })

//     //async/await
//     const myUsers = {
//         userList:[]
//     }
// const myCoolFunction = async()=>{
//   const response = await fetch("https://JSONplaceholder.typicode.com/users")
//   const jsonUserData = await response.json();
//   console.log(jsonUserData)
//   return jsonUserData;
// }
// myCoolFunction()
// const anotherFunction = async ()=>{
//   const data = await myCoolFunction()
//   console.log(data);
//   myUser.userlist = data;
// }
// anotherFunction()
// console.log(myUser.userList)
//work flow function
// const getAllUserEmails = async() => {
//     const response = await fetch("https://JSONplaceholder.typicode.com/users")
//     const jsonUserData = await response.json();

//     const emailUserArray = jsonUserData.map(user =>{
//         return user.Email
//     })
//     console.log(emailUserArray)
// }
//array destructuring in javascript
// let a = 1 ;
// let b = 2 ;
// [a,b]= [b,a]
// console.log(a)
// console.l0g(b)   
// const colors =['red','green','blue','black','white'];
// // [colors[0], colors[4]]= [colors[4],colors[0]];
// // console.log(colors)
// const[firstColor,secondColor,thirdColor,...extraColors] = colors
// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extraColors)
// //extract values from objects

// const person1= {
//     firstName:'spongeBob',
//     secondName:'squidgame',
//     age:30,
//     job:'cook'
// }
// const person2 = {
//     firstName:'Martin',
//     secondName:'Owino',
//     age:26,
// }

// const{firstName, secondName,age,job}= person1
// console.log(firstName);
// console.log(secondName);

// const{firstName,secondName,age, job}= person2;
// console.log(person2);

// function displayPerson ({firstName,secondName,age,job= "se"}){
// console.log(`name :${firstName},${secondName}`);
// console.log(`age: ${age}`)
// console.log(`job :${job}`)
// }

// const person1= {
//     firstName:'spongeBob',
//     secondName:'squidgame',
//     age:30,
//     job:'cook'
// }
// const person2 = {
//     firstName:'Martin',
//     secondName:'Owino',
//     age:26,
// }
// displayPerson(person1)


// async function getUserCountry(){

//     const username = document.getElementById('usernameGet').value;

//     if(!username){
//         alert("please enter a username");
//         return;
//     }
//     const endpoint = new URL(`http://localhost:3000/users/${username}/country`);
// endpoint.searchParams.set(`token`,`YOUR_TOKEN_HERE`)
// console.log(endpoint.toString());
// const response = await fetch(endpoint,{
//     headers:{
//         'Authorization':"YOUR_TOKEN HERE"
//     }
// })
// if (response.status=== 404){
//     alert("username not found")
// }
// const data = await response.json();
// //down here
// console.log(response)
// }
//promises

//  let allgood = true;
//  //define a promise
// //  a promise can be in 1 of the three states pending,fulfilled ,resolved. rejected
// let FetchSomeData = new promise((resolve, reject) => {
//     if(!allgood){
//        reject("error fetching data");
//     }
//     else{
//         resolve({id:1,
//             message:"nice work"
//         });
       
//     }
// });
// // consuming a promise
// FetchSomeData.then(fetchData=>{
//     console.log(`then:`,fetchData)
// }).catch(error=>{console.error(`error:`,err)})

// let fetchData =(data)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
// console.log("Processing data complete");
// resolve({id:1, message:"nice work"})
//         },2000 )
//     })
// }
// let parseData = (data)=>{
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
// let parsedOutput = `parse the data for id: ${data.id} with message :${data.message}`;
// resolve({parsed:parsedOutput})
//     },2000 )
// })
// }
// let echoData = (data)=>{
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
// console.log(data.parsed)
//     },2000 )
// })
// }
// //chaining the promises
// fetchData()
//          .then(parseData)
//          .then(echoData)
//          .catch(error =>console.error("an error occurred"));


        //  const p1 = new Promise((resolve, reject)=>{
        //     setTimeout(resolve, 500 ,'hello' );
        //  });
        //  const p2 = new Promise((resolve, reject)=>{
        //     setTimeout(resolve, 2000,'world');
        //  });
        //  const p3 = 1000;
        //  Promise.all([p1, p2, p3]).then((result)=>{
        //     console.log(result)
        //  }).catch((err)=>{
        //     console.error('all rejections:',err)
        //  })
       
        import fetch from 'node-fetch';
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        fetch (url).then(isStatus200).then(getPost.json).then(json=>console.log(json)).catch(err=>console.error)

        function isStatus200(res){
            if(res.status===200){
return res;
            }else{
                let err = new Error(res.statusText)
                err.response = res
                throw err;
            }
        }
        function getPostJson(res){
            return res.json()
        }