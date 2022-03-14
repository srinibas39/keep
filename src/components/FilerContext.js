import { createContext, useContext, useReducer } from "react";


export const FilterContext=createContext();

export const FilterProvider=({children})=>{

    const reducerFn=(state,action)=>{
        switch(action.type){
            case "SELECT_FILTER":
                return {...state,filter:action.payload}
            default:
                return {...state}
        }
    }
  
    const [state,dispatch] = useReducer(reducerFn,{filter:"work"});
    
    return <FilterContext.Provider value={{state,dispatch}}>
            {children}
        </FilterContext.Provider>
}

export const useFilter=()=>useContext(FilterContext)