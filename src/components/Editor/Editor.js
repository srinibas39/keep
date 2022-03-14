

import { useState } from "react";
import { useNotes } from "../NoteContext"
import "./Editor.css"
export const Editor = () => {
  const {noteText,setNoteText,notes,setNotes,tags,selectedFilter,setSelectedFilter} =useNotes();
  
  console.log(selectedFilter);

    return <div className="editor">
        <div className="editor-title">
            <span>Title</span>
            <span className="material-icons-outlined" 
            style={{cursor:"pointer"}}
            onClick={()=>setNotes([...notes,noteText])}>
                push_pin
            </span>
            

        </div>
        <input type="text" placeholder="Take a note" value={noteText} onChange={(e)=>setNoteText(e.target.value)} />
        <div className="editor-footer">

            <select name="filters" onChange={(e)=>setSelectedFilter(e.target.value)}>
                {
                    tags && tags.map((el)=>{
                        return <option  value={el} >{el}</option>
                    })
                }
                
            </select>
            <span className="material-icons-outlined color-icon">
                palette
            </span>
            <span className="btn-close">close</span>
        </div>


    </div>
}