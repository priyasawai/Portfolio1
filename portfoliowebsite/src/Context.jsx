import { createContext, useContext, useReducer } from "react";
import reduce from "./Reducer";
const AppContext=createContext();
const initialState={
    name:"",
    image:""
}
const AppProvider=({children})=>{
    const[state,dispatch]=useReducer(reduce,initialState)
    console.log(state)

    const HomeUpdate=()=>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
             name:"sawai technical",
             image:"./images/img1.jpeg"
            }
        })
    }

    const AboutUpdate=()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"priyanka sawai",
                image:"./images/img2.jpeg"
            }
        })
    }
    
    return <AppContext.Provider value={{...state,HomeUpdate,AboutUpdate}}>{children}</AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext}