import React from "react";
import ReactDOM from "react-dom";
//React redux
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./app.css";
//Store
import configureStore from "./store/configureStore";
import { getBlogsFromDatabase, clearBlogs } from "./actions/blogs";
//Firebase
import "./firebase/firebaseConfig";
import { onAuthStateChanged, getAuth } from "./firebase/firebaseConfig";

import { loginAction, logoutAction } from "./actions/auth";

const store = configureStore();

//State üzerinde değişiklik olduğunda otomatik çalışıyor.
store.subscribe(()=>{
  console.log("===== Store Changed ====");
  console.log("Auth state: ", store.getState().auth);
  console.log("Blogs state: ", store.getState().blogs);
  console.log("------------------------");
});

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User Login: ", user.uid);
        store.dispatch(loginAction(user.uid));

        store.dispatch(getBlogsFromDatabase()).then(() => {
            renderApp();
        })
    } else {
        store.dispatch(clearBlogs());
        store.dispatch(logoutAction());
        console.log("User Logout.");
        renderApp();
    }
});

let isRendered = false;
const renderApp = () => {
    if(!isRendered) {
        // Provider ile App routerdan erişile tüm componentlere veriler aktarıla biliniyor. Veriler store dan alınıyor.
        ReactDOM.render(
            <Provider store={store}>
                <AppRouter />
            </Provider>, 
            document.getElementById('root')
        );
        isRendered = true;
    }
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
