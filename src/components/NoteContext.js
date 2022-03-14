import { createContext, useContext, useState } from "react";


export const NoteContext=createContext();

export const NoteProvider=({children})=>{
    const [noteText,setNoteText]=useState("");
    const [notes,setNotes]=useState([])
    const [tags, setTags] = useState(["All", "work", "Home", "Class"]);
    const [tag, setTag] = useState("")
    const [selectedFilter,setSelectedFilter]=useState("All");
    return <NoteContext.Provider value={{noteText,setNoteText,notes,setNotes,tags,setTags,tag,setTag,selectedFilter,setSelectedFilter}}>
        {children}
    </NoteContext.Provider>
}

export const useNotes=()=>useContext(NoteContext);