//Redux core
import { createStore, combineReducers } from "redux";
import blogReducer from "../reducers/blogs";
import authReducer from "../reducers/auth";

//Store      container yapısı, uygulamadaki tüm statelere buradan ulaşılıyor.
export default () => {
    const store = createStore(
        // Birden fazla reducer i bir arada store içinde kullanabilmeyi sağlıyor.
        combineReducers({
          blogs: blogReducer,
          auth: authReducer,
        })
    );

    return store;
}
