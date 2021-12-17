import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./app.css";
//Redux core
import { createStore, combineReducers } from "redux";

import { v4 as uuid } from "uuid";

const blogState = [];

//Action creator
const addBlog = ({
  title = "No Title",
  description = "No description.",
  dateAdded = 0,
}) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded,
  },
});

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];

    default:
      return state;
  }
};



const authState = {};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  // Birden fazla reducer i bir arada store içinde kullanabilmeyi sağlıyor.
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

//Action
store.dispatch(
  addBlog({ title: "Hi", description: "cat.", dateAdded: Date.now() })
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
