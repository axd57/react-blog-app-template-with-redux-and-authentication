//Redux core
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import blogReducer from "../reducers/blogs";
import authReducer from "../reducers/auth";
//Asenkron sorguları redux store ile kullanmaya yarıyor, reduxta sadece senkron sorgular çalışıyor 
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store      container yapısı, uygulamadaki tüm statelere buradan ulaşılıyor.
export default () => {
    const store = createStore(
        // Birden fazla reducer i bir arada store içinde kullanabilmeyi sağlıyor.
        combineReducers({
          blogs: blogReducer,
          auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}
