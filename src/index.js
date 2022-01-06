import React from "react";
import ReactDOM from "react-dom";

//React redux
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./app.css";

//Store
import configureStore from "./store/configureStore"

import {addBlog, removeBlog, editBlog, getBlogsFromDatabase} from "./actions/blogs"

//Firebase
import "./firebase/firebaseConfig"

const store= configureStore();



// //State action metotları vasıtasıyla değiştiğinde çalışıyor
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //Action

// //Add blog
// const blog1 = store.dispatch(
//   addBlog({ title: "Hi-1", description: "cat.-1", dateAdded: Date.now()})
// );

// console.log("blog id info: ", blog1.blog.id);

// const blog2 = store.dispatch(
//   addBlog({ title: "Hi", description: "cat.", dateAdded: Date.now()})
// );

// store.dispatch(
//   addBlog({ title: "Hi-3", description: "cat.", dateAdded: Date.now()})
// );

// //Remove blog
// store.dispatch(
//   removeBlog({id: blog1.blog.id})
// );

// //Update blog
// store.dispatch(
//   editBlog(blog2.blog.id, {title: "Hi- updated"})
// );


ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));
store.dispatch(getBlogsFromDatabase()).then(() => {
  // Provider ile App routerdan erişile tüm componentlere veriler aktarıla biliniyor. Veriler store dan alınıyor.
ReactDOM.render(<Provider store={store}> <AppRouter /> </Provider>, document.getElementById("root"));
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
