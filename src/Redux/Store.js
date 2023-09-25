






import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";

import { rootReducer ,rootPersitConfig } from "./RootReducer.js";


export const store = configureStore({
    reducer: persistReducer(rootPersitConfig , rootReducer),
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
        immutableCheck:false
    })
})
console.log({store});

 export const persistor = persistStore(store)
  export  const {dispatch} = store

//  export const useSelector= useAppSelector;
//   export const useDispatch= ()=>useAppDispatch();

