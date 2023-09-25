






import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import appReducer from "./Slices/app.js"

export const rootPersitConfig ={
    key:"root",
    storage,
    keyPrefix:"redux-",
    //whiteList
    //blackList
}

export const rootReducer = combineReducers({
    app:appReducer,
})

