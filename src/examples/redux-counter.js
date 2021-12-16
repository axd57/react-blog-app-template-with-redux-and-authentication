import {createStore} from "redux"

const initState={
  count:10
}

//Reducer
const counterReducer = (state= initState, action)=>{
  console.log("store created")

  switch (action.type) {
    case "INCREMENT":
      const value = typeof action.incrementBy === "number" ? action.incrementBy : 1; // veri olup olmadığı kontol ediliyor.
      return{
        count: state.count + value
      }
    case "DECREMENT":
      return{
        count: state.count - 1
      }
      
      
      default:
        return state
  } 
};


//Store      container yapısı, uygulamadaki tüm statelere buradan ulaşılıyor.
const store= createStore(counterReducer);


// get state manuel
console.log("Manual ", store.getState());

//dispatch metodu aracılıyla state üzerinde değişiklik olduğunda state gösterme
store.subscribe(()=>{
  console.log("Changed ", store.getState());
});


//increment, decrement, reset => action (object)
store.dispatch({
  type: "INCREMENT",
  incrementBy: 10
});

store.dispatch({
  type: "DECREMENT"
});