import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import "./app.css"
//Redux core
import {createStore} from "redux"

const initState={
  count:10
}

//Store      container yapısı, uygulamadaki tüm statelere buradan ulaşılıyor.
const store= createStore((state= initState)=>{
  return state;
});


// get state
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
