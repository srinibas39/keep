
import { useEffect } from "react";
import { useFilter } from "../FilerContext";
import { useNotes } from "../NoteContext"
import "./Note.css"
import { Snote } from "./Snote";

export const Note = () => {
    const { notes, selectedFilter,del,setNotes} = useNotes();
     const {state}=useFilter();
     
     const getFilteredNotes=()=>{
         return notes.filter((el)=>el!==del)
     }
     const filteredNotes=getFilteredNotes();
     
     useEffect(()=>{
        setNotes(filteredNotes)
    },[del])
    
    return <div className="notes-container">
        {
                     notes.map((el, idx) => {
                return <Snote  key={idx} el={el} selectedFilter={selectedFilter} color={state.color}/>
            })
        }
    </div>

}

