import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove } from "firebase/database";

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

//Root a veri ekleme
set(ref(database), {
    title:"Blog",
    description: "Blog des",
    auter: {
        name:"Cat",
        surname: "Dog"
    }
}).then(() =>{ //Düzgün bir şekilde işlem yapıldığında çalışıyor, then catch (promise)
    set(ref(database, "tags"), ["tag1", "tag2", "tag3"]).then(()=>{
        console.log("tags added")
    });
    console.log("Added");
    
}).catch((e) =>{ //İşlem sırasında hata çıktığında çalışıyor.
    console.log("Error: ", e);
});

// Veri ekleme işlemi daha önce olmasına rağmen console.log daha önce çalışır çünkü işlemi daha azdır, asenkron
console.log("Add is started")

// Özel alana veri ekleme
set(ref(database, "tags"), ["Test", "Test 2", "Test 3"]);

// Özel veri güncelleme
set(ref(database, "auter"), {
    name : "Cat-u",
    surname: "Dog-u"
});

//Object eleman güncelleme
set(ref(database, "auter/name"), "Cat-u2");


//Veri silme
remove(ref(database, "title"));
set(ref(database, "title"), null);

//Herşeyi silme
remove(ref(database));
set(ref(database), null);

