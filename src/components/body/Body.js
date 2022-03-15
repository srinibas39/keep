import { useEffect, useReducer, useState } from "react";
import { Editor } from "../Editor/Editor";
import { useFilter } from "../FilerContext";
import { Note } from "../Note/Note";
import { NoteProvider, useNotes } from "../NoteContext";
import "./Body.css"

export const Body = () => {
   
  const{tags,setTags,tag,setTag}=useNotes();
   const {state,dispatch} = useFilter();


    useEffect(() => {
        setTag("")
    }, [tags])
   
    
    return <div className="body">
        <nav className="nav">
            <h2>Filter</h2>
            <ul>
                {
                    tags.map((el, idx) => {
                        return <li className={state.filter===el ? "select" :""} onClick={()=>dispatch({type:"SELECT_FILTER",payload:el})} key={idx}>{el}</li>
                    })

                }
                <li><input className="filter-input" type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                    <button className="filter-button" onClick={() => setTags([...tags, tag && tag])}>+</button></li>
            </ul>
        </nav>
        <div className="content">
        

            <Editor/>
            <Note/>

        
        </div>
    </div>
}