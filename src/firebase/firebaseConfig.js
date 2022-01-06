import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, update, onValue, child, get, push, onChildRemoved, onChildAdded } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7ZxfhKrgEeLG7onANYxRx1ZMduvBv1gA",
  authDomain: "react-blog-app-29ca9.firebaseapp.com",
  projectId: "react-blog-app-29ca9",
  storageBucket: "react-blog-app-29ca9.appspot.com",
  messagingSenderId: "48301207202",
  appId: "1:48301207202:web:4920c6fe350a21ad6331fb"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export {database as default}

// //Root a veri ekleme
// set(ref(database), {
//     title:"Blog",
//     description: "Blog des",
//     auter: {
//         name:"Cat",
//         surname: "Dog"
//     }
// }).then(() =>{ //Düzgün bir şekilde işlem yapıldığında çalışıyor, then catch (promise)
//     set(ref(database, "tags"), ["tag1", "tag2", "tag3"]).then(()=>{
//         console.log("tags added")
//     });
//     console.log("Added");

// }).catch((e) =>{ //İşlem sırasında hata çıktığında çalışıyor.
//     console.log("Error: ", e);
// });

// // Veri ekleme işlemi daha önce olmasına rağmen console.log daha önce çalışır çünkü işlemi daha azdır, asenkron
// console.log("Add is started")

// // Özel alana veri ekleme
// set(ref(database, "tags"), ["Test", "Test 2", "Test 3"]);

// // Özel veri güncelleme
// set(ref(database, "auter"), {
//     name : "Cat-u",
//     surname: "Dog-u"
// });

// //Object eleman değiştirme
// set(ref(database, "auter/name"), "Cat-u2");

// // Var olan bir alana yeni eleman ekleme
// push(ref(database, "auter"), {cat : "test"});




// //Veri silme
// // remove(ref(database, "title"));
// // set(ref(database, "title"), null);

// //Herşeyi silme
// //remove(ref(database));
// //set(ref(database), null);




// //veri güncelleme
// update(ref(database), {
//     title: "Updated Blog",
//     "auter/name" : "Cat-u2 Updated",
//     //Olayan alan güncellenmek istendiğinde o alan eklenir
//     imageURL: "Test"
// });

// update(ref(database, "auter"), {
//   name: "Cat-u2 Updated2"
// });

// // id ile veri güncelleme
// update(ref(database, "auter/-MsAon2eD0WuWpJIGY9M"), {
//     name: "Cat-u2 Updated3"
//   });




// //Veri sorgulama
// // Gelen verilerde değişiklik olduğunda yeni veriler otomatik olarak gelir
// onValue(ref(database), (snapshot) =>{
//     console.log("Datas - onValue: ", snapshot.val());
// });

// onValue(ref(database, "auter"), (snapshot) =>{
//     console.log("Auter data - onValue: ", snapshot.val());
// });

// // Sorgu bir kere çalışır gelen verilerde güncelleme olsa bile  veriler otomatik olarak gelmez
// get(child(ref(database), "auter")).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log("Auter data - once: ",snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });







//   //Diziler
//  // Firebase eklenme sırasına göre bir id verir
//   const blogs = [
//     {
//       id: 1,
//       title: "Cat"
//     },
//     {
//       id: 2,
//       title: "Dog"
//     },
//     {
//       id: 3,
//       title: "Bird"
//     }
//   ];

//   const users = [
//     {
//       id: 1,
//       name: "Cat"
//     },
//     {
//       id: 2,
//       name: "Dog"
//     },
//     {
//       id: 3,
//       name: "Bird"
//     }
//   ]

//   set(ref(database), {
//     blogs: blogs,
//     users: users
//   });

//   // Obje
//   const blogsO = {
//     10:{
//       id: 1,
//       title: "Cat"
//     },
//     20:{
//       id: 2,
//       title: "Dog"
//     },
//     30:{
//       id: 3,
//       title: "Bird"
//     }
//   };

//   const usersO = {
//     40:{
//       id: 1,
//       name: "Cat"
//     },
//     50:{
//       id: 2,
//       name: "Dog"
//     },
//     60:{
//       id: 3,
//       name: "Bird"
//     }
//   };

//   set(ref(database), {
//     blogs: blogsO,
//     users: usersO
//   });

//   onValue(ref(database, "users/50"), (snapshot) =>{
//     console.log("User 50 data - onValue: ", snapshot.val());
// });

// push(ref(database, "users"), {
//   70:{
//     id: 3,
//     name: "Duck"
//   }
// });



// //Dizi getirme
// get(child(ref(database), "users")).then((snapshot) => {
//   if (snapshot.exists()) {
    
//     let usersa =[];
//     snapshot.forEach((user)=>{
//       usersa.push({
//           id: user.id,
//           ...user.val()
//         })
//     });
    
//     console.log("User array: ", usersa);
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// //Child silindikten sonra çalışıyor
// onChildRemoved(child(ref(database), "users"), ()=>{
//   console.log("---Users child removed---");
// });

// onChildAdded(child(ref(database), "users"), ()=>{
//   console.log("---Users child added---");
// });