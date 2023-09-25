import { createSlice } from "@reduxjs/toolkit"
import {dispatch} from "../Store.js"
const initialState ={
    sideBar:{
        open:false,
        type:"CONTACT"
    }
}
const slick = createSlice({
    name:"app",
    initialState,
    reducers :{
        toggleSidebar(state ,action){
            state.sideBar.open = !state.sideBar.open
        },
        updateSidebarType(state,action){
            state.sideBar.type= action.payload.type ;
            console.log({staetType:state.sideBar.type});
        }
    },
})

export default slick.reducer


export function toggleSidebar (){
    return async()=>{
         dispatch(slick.actions.toggleSidebar())
    }         

}
export function updateSidebarType (type){
    console.log({type});
    return async()=>{
         dispatch(slick.actions.updateSidebarType({type}))
    }         

}