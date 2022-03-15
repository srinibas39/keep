import { createContext, useContext, useReducer } from "react";

export const FilterContext=createContext();

export const FilterProvider=({children})=>{

    
    const reducerFn=(state,action)=>{
        switch(action.type){
            case "SELECT_FILTER":
                return {...state,filter:action.payload}
            case "SELECT_COLOR":
                return {...state,color:action.payload} 
            case "REMOVE_NOTE":
                return {...state,notes:state.notes.filter((el)=>el!==action.payload)}    
            default:
                return {...state}
        }
    }
 
    const [state,dispatch] = useReducer(reducerFn,{filter:"work",color:null});
    
    return <FilterContext.Provider value={{state,dispatch}}>
            {children}
        </FilterContext.Provider>
}

export const useFilter=()=>useContext(FilterContext)