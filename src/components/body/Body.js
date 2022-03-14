import { useEffect, useState } from "react";
import { Editor } from "../Editor/Editor";
import { Note } from "../Note/Note";
import { NoteProvider, useNotes } from "../NoteContext";
import "./Body.css"

export const Body = () => {
   
  const{tags,setTags,tag,setTag}=useNotes()
    useEffect(() => {
        setTag("")
    }, [tags])
   
    
    return <div className="body">
        <nav className="nav">
            <h2>Filter</h2>
            <ul>
                {
                    tags.map((el, idx) => {
                        return <li key={idx}>{el}</li>
                    })

                }
                <li><input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                    <button onClick={() => setTags([...tags, tag])}>+</button></li>
            </ul>
        </nav>
        <div className="content">
        

            <Editor/>
            <Note/>

        
        </div>
    </div>
}