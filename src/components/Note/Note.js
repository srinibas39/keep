import { useState } from "react";
import { useFilter } from "../FilerContext";
import { useNotes } from "../NoteContext"
import "./Note.css"
import { Snote } from "./Snote";

export const Note = () => {
    const { notes, selectedFilter} = useNotes();
    
    return <>
        {
            notes && notes.map((el, idx) => {
                return <Snote e key={idx} el={el} selectedFilter={selectedFilter}/>
            })
        }
    </>

}

